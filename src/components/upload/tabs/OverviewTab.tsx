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
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Legend,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
import UploadPlanilha from "../Upload_rev_plan";

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

type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType<{}>;
  } & (
    | { color?: string; theme?: undefined }
    | { color?: undefined; theme: Record<"light" | "dark", string> }
  );
};

type ModeloItem = { name: string; value: number };

const chartColors = [
  "#002C5F", // Azul principal (Hyundai / ShadCN theme)
  "#384a78",
  "#878dac",
  "#d6d8e3",
];

const formatModelos = (data: any[]): ModeloItem[] =>
  data.map((item) => ({
    name: item.modelo,
    value: item._count._all,
  }));

const formatPacotes = (data: any[]): { tipo: string; quantidade: number }[] =>
  data.map((item) => ({
    tipo: `${item.revisoes} revisão`,
    quantidade: item._count._all,
  }));

export function OverviewTab() {
  const [datasDisponiveis, setDatasDisponiveis] = useState<DateOption[]>([]);
  const [anoSelecionado, setAnoSelecionado] = useState<number | null>(null);
  const [mesSelecionado, setMesSelecionado] = useState<number | null>(null);
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [modelos, setModelos] = useState<ModeloItem[] | null>(null);
  const [pacotes, setPacotes] = useState<
    { tipo: string; quantidade: number }[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const fetchPacotes = async () => {
    if (!anoSelecionado) return;

    try {
      const url = new URL(
        "/api/importar-pacotes/qntpacotes",
        window.location.origin
      );
      url.searchParams.set("ano", String(anoSelecionado));
      if (mesSelecionado) url.searchParams.set("mes", String(mesSelecionado));

      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("Erro ao buscar Pacotes");

      const data = await response.json();
      setPacotes(formatPacotes(data.pacotes));
    } catch (err) {
      console.error("Erro ao buscar Pacotes", err);
    }
  };

  const fetchMetrics = async () => {
    if (!anoSelecionado) return;
    setIsLoading(true);
    setError(null);

    try {
      const url = new URL(
        "/api/importar-pacotes/total",
        window.location.origin
      );
      url.searchParams.set("ano", String(anoSelecionado));
      if (mesSelecionado) url.searchParams.set("mes", String(mesSelecionado));

      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("Erro ao buscar métricas");

      const data = await response.json();
      setMetrics(data);
    } catch {
      setError("Erro ao carregar métricas");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchModelos = async () => {
    if (!anoSelecionado) return;

    try {
      const url = new URL(
        "/api/importar-pacotes/model",
        window.location.origin
      );
      url.searchParams.set("ano", String(anoSelecionado));
      if (mesSelecionado) url.searchParams.set("mes", String(mesSelecionado));

      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("Erro ao buscar modelos");

      const data = await response.json();
      setModelos(formatModelos(data.modelos));
    } catch (err) {
      console.error("Erro ao buscar modelos", err);
    }
  };

  useEffect(() => {
    fetchAvailableDates();
  }, []);

  useEffect(() => {
    fetchMetrics();
    fetchModelos();
    fetchPacotes();
  }, [anoSelecionado, mesSelecionado]);

  const modeloConfig = (modelos ?? []).reduce<ChartConfig>((acc, item, i) => {
    acc[item.name] = {
      label: item.name,
      color: chartColors[i % chartColors.length],
    };
    return acc;
  }, {});

  return (
    <TabsContent value="overview" className="space-y-6">
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
        <div>
          <UploadPlanilha />
        </div>
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
          <CardDescription className="text-slate-600 flex flex-row gap-2">
            Proporção de vendas entre{" "}
            {modelos?.map((modelo, index) => (
              <div key={index}>{modelo.name}</div>
            ))}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={modeloConfig} className="h-[300px]">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Legend />
              <Pie
                data={modelos || []}
                style={{ textSizeAdjust: "100" }}
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

      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">
            Vendas por Tipo de Pacote
          </CardTitle>
          <CardDescription className="text-slate-600">
            Total de pacotes vendidos, classificados por número de revisões.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              quantidade: {
                label: "Quantidade",
                color: "hsl(var(--blue-500))",
              },
            }}
            className="h-[300px]"
          >
            <BarChart data={pacotes || []}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="tipo" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="quantidade" radius={4}>
                <LabelList
                  dataKey="quantidade"
                  position="insideTop"
                  fill="#ffff"
                  fontSize={14}
                  fontWeight={0}
                />
                {pacotes?.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={chartColors[index % chartColors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
