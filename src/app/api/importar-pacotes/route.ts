import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { parseDate } from "@/lib/dateManipulation";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const pacotes = await req.json();

    const ids = pacotes.registros.map((p: any) =>
      String(p.ID).replace(/,/g, "").trim()
    );

    const existentes = await prisma.pacoteManutencao.findMany({
      where: { id: { in: ids } },
      select: { id: true },
    });

    const idsExistentes = existentes.map((p) => p.id);
    const novosPacotes = pacotes.registros
      .filter((p: any) => !idsExistentes.includes(p.ID))
      .map((p: any) => ({
        id: String(p.ID).replace(/,/g, "").trim(),
        codigo: p["CÓDIGO"],
        chassi: p.CHASSI,
        comissao: parseFloat(p["COMISSÃO"]),
        concessionario: p.CONCESSIONÁRIO,
        consultor: p.CONSULTOR,
        dataInicio: parseDate(p["DATA INÍCIO"]),
        dataEncerramento: parseDate(p["DATA_ENCERRAMENTO"]),
        modelo: p.MODELO,
        mes: p["MÊS"],
        notaFiscalIndividual:
          p["NOTA FISCAL INDIVIDUAL"]?.toUpperCase() === "SIM" ? true : false,
        pacote: p.PACOTE,
        prazo: Number(p.PRAZO),
        revisoes: Number(p.REVISÕES),
        statusComissao: p["STATUS COMISSÃO"],
        valor: parseFloat(p.VALOR),
        versao: p.VERSÃO,
      }));

    if (novosPacotes.length > 0) {
      await prisma.pacoteManutencao.createMany({
        data: novosPacotes,
        skipDuplicates: true,
      });
    }

    return NextResponse.json({
      inseridos: novosPacotes.length,
      ignorados: idsExistentes.length,
    });
  } catch (error) {
    console.log("Erro ao importar pacotes", error);
    return NextResponse.json(
      { error: "Erro ao importar pacotes" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const revPlanejadas = await prisma.pacoteManutencao.findMany({
      select: {
        id: true,
        comissao: true,
        consultor: true,
        modelo: true,
        mes: true,
        revisoes: true,
        valor: true,
        versao: true,

        dealer: {
          select: {
            NOME_DEALER: true,
            ESTADO: true,
            GRUPO: true,
            DIVIS_O: true,
            GER_REG: true,
          },
        },
      },
    });

    return NextResponse.json(revPlanejadas);
  } catch (error) {
    console.error("Error ao buscar pacotes", error);
    return new NextResponse("Error interno do servidor", { status: 500 });
  }
}
