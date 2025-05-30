import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dealers from "@/data/dealers.json";
import { formatReadableDate, calculateDuration } from "@/lib/dateManipulation";
import { RepairOrder } from "@/types/repairOrder";
import { useState } from "react";
import { Badge } from "./ui/badge";
import {
  Building,
  Calendar,
  Car,
  ChevronDown,
  ChevronUp,
  Clock,
  FileText,
  MapPin,
  Package,
  PenTool,
  User,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    value
  );

function getDealerName(code: string): string {
  const dealer = dealers.find((d) => d.code === code);
  return dealer ? dealer.name : "Dealer Desconhecido";
}

function getStatusDescricao(status: string): string {
  const statusMap: { [key: string]: string } = {
    "01": "Aberta",
    "02": "Fechada",
    "03": "Cancelada",
    "04": "Reaberta",
    "99": "Abertura de OS para Recebimento de veículo",
    "05": "Cancelamento de OS de Recebimento de veículo",
  };

  return statusMap[status] || `Status desconhecido (${status})`;
}

// Main component
export function RepairOrderCard({ order }: { order: RepairOrder }) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {}
  );

  // Agrupando por TIPO_OS
  const tipos = Array.from(
    new Set([
      ...order.ProductsSet.results.map((p) => p.TIPO_OS),
      ...order.ServicesSet.results.map((s) => s.TIPO_OS),
    ])
  );

  const toggleGroup = (type: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const status = getStatusDescricao(order.STATUS_OS);
  const dealershipName = getDealerName(order.DEALER_CODE);

  return (
    <div className="w-full max-w-4xl mx-auto pb-8">
      <Card className="shadow-lg">
        <CardHeader className="border-b bg-muted/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardDescription className="text-sm font-medium">
                Ordem de Serviço
              </CardDescription>
              <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                #{order.CODIGO_OS}
                <Badge variant={"default"} className="ml-2 text-xs md:text-sm">
                  {status}
                </Badge>
              </CardTitle>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Valor Total</div>
              <div className="text-xl md:text-2xl font-bold text-primary">
                {formatCurrency(order.VALOR_TOTAL_OS)}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 grid gap-6">
          {/* Informações principais */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Building className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Concessionária</div>
                  <div>{dealershipName}</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <User className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Consultor</div>
                  <div>{order.CONSULTOR_SERVICOS}</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Cliente</div>
                  <div>{order.NOME_CLIENTE}</div>
                  <div className="text-sm text-muted-foreground">
                    {order.CIDADE_CLIENTE}, {""}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Car className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Veículo</div>
                  <div>{order.MODELO}</div>
                  <div className="text-sm text-muted-foreground">
                    Ano: {order.ANO_MODELO} | KM:{" "}
                    {order.KM_VEICULO.toLocaleString("pt-BR")}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Datas</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Abertura
                      </div>
                      <div>{formatReadableDate(order.DATA_ABERTURA_OS)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Fechamento
                      </div>
                      <div>{formatReadableDate(order.DATA_FECHAMENTO_OS)}</div>
                    </div>
                  </div>
                  <div className="text-sm mt-1">
                    <span className="font-medium">Duração:</span>{" "}
                    {calculateDuration(
                      order.DATA_ABERTURA_OS,
                      order.DATA_FECHAMENTO_OS
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Horas</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Trabalhadas
                      </div>
                      <div>{order.QUANTIDADE_HORAS_TRABALHADAS}h</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Vendidas
                      </div>
                      <div>{order.QUANTIDADE_HORAS_VENDIDAS}h</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solicitação do cliente */}
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-medium">Solicitação do Cliente</h3>
            </div>
            <p className="text-sm">{order.SOLICITACAO_CLIENTE}</p>
          </div>

          {/* Grupos de serviços */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Serviços e Produtos</h3>
            {tipos.map((tipo, index) => {
              const servicos = order.ServicesSet.results.filter(
                (s) => s.TIPO_OS === tipo
              );
              const produtos = order.ProductsSet.results.filter(
                (p) => p.TIPO_OS === tipo
              );

              return (
                <Card key={`${tipo}-${index}`} className="overflow-hidden">
                  <div
                    className="flex items-center justify-between p-4 cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
                    onClick={() => toggleGroup(tipo)}
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="font-normal">
                        {tipo}
                      </Badge>
                      <span className="text-sm font-medium">
                        {servicos.length} serviços, {produtos.length} produtos
                      </span>
                    </div>
                    {expandedGroups[tipo] ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>

                  {expandedGroups[tipo] && (
                    <div className="p-4">
                      <Tabs defaultValue="services">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger
                            value="services"
                            className="flex items-center gap-1"
                          >
                            <PenTool className="h-4 w-4" />
                            Serviços
                          </TabsTrigger>
                          <TabsTrigger
                            value="products"
                            className="flex items-center gap-1"
                          >
                            <Package className="h-4 w-4" />
                            Produtos
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="services" className="mt-4">
                          {servicos.length > 0 ? (
                            <div className="rounded-md border">
                              <div className="grid grid-cols-12 bg-muted/50 p-3 text-xs font-medium">
                                <div className="col-span-6">Descrição</div>
                                <div className="col-span-2 text-center">
                                  Qtd
                                </div>
                                <div className="col-span-2 text-center">
                                  Unidade
                                </div>
                                <div className="col-span-2 text-right">
                                  Valor
                                </div>
                              </div>
                              <div className="divide-y">
                                {servicos.map((service) => (
                                  <div
                                    key={service.COD_ITEM}
                                    className="grid grid-cols-12 p-3 text-sm"
                                  >
                                    <div className="col-span-6">
                                      {service.DESCRICAO_ITEM}
                                    </div>
                                    <div className="col-span-2 text-center">
                                      {service.QUANTIDADE_ITEM}
                                    </div>
                                    <div className="col-span-2 text-center">
                                      {service.UNIDADE}
                                    </div>
                                    <div className="col-span-2 text-right font-medium">
                                      {formatCurrency(
                                        Number(service.VALOR_TOTAL_ITEM)
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="text-center py-4 text-muted-foreground">
                              Nenhum serviço registrado
                            </div>
                          )}
                        </TabsContent>

                        <TabsContent value="products" className="mt-4">
                          {produtos.length > 0 ? (
                            <div className="rounded-md border">
                              <div className="grid grid-cols-12 bg-muted/50 p-3 text-xs font-medium">
                                <div className="col-span-6">Descrição</div>
                                <div className="col-span-2 text-center">
                                  Qtd
                                </div>
                                <div className="col-span-2 text-center">
                                  Unidade
                                </div>
                                <div className="col-span-2 text-right">
                                  Valor
                                </div>
                              </div>
                              <div className="divide-y">
                                {produtos.map((product) => (
                                  <div
                                    key={product.COD_ITEM}
                                    className="grid grid-cols-12 p-3 text-sm"
                                  >
                                    <div className="col-span-6">
                                      {product.DESCRICAO_ITEM}
                                    </div>
                                    <div className="col-span-2 text-center">
                                      {product.QUANTIDADE_ITEM}
                                    </div>
                                    <div className="col-span-2 text-center">
                                      {product.UNIDADE}
                                    </div>
                                    <div className="col-span-2 text-right font-medium">
                                      {formatCurrency(
                                        Number(product.VALOR_TOTAL_ITEM)
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="text-center py-4 text-muted-foreground">
                              Nenhum produto registrado
                            </div>
                          )}
                        </TabsContent>
                      </Tabs>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
