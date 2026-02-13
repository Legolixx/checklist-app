"use client";

import { useUser } from "@clerk/nextjs";

export default function AppGuard({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useUser();

  // impede que a árvore com hooks seja renderizada antes do Clerk carregar
  if (!isLoaded) {
    return <div className="flex items-center justify-center h-screen">Carregando…</div>;
  }

  return <>{children}</>;
}
