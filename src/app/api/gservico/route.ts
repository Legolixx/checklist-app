import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const token = process.env.HMB_TOKEN!;

    const url = "https://portalhyundai-api.mobato.com.br/v1/gerservicos?page=0&size=232";
    const month = req.nextUrl.searchParams.get("month") || "2025-10";

    const body = {
      filtros: [
        {
          filtro: "data",
          valor: [month],
        },
      ],
    };

    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json, text/plain, */*",
        Origin: "https://portalhyundai.mobato.com.br",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "PT_BR",
        Referer: "https://portalhyundai.mobato.com.br/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Erro na API externa: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    const lista = data?._embedded?.gerservicos || [];

    if (!Array.isArray(lista)) {
      return NextResponse.json({ error: "Formato inesperado da API" }, { status: 500 });
    }

    const inserts = [];

    for (const g of lista) {
      inserts.push(
        prisma.gerServicoList.upsert({
          where: { id: g.id },
          update: {
            dealerId: g.empresa?.id ?? null,
            dealerName: g.empresa?.razao ?? null,
            dealerCode: g.empresa?.codFabrica ?? null,
            referenceMonth: g.data ? new Date(g.data) : null,
            status: g.status ?? null,
          },
          create: {
            id: g.id,
            dealerId: g.empresa?.id ?? null,
            dealerName: g.empresa?.razao ?? null,
            dealerCode: g.empresa?.codFabrica ?? null,
            referenceMonth: g.data ? new Date(g.data) : null,
            status: g.status ?? null,
          },
        })
      );
    }

    for (const insert of inserts) {
  await insert;
}

    return NextResponse.json({
      sucesso: true,
      registros: inserts.length,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
