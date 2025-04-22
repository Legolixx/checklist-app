import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      {/* Card com as informações - agora em cima */}
      <div className="flex flex-col gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md max-w-2xl w-full text-center mb-4 z-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Bem-vindo{' '}
          <span className="text-blue-700 uppercase">
            {user?.username}
          </span>
        </h1>
        <p className="text-muted-foreground">
          Check-list Hyundai-Brasil app
        </p>
      </div>

      {/* Imagem abaixo e com altura controlada */}
      <div className="relative w-full flex justify-center">
        <Image
          src="/banner.jpg"
          width={500}
          height={500}
          alt="Banner Hyundai-Brasil"
          className="max-h-[60vh] w-auto rounded-lg shadow-lg object-contain"
        />
      </div>
    </div>
  );
}
