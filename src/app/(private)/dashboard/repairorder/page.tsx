// app/page.tsx
"use client";

import { useState } from "react";
import { SearchForm } from "@/components/SearchForm";
import { RepairOrderCard } from "@/components/RepairOrderCard";
import { RepairOrder } from "@/types/repairOrder";

export default function HomePage() {
  const [orders, setOrders] = useState<RepairOrder[]>([]);

  const handleSearch = async (chassi: string) => {
    try {
      const res = await fetch("/api/repairorders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chassi }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        console.error("Erro ao buscar OS:", data.error);
        alert(`Erro: ${data.error || "Erro desconhecido"}`);
        return;
      }

       // Ordena da mais recente para a mais antiga
    const sortedOrders = [...data.data.d.results].sort((a: RepairOrder, b: RepairOrder) => {
      const dateA = new Date(a.DATA_ABERTURA_OS).getTime();
      const dateB = new Date(b.DATA_ABERTURA_OS).getTime();
      return dateB - dateA;
    });


      setOrders(sortedOrders);
    } catch (error) {
      console.error("Erro inesperado:", error);
      alert("Erro inesperado ao buscar OS.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Buscar Ordens de Serviço</h1>
      <SearchForm onSearch={handleSearch} />

      <div className="mt-6">
        {orders.map((os) => (
          <RepairOrderCard key={os.CODIGO_OS} order={os} />
        ))}
      </div>
    </div>
  );
}
