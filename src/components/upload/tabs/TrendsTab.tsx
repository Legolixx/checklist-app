"use client"

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
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

type PacoteManutencao = {
  id: string;
  codigo: string;
  chassi: string;
  comissao: number;
  concessionario: string;
  consultor: string;
  dataInicio: string;
  dataEncerramento: string;
  modelo: "HB20" | "CRETA";
  mes: string;
  notaFiscalIndividual: boolean;
  pacote: string;
  prazo: number;
  revisoes: number;
  statusComissao: string;
  valor: number;
  versao: string;
};

// Dados mockados

export function TrendsTab() {
  const pacotesManutencao: PacoteManutencao[] = [
    {
      id: "1",
      codigo: "PKG001",
      chassi: "9BWZZZ377VT004251",
      comissao: 450.0,
      concessionario: "Hyundai Centro",
      consultor: "João Silva",
      dataInicio: "2024-02-15",
      dataEncerramento: "2024-12-15",
      modelo: "HB20",
      mes: "Janeiro",
      notaFiscalIndividual: true,
      pacote: "Pacote Premium",
      prazo: 12,
      revisoes: 4,
      statusComissao: "Pago",
      valor: 2500.0,
      versao: "Comfort Plus",
    },
    {
      id: "2",
      codigo: "PKG002",
      chassi: "9BWZZZ377VT004252",
      comissao: 380.0,
      concessionario: "Hyundai Norte",
      consultor: "Maria Santos",
      dataInicio: "2024-01-20",
      dataEncerramento: "2024-12-20",
      modelo: "CRETA",
      mes: "Janeiro",
      notaFiscalIndividual: false,
      pacote: "Pacote Básico",
      prazo: 12,
      revisoes: 3,
      statusComissao: "Pendente",
      valor: 1800.0,
      versao: "Smart",
    },
    {
      id: "3",
      codigo: "PKG003",
      chassi: "9BWZZZ377VT004253",
      comissao: 520.0,
      concessionario: "Hyundai Sul",
      consultor: "Pedro Costa",
      dataInicio: "2024-02-10",
      dataEncerramento: "2025-02-10",
      modelo: "HB20",
      mes: "Fevereiro",
      notaFiscalIndividual: true,
      pacote: "Pacote Premium",
      prazo: 12,
      revisoes: 5,
      statusComissao: "Pago",
      valor: 3200.0,
      versao: "Turbo",
    },
    {
      id: "4",
      codigo: "PKG004",
      chassi: "9BWZZZ377VT004254",
      comissao: 290.0,
      concessionario: "Hyundai Centro",
      consultor: "Ana Lima",
      dataInicio: "2024-02-15",
      dataEncerramento: "2025-02-15",
      modelo: "CRETA",
      mes: "Fevereiro",
      notaFiscalIndividual: false,
      pacote: "Pacote Básico",
      prazo: 12,
      revisoes: 2,
      statusComissao: "Pago",
      valor: 1500.0,
      versao: "Action",
    },
    {
      id: "5",
      codigo: "PKG005",
      chassi: "9BWZZZ377VT004255",
      comissao: 410.0,
      concessionario: "Hyundai Norte",
      consultor: "Carlos Oliveira",
      dataInicio: "2024-03-05",
      dataEncerramento: "2025-03-05",
      modelo: "HB20",
      mes: "Março",
      notaFiscalIndividual: true,
      pacote: "Pacote Intermediário",
      prazo: 12,
      revisoes: 4,
      statusComissao: "Pendente",
      valor: 2200.0,
      versao: "Comfort",
    },
    {
      id: "6",
      codigo: "PKG006",
      chassi: "9BWZZZ377VT004256",
      comissao: 480.0,
      concessionario: "Hyundai Sul",
      consultor: "Lucia Ferreira",
      dataInicio: "2024-03-12",
      dataEncerramento: "2025-03-12",
      modelo: "CRETA",
      mes: "Março",
      notaFiscalIndividual: true,
      pacote: "Pacote Premium",
      prazo: 12,
      revisoes: 5,
      statusComissao: "Pago",
      valor: 2800.0,
      versao: "Ultimate",
    },
    {
      id: "7",
      codigo: "PKG007",
      chassi: "9BWZZZ377VT004257",
      comissao: 350.0,
      concessionario: "Hyundai Centro",
      consultor: "Roberto Silva",
      dataInicio: "2024-04-08",
      dataEncerramento: "2025-04-08",
      modelo: "HB20",
      mes: "Abril",
      notaFiscalIndividual: false,
      pacote: "Pacote Básico",
      prazo: 12,
      revisoes: 3,
      statusComissao: "Pago",
      valor: 1900.0,
      versao: "Sense",
    },
    {
      id: "8",
      codigo: "PKG008",
      chassi: "9BWZZZ377VT004258",
      comissao: 440.0,
      concessionario: "Hyundai Norte",
      consultor: "Fernanda Costa",
      dataInicio: "2024-04-20",
      dataEncerramento: "2025-04-20",
      modelo: "CRETA",
      mes: "Abril",
      notaFiscalIndividual: true,
      pacote: "Pacote Intermediário",
      prazo: 12,
      revisoes: 4,
      statusComissao: "Pendente",
      valor: 2400.0,
      versao: "Prestige",
    },
  ];

  const pacotesPorMes = pacotesManutencao.reduce(
    (acc, p) => {
      acc[p.mes] = (acc[p.mes] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const barData = Object.entries(pacotesPorMes).map(([mes, quantidade]) => ({
    mes,
    quantidade,
    fill: "hsl(var(--chart-1))",
  }));


   const valorPorModeloMes = pacotesManutencao.reduce(
    (acc, p) => {
      const key = `${p.mes}-${p.modelo}`
      if (!acc[key]) {
        acc[key] = { mes: p.mes, modelo: p.modelo, valores: [] }
      }
      acc[key].valores.push(p.valor)
      return acc
    },
    {} as Record<string, { mes: string; modelo: string; valores: number[] }>,
  )

  const lineData = Object.values(valorPorModeloMes).map((item) => ({
    mes: item.mes,
    modelo: item.modelo,
    valorMedio:
      item.valores.reduce((sum, v) => sum + v, 0) / item.valores.length,
  }));

  const lineDataGrouped = lineData.reduce((acc, item) => {
    const existing = acc.find((d) => d.mes === item.mes);
    if (existing) {
      existing[item.modelo] = item.valorMedio;
    } else {
      acc.push({
        mes: item.mes,
        [item.modelo]: item.valorMedio,
      });
    }
    return acc;
  }, [] as any[]);

  return (
    <TabsContent value="trends" className="space-y-6">
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">
            Pacotes Vendidos por Mês
          </CardTitle>
          <CardDescription className="text-slate-600">
            Evolução mensal das vendas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              quantidade: {
                label: "Quantidade",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <BarChart data={barData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="mes" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="quantidade" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">
            Valor Médio por Modelo
          </CardTitle>
          <CardDescription className="text-slate-600">
            Comparação de valores médios ao longo dos meses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              HB20: {
                label: "HB20",
                color: "hsl(var(--chart-1))",
              },
              CRETA: {
                label: "CRETA",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <LineChart data={lineDataGrouped}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="mes" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                dataKey="HB20"
                type="monotone"
                stroke="var(--color-HB20)"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                dataKey="CRETA"
                type="monotone"
                stroke="var(--color-CRETA)"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
