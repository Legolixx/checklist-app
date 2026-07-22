import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Dashboard() {
  const user = await currentUser();

  const firstName =
    `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim() || "Usuário";

  const today = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="relative h-[calc(100vh-64px)] overflow-hidden">
      {/* Background */}
      <Image
        src="/I20_White.jpg"
        alt="Hyundai"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#02070d] via-[#02070dcc] to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Glow */}
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-12">

        {/* Header */}
        <div>

          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70 backdrop-blur-md">
            Hyundai Brasil
          </span>

          <h1 className="mt-8 max-w-3xl text-6xl font-bold leading-tight text-white">
            Bem-vindo,
            <br />
            <span className="text-[#00AEEF]">{firstName}</span>
          </h1>

          <p className="mt-4 max-w-xl text-lg text-white/70">
            Plataforma corporativa para consulta de ordens de serviço Pós-Vendas Hyundai.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
            <p className="text-sm uppercase tracking-widest text-white/50">
              Hoje
            </p>

            <h2 className="mt-3 text-xl font-semibold text-white">
              {today}
            </h2>

            <p className="mt-2 text-white/60">
              Bom trabalho!
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
            <p className="text-sm uppercase tracking-widest text-white/50">
              Ambiente
            </p>

            <h2 className="mt-3 text-xl font-semibold text-white">
              Produção
            </h2>

            <p className="mt-2 text-white/60">
              Todos os serviços disponíveis.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
            <p className="text-sm uppercase tracking-widest text-white/50">
              Status
            </p>

            <h2 className="mt-3 text-xl font-semibold text-emerald-400">
              ● Online
            </h2>

            <p className="mt-2 text-white/60">
              Sistema operando normalmente.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}