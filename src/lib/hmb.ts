/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "./prisma";

export async function getValidToken() {
  const existingToken = await prisma.apiToken.findFirst({
    where: {
      expiresAt: {
        gt: new Date(),
      },
    },
  });

  if (existingToken) {
    return existingToken.token;
  }

  const client_id = process.env.HMB_CLIENT_ID!;
  const client_secret = process.env.HMB_CLIENT_SECRET!;

  const tokenResponse = await fetch(
    "https://api.hyundai-brasil.com:8065/v1/oauth/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id,
        client_secret,
      }).toString(),
    }
  );

  if (!tokenResponse.ok) {
    const errorText = await tokenResponse.text();
    console.error("Erro ao obter token:", errorText);
    throw new Error("Erro ao obter token");
  }

  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  await prisma.apiToken.create({
    data: {
      token: accessToken,
      expiresAt: new Date(Date.now() + 4 * 60 * 60 * 1000), // agora + 4 horas
    },
  });

  return accessToken;
}

export function parseOpenDate(s: string | null | undefined): Date | null {
  if (!s || s === "00000000") return null;
  const year = parseInt(s.slice(0, 4));
  const month = parseInt(s.slice(4, 6)) - 1;
  const day = parseInt(s.slice(6, 8));
  if (s.length === 8) return new Date(year, month, day);
  if (s.length === 12)
    return new Date(year, month, day, +s.slice(8, 10), +s.slice(10, 12));
  if (s.length === 14)
    return new Date(
      year,
      month,
      day,
      +s.slice(8, 10),
      +s.slice(10, 12),
      +s.slice(12, 14)
    );
  return null;
}

export function parseErdat(s: string | null | undefined): Date | null {
  if (!s || s === "00000000") return null;
  return new Date(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8));
}

const accessToken = await getValidToken();

// Configurações da API
const URL_API =
  "https://api.hyundai-brasil.com:8065/integration/v1.1/repairorder/GetOSData";
const START_DATE = "20250401";
const END_DATE = "20250930";
const DATE_FIELD = "OPENDT";
const HEADERS: Record<string, string> = {
  Authorization: `Bearer ${accessToken}`,
};

export async function fetchData(dealer: string): Promise<any[]> {
  const params: Record<string, string> = {
    START_DATE: `'${START_DATE}'`,
    END_DATE: `'${END_DATE}'`,
    DATE_FIELD: `'${DATE_FIELD}'`,
    DEALER_CODE: `'${dealer}'`,
  };

  const query = new URLSearchParams(params).toString();

  try {
    const resp = await fetch(`${URL_API}?${query}`, {
      headers: HEADERS,
      method: "GET",
    });

    if (!resp.ok) {
      console.error(`Erro HTTP ${resp.status} para dealer ${dealer}`);
      return [];
    }

    const json = await resp.json();
    return json?.d?.results ?? [];
  } catch (e) {
    console.error("Erro fetchData:", e);
    return [];
  }
}
