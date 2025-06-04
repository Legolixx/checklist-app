import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function getValidToken() {
  const existingToken = await prisma.apiToken.findFirst({
    where: {
      expiresAt: {
        gt: new Date()
      }
    }
  });

  if (existingToken) {

    return existingToken.token;
  }

  const client_id = process.env.HMB_CLIENT_ID!;
  const client_secret = process.env.HMB_CLIENT_SECRET!;

  const tokenResponse = await fetch('https://api.hyundai-brasil.com:8065/v1/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id,
      client_secret
    }).toString()
  });

  if (!tokenResponse.ok) {
    throw new Error('Erro ao obter token');
  }

  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  await prisma.apiToken.create({
    data: {
      token: accessToken,
      expiresAt: new Date(Date.now()) // agora + 4 horas
    }
  });

  return accessToken;
}

export async function POST(req: NextRequest) {
  try {
    const { chassi } = await req.json();

    const accessToken = await getValidToken();

    const url = `https://api.hyundai-brasil.com:8065/integration/v1.1/repairorder/RepairOrderSet?$filter=CHASSI eq '${chassi}'&$expand=CarWashChecklistSet,TechniciansHoursSet,ProductsSet,ServicesSet`;

    const repairOrderResponse = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!repairOrderResponse.ok) {
      return NextResponse.json({ error: 'Erro ao consultar OS' }, { status: 500 });
    }

    const repairOrderData = await repairOrderResponse.json();

    return NextResponse.json(repairOrderData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}
