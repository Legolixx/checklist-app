import { Separator } from "@radix-ui/react-dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { BarChart3, Building2, TrendingUp } from "lucide-react";
import { OverviewTab } from "./tabs/OverviewTab";
import { TrendsTab } from "./tabs/TrendsTab";

export function MaintenanceInsights() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">
          Dashboard de Pacotes de Manutenção
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Análise completa dos dados de manutenção com visualizações interativas
          e relatórios detalhados
        </p>
        <Separator className="mt-6 max-w-xs mx-auto" />
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-sm border">
          <TabsTrigger
            value="overview"
            className="flex items-center gap-2 data-[state=active]:bg-slate-100 transition-all duration-200"
          >
            <BarChart3 className="w-4 h-4" />
            Visão Geral
          </TabsTrigger>
          <TabsTrigger
            value="trends"
            className="flex items-center gap-2 data-[state=active]:bg-slate-100 transition-all duration-200"
          >
            <TrendingUp className="w-4 h-4" />
            Tendências
          </TabsTrigger>
          <TabsTrigger
            value="dealerships"
            className="flex items-center gap-2 data-[state=active]:bg-slate-100 transition-all duration-200"
          >
            <Building2 className="w-4 h-4" />
            Análises por Concessionária
          </TabsTrigger>
        </TabsList>
        <OverviewTab />
        <TrendsTab />
      </Tabs>
    </div>
  );
}
