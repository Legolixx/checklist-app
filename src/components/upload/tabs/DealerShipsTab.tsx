"use client";

import { TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { DataTable } from "../table/data-table";
import { columns } from "../table/columns";

interface DateOption {
  ano: number;
  mes: number;
}

export default function DealerShipsTab() {
  const [datasDisponiveis, setDatasDisponiveis] = useState<DateOption[]>([]);
  const [anoSelecionado, setAnoSelecionado] = useState<number | null>(null);
  const [mesSelecionado, setMesSelecionado] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [vendas, setVendas] = useState([]);

  const fetchAvailableDates = async () => {
    try {
      const response = await fetch("/api/importar-pacotes/anomesdisp");
      if (!response.ok) throw new Error("Erro ao buscar datas");
      const data = await response.json();
      setDatasDisponiveis(data);
      if (data.length > 0) {
        setAnoSelecionado(data[0].ano);
        // setMesSelecionado(data[0].mes);
      }
    } catch {
      setError("Erro ao carregar datas disponíveis");
    }
  };

  const fetchVendaPorDealer = async () => {
    try {
      const url = new URL(
        "/api/importar-pacotes/vendas",
        window.location.origin
      );
      url.searchParams.set("ano", String(anoSelecionado));
      if (mesSelecionado !== null) {
        url.searchParams.set("mes", String(mesSelecionado));
      }

      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("Erro ao buscar Vendas");

      const data = await response.json();
      setVendas(data.pacotes);
    } catch (error) {
      console.error("Erro ao buscar Vendas", error);
      setError("Erro ao buscar Vendas");
    }
  };

  useEffect(() => {
    fetchAvailableDates();
  }, []);

  useEffect(() => {
    fetchVendaPorDealer();
  }, [anoSelecionado, mesSelecionado]);

  return (
    <TabsContent value="dealerships" className="space-y-6">
      {/* Date Selection */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
        <div className="flex gap-4">
          <select
            value={anoSelecionado || ""}
            onChange={(e) => setAnoSelecionado(Number(e.target.value))}
            className="p-2 border rounded-md bg-white text-slate-900"
            aria-label="Selecionar ano"
            disabled={isLoading}
          >
            <option value="" disabled>
              Selecione o ano
            </option>
            {[...new Set(datasDisponiveis.map((d) => d.ano))].map((ano) => (
              <option key={ano} value={ano}>
                {ano}
              </option>
            ))}
          </select>
          <select
            value={mesSelecionado ?? "all"}
            onChange={(e) =>
              setMesSelecionado(
                e.target.value === "all" ? null : Number(e.target.value)
              )
            }
            className="p-2 border rounded-md bg-white text-slate-900"
            aria-label="Selecionar mês"
            disabled={isLoading || !anoSelecionado}
          >
            <option value="all">Todos os meses</option>
            {datasDisponiveis
              .filter((d) => d.ano === anoSelecionado)
              .map((d) => (
                <option key={d.mes} value={d.mes}>
                  {new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
                    new Date(2020, d.mes - 1)
                  )}
                </option>
              ))}
          </select>
        </div>
        <div></div>
      </div>

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded-md" role="alert">
          {error}
        </div>
      )}

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={vendas} />
      </div>
    </TabsContent>
  );
}
