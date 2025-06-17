import { Separator } from "@radix-ui/react-dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { BarChart3, Building2, TrendingUp } from "lucide-react";
import { OverviewTab } from "./tabs/OverviewTab";
import { TrendsTab } from "./tabs/TrendsTab";
import DealerShipsTab from "./tabs/DealerShipsTab";

export function MaintenanceInsights() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
          Dashboard de Pacotes de Manutenção
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Análise completa dos dados de manutenção com visualizações interativas
          e relatórios detalhados
        </p>
        <Separator className="mt-6 max-w-xs mx-auto bg-slate-200 dark:bg-slate-700" />
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700">
          <TabsTrigger
            value="overview"
            className="flex items-center gap-2 data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800 transition-all duration-200 text-slate-700 dark:text-slate-300"
          >
            <BarChart3 className="w-4 h-4" />
            Visão Geral
          </TabsTrigger>
          <TabsTrigger
            value="trends"
            className="flex items-center gap-2 data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800 transition-all duration-200 text-slate-700 dark:text-slate-300"
          >
            <TrendingUp className="w-4 h-4" />
            Tendências
          </TabsTrigger>
          <TabsTrigger
            value="dealerships"
            className="flex items-center gap-2 data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800 transition-all duration-200 text-slate-700 dark:text-slate-300"
          >
            <Building2 className="w-4 h-4" />
            Análises por Concessionária
          </TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <OverviewTab />
        <TrendsTab />
        <DealerShipsTab />
      </Tabs>
    </div>
  );
}
