"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { toast } from "sonner"

type Props = {
  user: {
    id: string
    name: string
  }
}

export function UserActions({ user }: Props) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  async function handleDelete() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL2 ?? ""}/api/users?id=${user.id}`,
        { method: "DELETE" }
      )

      if (res.status === 403) {
        setOpen(true) // abre dialog de permissão
        return
      }

      if (!res.ok) {
        throw new Error("Erro ao deletar usuário")
      }

      toast(`O usuário ${user.name} foi removido com sucesso.`)

      router.refresh()
    } catch (err) {
      console.error(err)
      toast("Não foi possível deletar o usuário.")
    }
  }

  return (
    <>
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sem permissão</DialogTitle>
          </DialogHeader>
          <p>Você não tem permissão para deletar usuários.</p>
          <div className="mt-4 flex justify-end">
            <Button onClick={() => setOpen(false)}>Fechar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
