// src/app/api/admin/checklists/route.ts

import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Obtém userId e checa autenticação
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: 'Não autenticado' },
        { status: 401 }
      );
    }

    // Pega o objeto completo do usuário (contém publicMetadata)
    const user = await currentUser();
    // Extracto role de publicMetadata.role (por padrão 'user')
    const role = (user?.publicMetadata?.role as string) ?? 'user';

    // Se for admin, sem filtro; se for user normal, filtra por createdBy
    const where = role === 'admin'
      ? {}
      : { createdBy: userId };

    const checklists = await prisma.checkList.findMany({
      where,
      include: {
        client: true,
        vehicle: true,
      },
      orderBy: { xata_createdat: 'desc' }
    });

    return NextResponse.json(checklists);
  } catch (error) {
    console.error("Error fetching checklists:", error);
    return NextResponse.json(
      { error: "Falha ao buscar checklists" },
      { status: 500 }
    );
  }
}
