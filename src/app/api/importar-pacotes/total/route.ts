import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const anoParam = searchParams.get("ano");
  const mesParam = searchParams.get("mes");

  const ano = anoParam ? parseInt(anoParam) : new Date().getFullYear();
  const mes = mesParam ? parseInt(mesParam) : null;

  let where = {};

  if (ano && mes) {
    // Filtro por ano + mês
    const inicio = new Date(ano, mes - 1, 1);
    const fim = new Date(ano, mes, 1);

    where = {
      dataInicio: {
        gte: inicio,
        lt: fim,
      },
    };
  } else if (ano && !mes) {
    // Filtro por ano completo
    const inicio = new Date(ano, 0, 1);
    const fim = new Date(ano + 1, 0, 1);

    where = {
      dataInicio: {
        gte: inicio,
        lt: fim,
      },
    };
  }

  const resumo = await prisma.pacoteManutencao.aggregate({
    where,
    _sum: {
      valor: true,
      revisoes: true,
    },
    _avg: {
      comissao: true,
    },
    _count: {
      _all: true,
    },
  });

  return NextResponse.json({
    valorTotalVendido: resumo._sum.valor ?? 0,
    totalPacotesVendidos: resumo._count._all,
    totalRevisoes: resumo._sum.revisoes ?? 0,
    comissaoMedia: resumo._avg.comissao ?? 0,
  });
}
