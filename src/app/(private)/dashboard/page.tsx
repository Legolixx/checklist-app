import { currentUser } from "@clerk/nextjs/server"
import Link from "next/link"

export default async function Dashboard() {
  const user = await currentUser()
  const firstName = user?.username || "Usuário"

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden rounded-2xl">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/IMG_5506.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      </div>

      {/* Cartão central com efeito de vidro fosco */}
      <div className="relative z-10 w-full max-w-[500px] mx-4">
        <div className="backdrop-blur-md bg-white/20 rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="space-y-6">
              {/* Título de boas-vindas */}
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  Bem-vindo, <span className="text-[#003B70] uppercase">{firstName}</span>
                </h1>
                <p className="text-white/90 text-lg">Hyundai-Brasil app</p>
              </div>

              {/* Botão de ação */}
              <div className="pt-4">
                <Link
                  href="/dashboard/repairorder"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#003B70] hover:bg-[#00294d] text-white font-medium rounded-lg transition-colors duration-200 w-full sm:w-auto"
                >
                  Ver Ordem de Serviços
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
