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
    const inicio = new Date(ano, mes - 1, 1);
    const fim = new Date(ano, mes, 1);

    where = {
      dataInicio: {
        gte: inicio,
        lt: fim,
      },
    };
  } else if (ano && !mes) {
    const inicio = new Date(ano, 0, 1);
    const fim = new Date(ano + 1, 0, 1);

    where = {
      dataInicio: {
        gte: inicio,
        lt: fim,
      },
    };
  }

  const registros = await prisma.pacoteManutencao.findMany({
    where,
    select: {
      dataInicio: true,
    },
  });

  const vendasPorDia: Record<string, number> = {};

  registros.forEach((registro) => {
    const data = new Date(registro.dataInicio);
    const diaFormatado = data.toLocaleDateString("pt-BR");

    if (vendasPorDia[diaFormatado]) {
      vendasPorDia[diaFormatado]++;
    } else {
      vendasPorDia[diaFormatado] = 1;
    }
  });

  const resultado = Object.entries(vendasPorDia).map(([dia, vendas]) => ({
    dia,
    vendas,
  }));

  return NextResponse.json({ vendas: resultado }, { status: 200 });
}
