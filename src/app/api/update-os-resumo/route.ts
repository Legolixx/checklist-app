/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { fetchData, parseOpenDate, parseErdat } from "@/lib/hmb";

const INTERVALO_MINUTOS = 5; // Intervalo mínimo entre atualizações

export async function GET() {
  // Verifica se houve atualização recente
  const ultimaAtualizacao = await prisma.resumo_os_por_dealer.findFirst({
    orderBy: { createdAt: "desc" },
  });

  if (
    ultimaAtualizacao &&
    Date.now() - new Date(ultimaAtualizacao.createdAt).getTime() <
      INTERVALO_MINUTOS * 60 * 1000
  ) {
    return NextResponse.json(
      { message: "Atualização recente. Tente novamente mais tarde." },
      { status: 429 }
    );
  }

  // Executa a coleta dos dados
  const dealerList = await prisma.bASE_DEALER.findMany({
    select: {
      COD_DEALER: true,
      NOME_DEALER: true,
    },
  });

  const resumoPorDealer: any[] = [];

  for (let i = 0; i < dealerList.length; i += 3) {
    const batch = dealerList.slice(i, i + 3);

    for (const dealerObj of batch) {
      const dealerCode = dealerObj.COD_DEALER;
      const results = await fetchData(dealerCode as string);

      let total = 0;
      let retroErdat = 0;
      let retroAedat = 0;

      results.forEach((r: any) => {
        const openDate = parseOpenDate(r.OPENDATE);
        const erdat = parseErdat(r.ERDAT);
        const aedat = parseErdat(r.AEDAT);

        const difERDAT =
          erdat && openDate
            ? (erdat.getTime() - openDate.getTime()) / 86400000
            : null;
        const difAEDAT =
          aedat && openDate
            ? (aedat.getTime() - openDate.getTime()) / 86400000
            : null;

        total++;
        if (difERDAT !== null && difERDAT > 30) retroErdat++;
        if (difAEDAT !== null && difAEDAT > 30) retroAedat++;
      });

      resumoPorDealer.push({
        dealer: dealerCode,
        nome: dealerObj.NOME_DEALER,
        total_os: total,
        retro_os_erdat: retroErdat,
        retro_os_aedat: retroAedat,
      });
    }
  }

  // Atualiza ou cria os dados no banco
  for (const resumo of resumoPorDealer) {
    await prisma.resumo_os_por_dealer.upsert({
      where: { dealer: resumo.dealer },
      update: {
        nome: resumo.nome,
        total_os: resumo.total_os,
        retro_os_erdat: resumo.retro_os_erdat,
        retro_os_aedat: resumo.retro_os_aedat,
      },
      create: {
        dealer: resumo.dealer,
        nome: resumo.nome,
        total_os: resumo.total_os,
        retro_os_erdat: resumo.retro_os_erdat,
        retro_os_aedat: resumo.retro_os_aedat,
      },
    });
  }

  return NextResponse.json({ message: "Dados atualizados com sucesso!" });
}
