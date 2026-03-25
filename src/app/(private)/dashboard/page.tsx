import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const user = await currentUser();
  const firstName = `${user?.firstName} ${user?.lastName}` || "Usuário";

  return (
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden">
      {/* Vídeo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      >
        <source src="/WA.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="z-10 absolute top-6 left-6">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Bem-vindo,{" "}
            <span className="text-[#03233f] uppercase">{firstName}</span>
          </h1>
          <p className="text-white/80">Hyundai-Brasil app</p>
        </div>
      </div>
    </div>
  );
}
