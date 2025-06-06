"use client";

import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Package, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Cell, Legend, Pie, PieChart } from "recharts";

interface Metrics {
  valorTotalVendido: number;
  totalPacotesVendidos: number;
  totalRevisoes: number;
  comissaoMedia: number;
  distribuicao: { modelo: string; quantidade: number }[];
}

interface DateOption {
  ano: number;
  mes: number;
}

export function OverviewTab() {
  const [datasDisponiveis, setDatasDisponiveis] = useState<DateOption[]>([]);
  const [anoSelecionado, setAnoSelecionado] = useState<number | null>(null);
  const [mesSelecionado, setMesSelecionado] = useState<number | null>(null);
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modelos, setModelos] = useState<[] | null>(null);

  useEffect(() => {
    const fetchModelos = async () => {
      try {
        const response = await fetch("/api/importar-pacotes/model");
        if (!response.ok) throw new Error("Falha ao buscar modelos");
        const data = await response.json();

        const formattedData = data.modelos.map((item: any) => ({
          name: item.modelo,
          value: item._count._all,
        }));

        setModelos(formattedData);
      } catch (error) {
        console.error("Erro ao buscar modelos", error);
      }
    };

    fetchModelos();
  }, []);

  const chartColors = ["#333446", "#7F8CAA", "#B8CFCE", "#EAEFEF"];

  type ModeloConfig = {
    [key: string]: {
      label: string;
      color: string;
    };
  };

  type ModeloItem = { name: string; value: number };

  const config = (modelos ?? []).reduce<ModeloConfig>(
    (acc, item: ModeloItem, index) => {
      acc[item.name] = {
        label: item.name,
        color: chartColors[index % chartColors.length],
      };
      return acc;
    },
    {}
  );

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const response = await fetch("/api/importar-pacotes/anomesdisp");
        if (!response.ok) throw new Error("Failed to fetch available dates");
        const data = await response.json();
        setDatasDisponiveis(data);

        if (data.length > 0) {
          setAnoSelecionado(data[0].ano);
          //setMesSelecionado(data[0].mes);
        }
      } catch (err) {
        setError("Erro ao carregar datas disponíveis");
      }
    };
    fetchAvailableDates();
  }, []);

  useEffect(() => {
    if (!anoSelecionado) return;

    const fetchMetrics = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const url = new URL(
          "/api/importar-pacotes/total",
          window.location.origin
        );
        url.searchParams.set("ano", String(anoSelecionado));
        if (mesSelecionado) {
          url.searchParams.set("mes", String(mesSelecionado));
        }

        const response = await fetch(url.toString());
        if (!response.ok) throw new Error("Failed to fetch metrics");
        const data = await response.json();
        setMetrics(data);
      } catch (err) {
        setError("Erro ao carregar métricas");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetrics();
  }, [anoSelecionado, mesSelecionado]);

  return (
    <TabsContent value="overview" className="space-y-6">
      {/* Date Selection */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
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

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded-md" role="alert">
          {error}
        </div>
      )}

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Valor Total Vendido
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="animate-pulse h-8 bg-gray-200 rounded"></div>
            ) : (
              <>
                <div className="text-2xl font-bold text-slate-900">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(metrics?.valorTotalVendido || 0)}
                </div>
                <p className="text-xs text-slate-500 mt-1">Total</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Total de Pacotes
            </CardTitle>
            <Package className="h-4 w-4 text-blue-600" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="animate-pulse h-8 bg-gray-200 rounded"></div>
            ) : (
              <>
                <div className="text-2xl font-bold text-slate-900">
                  {metrics?.totalPacotesVendidos || 0}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Total de {metrics?.totalRevisoes || 0} revisões vendidas
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Comissão Paga
            </CardTitle>
            <TrendingUp
              className="h-4 w-4 text-purple-600"
              aria-hidden="true"
            />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="animate-pulse h-8 bg-gray-200 rounded"></div>
            ) : (
              <>
                <div className="text-2xl font-bold text-slate-900">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(metrics?.comissaoMedia || 0)}
                </div>
                <p className="text-xs text-slate-500 mt-1">Total</p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">
            Distribuição por Modelo
          </CardTitle>
          <CardDescription className="text-slate-600">
            Proporção de vendas entre HB20 e CRETA
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={config} className="h-[300px]">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Legend /> 
              <Pie
                data={modelos || []}
                style={{textSizeAdjust: "100"}}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ value }) => `${value}`}
              >
                {modelos?.map((entry: ModeloItem, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={chartColors[index % chartColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
