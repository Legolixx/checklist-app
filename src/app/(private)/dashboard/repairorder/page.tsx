"use client";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import { SearchForm } from "@/components/SearchForm";
import { RepairOrderCard } from "@/components/RepairOrderCard";
import { RepairOrderPrint } from "@/components/print/RepairOrderPrint";
import { RepairOrder } from "@/types/repairOrder";
import { Button } from "@/components/ui/button";
import { VehicleHistoryPrint } from "@/components/print/VehicleHistoryPrint";

export default function HomePage() {
  const [orders, setOrders] = useState<RepairOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<RepairOrder | null>(null);
  const [printMode, setPrintMode] = useState<"single" | "history">();
  const [carName, setCarName] = useState("");

  const loadCarName = async () => {
    if (!orders.length) return "";

    try {
      const res = await fetch("/api/carname", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: orders[0].CHASSI,
        }),
      });

      const data = await res.json();

      if (data.success) {
        return data.data.d.CarName;
      }

      return "";
    } catch {
      return "";
    }
  };

  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: selectedOrder
      ? `OS-${selectedOrder.CODIGO_OS}`
      : "Ordem-de-Servico",
  });

  const handleSearch = async (chassi: string) => {
    try {
      const res = await fetch("/api/repairorders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chassi }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.error ?? "Erro ao buscar OS.");
        return;
      }

      const sortedOrders = [...data.data.d.results].sort(
        (a: RepairOrder, b: RepairOrder) =>
          Number(b.DATA_ABERTURA_OS) - Number(a.DATA_ABERTURA_OS),
      );

      setOrders(sortedOrders);
    } catch (err) {
      console.error(err);
      alert("Erro inesperado.");
    }
  };

  const printOrder = (order: RepairOrder) => {
    setPrintMode("single");
    setSelectedOrder(order);

    setTimeout(() => {
      handlePrint();
    }, 100);
  };

  const printHistory = async () => {
    setPrintMode("history");
    setSelectedOrder(null);

    const model = await loadCarName()

    setCarName(model)

    setTimeout(() => {
      handlePrint();
    }, 100);
  };

  const quantidadeOS = orders.length;

  return (
    <div className="p-10 mx-auto">
      <h1 className="text-2xl font-bold mb-6">Buscar Ordens de Serviço</h1>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex">
          <SearchForm onSearch={handleSearch} />
        </div>

        {orders.length > 1 && (
          <div className="flex justify-end">
            <Button onClick={printHistory}>
              📚 Exportar Histórico Completo ({quantidadeOS})
            </Button>
          </div>
        )}
      </div>

      <div className="mt-8 space-y-6">
        {orders.map((order) => (
          <div key={order.CODIGO_OS}>
            <RepairOrderCard order={order} onPrint={() => printOrder(order)} />
          </div>
        ))}
      </div>

      {/* Área utilizada apenas para impressão */}
      <div
        style={{
          position: "absolute",
          left: "-99999px",
          top: 0,
        }}
      >
        <div ref={printRef}>
          {printMode === "single" && selectedOrder && (
            <RepairOrderPrint order={selectedOrder} />
          )}

          {printMode === "history" && <VehicleHistoryPrint carName={carName} orders={orders} />}
        </div>
      </div>
    </div>
  );
}
