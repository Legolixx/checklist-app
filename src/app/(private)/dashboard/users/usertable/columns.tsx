"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

export type User = {
  id: string
  name: string        // firstName + lastName
  email: string
  status: "Ativo" | "Desativado" | "Bloqueado"
  imageUrl: string
  lastSignIn: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => {
      const user = row.original
      return (
        <div className="flex items-center gap-2">
          {user.imageUrl && (
            <Image
              src={user.imageUrl}
              alt={user.name}
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          <span>{user.name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status

      let colorClass = ""
      switch (status) {
        case "Ativo":
          colorClass = "bg-green-100 text-green-800"
          break
        case "Desativado":
          colorClass = "bg-red-100 text-red-800"
          break
        case "Bloqueado":
          colorClass = "bg-gray-800 text-white"
          break
        default:
          colorClass = "bg-gray-100 text-gray-800"
      }

      return (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium ${colorClass}`}
        >
          {status}
        </span>
      )
    },
  },
  {
    accessorKey: "lastSignIn",
    header: "Último login",
  },
  {
  id: "actions",
  cell: ({ row }) => {
    const user = row.original

    async function handleDelete() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL2 ?? ""}/api/users?id=${user.id}`, {
          method: "DELETE",
        })

        if (!res.ok) {
          throw new Error("Erro ao deletar usuário")
        }
        console.log("Usuário deletado:", user.id)
      } catch (err) {
        console.error(err)
      }
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDelete}>
            Deletar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
]
