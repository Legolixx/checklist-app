import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const checkListId = url.pathname.split("/").pop(); // pega o último segmento da URL (o ID)

  if (!checkListId) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    const checkList = await prisma.checkList.findUnique({
      where: { xata_id: checkListId },
    });

    if (!checkList) {
      return NextResponse.json({ error: "Checklist não encontrado" }, { status: 404 });
    }

    const { clientId, vehicleId } = checkList;

    await prisma.checkList.delete({
      where: { xata_id: checkListId },
    });

    await prisma.client.delete({
      where: { xata_id: clientId },
    });

    await prisma.vehicle.delete({
      where: { xata_id: vehicleId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao deletar" }, { status: 500 });
  }
}
