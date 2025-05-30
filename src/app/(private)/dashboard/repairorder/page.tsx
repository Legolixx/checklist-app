// app/page.tsx
"use client";

import { useState } from "react";
import { SearchForm } from "@/components/SearchForm";
import { RepairOrderCard } from "@/components/RepairOrderCard";
import { RepairOrder } from "@/types/repairOrder";

export default function HomePage() {
  const [orders, setOrders] = useState<RepairOrder[]>([]);

  const handleSearch = async (chassi: string) => {
    const res = await fetch("/api/repairorders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chassi }),
    });
    const data = await res.json();
    setOrders(data.d.results);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Buscar Ordens de Serviço</h1>
      <SearchForm onSearch={handleSearch} />

      <div className="mt-6">
        {orders.map((os) => (
          <RepairOrderCard key={os.CODIGO_OS} os={os} />
        ))}
      </div>
    </div>
  );
}
