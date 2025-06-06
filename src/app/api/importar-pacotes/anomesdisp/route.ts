import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const pacotes = await prisma.pacoteManutencao.findMany({
    select: {
      dataInicio: true,
    },
  });

  const datasUnicas = new Set<string>();

  pacotes.forEach((p) => {
    const data = new Date(p.dataInicio);
    const key = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, "0")}`;
    datasUnicas.add(key);
  });

  const datasDisponiveis = Array.from(datasUnicas)
    .map((data) => {
      const [ano, mes] = data.split("-");
      return {
        ano: Number(ano),
        mes: Number(mes),
      };
    })
    .sort((a, b) => (a.ano === b.ano ? a.mes - b.mes : a.ano - b.ano));

  return NextResponse.json(datasDisponiveis);
}
