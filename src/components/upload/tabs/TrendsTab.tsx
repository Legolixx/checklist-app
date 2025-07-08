"use client";

import { PureComponent, useEffect, useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

interface DateOption {
  ano: number;
  mes: number;
}

interface VendaDia {
  dia: string; // "2025-07-01"
  vendas: number;
}

export function TrendsTab() {
  const [datasDisponiveis, setDatasDisponiveis] = useState<DateOption[]>([]);
  const [anoSelecionado, setAnoSelecionado] = useState<number | null>(null);
  const [mesSelecionado, setMesSelecionado] = useState<number | null>(null);
  const [vendasDiarias, setVendasDiarias] = useState<VendaDia[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAvailableDates = async () => {
    try {
      const res = await fetch("/api/importar-pacotes/anomesdisp");
      if (!res.ok) throw new Error("Erro ao buscar datas");
      const data = await res.json();
      setDatasDisponiveis(data);
      if (data.length > 0) setAnoSelecionado(data[0].ano);
    } catch (err) {
      setError("Erro ao carregar datas disponíveis");
    }
  };

  const fetchVendasPorDia = async () => {
    if (!anoSelecionado) return;
    try {
      setIsLoading(true);
      const url = new URL(
        "/api/importar-pacotes/vendapordia",
        window.location.origin
      );
      url.searchParams.set("ano", String(anoSelecionado));
      if (mesSelecionado !== null)
        url.searchParams.set("mes", String(mesSelecionado));

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error("Erro ao buscar vendas por dia");

      const data = await res.json();
      setVendasDiarias(data.vendas);
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar vendas por dia");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailableDates();
  }, []);

  useEffect(() => {
    fetchVendasPorDia();
  }, [anoSelecionado, mesSelecionado]);

  const vendasFormatadas = vendasDiarias.map((item) => {
    const [dia, mes, ano] = item.dia.split("/"); // ["14", "03", "2025"]
    const dataISO = `${ano}-${mes}-${dia}`; // "2025-03-14"

    return {
      dia: new Date(dataISO).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
      }),
      vendas: item.vendas,
    };
  });



  return (
    <TabsContent value="trends" className="space-y-6">
      {/* Dropdown de Ano e Mês */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
        <div className="flex gap-4">
          <select
            value={anoSelecionado || ""}
            onChange={(e) => setAnoSelecionado(Number(e.target.value))}
            className="p-2 border rounded-md bg-white text-slate-900"
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
      </div>

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded-md">{error}</div>
      )}

      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">
            Venda diária
          </CardTitle>
          <CardDescription className="text-slate-600">
            Vendas por dia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              vendas: {
                label: "Vendas",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px] w-full"
          >
            <LineChart data={vendasFormatadas}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="dia" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                dataKey="vendas"
                type="monotone"
                stroke="#002C5F"
                strokeWidth={2}
                dot={{ r: 3}}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
