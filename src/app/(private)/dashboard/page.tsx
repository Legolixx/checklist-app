import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const user = await currentUser();
  const firstName = `${user?.firstName} ${user?.lastName}` || "Usuário";

  return (
    <div className="relative flex items-center justify-center min-h-[calc(100vh-180px)] overflow-hidden rounded-2xl">
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
                  Bem-vindo,{" "}
                  <span className="text-[#03233f] uppercase">{firstName}</span>
                </h1>
                <p className="text-white/90 text-lg">Hyundai-Brasil app</p>
              </div>

              {/* Texto de rodapé */}
              <div className="pt-4">
                <p className="text-xs text-white/70 text-center">
                  Made with <span className="text-red-500">&lt;3</span> by VF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
