import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const modelos = await prisma.pacoteManutencao.groupBy({
    by: ["modelo"],
    _count: {
      _all: true,
    },
  });

  return NextResponse.json({ modelos }, { status: 200 });
}
