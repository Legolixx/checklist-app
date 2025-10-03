import React from "react";
import { prisma } from "@/lib/prisma";
import { DealersTable } from "./dealers-table";

const data = await prisma.resumo_os_por_dealer.findMany();

export default function ControleEnvio() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <DealersTable dealers={data} />
      </div>
    </main>
  );
}
