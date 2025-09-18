import { createClerkClient } from "@clerk/backend";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server"

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY!,
});

/**
 * GET /api/users
 * Lista usuários
 */
export async function GET() {
  try {
    const list = await clerkClient.users.getUserList({ limit: 50 });
    return NextResponse.json(list.data);
  } catch (err) {
    console.error("Erro ao buscar usuários:", err);
    return NextResponse.json({ error: "Erro ao buscar usuários" }, { status: 500 });
  }
}

/**
 * POST /api/users
 * Cria um novo usuário
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user = await clerkClient.users.createUser({
      emailAddress: [body.email],
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password, // opcional: se não mandar, Clerk gera um "passwordless"
    });

    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    console.error("Erro ao criar usuário:", err);
    return NextResponse.json({ error: "Erro ao criar usuário" }, { status: 500 });
  }
}

/**
 * DELETE /api/users/:id
 * Remove um usuário pelo ID
 */
export async function DELETE(req: Request) {
  try {
    const { userId: currentUserId } = await auth()
    if (!currentUserId) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
    }

    const user = await clerkClient.users.getUser(currentUserId)

    // supondo que você salva a role em publicMetadata
    if (user.publicMetadata.role !== "admin") {
      return NextResponse.json({ error: "Sem permissão" }, { status: 403 })
    }

    const { searchParams } = new URL(req.url)
    const userId = searchParams.get("id")

    if (!userId) {
      return NextResponse.json({ error: "User ID é obrigatório" }, { status: 400 })
    }

    await clerkClient.users.deleteUser(userId)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Erro ao deletar usuário:", err)
    return NextResponse.json({ error: "Erro ao deletar usuário" }, { status: 500 })
  }
}
