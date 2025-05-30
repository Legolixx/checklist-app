import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dealers from "@/data/dealers.json";
import { formatReadableDate, calculateDuration } from "@/lib/dateManipulation";
import { RepairOrder } from "@/types/repairOrder";

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

export function RepairOrderCard({ os }: { os: RepairOrder }) {
  // Agrupando por TIPO_OS
  const tipos = Array.from(
    new Set([
      ...os.ProductsSet.results.map((p) => p.TIPO_OS),
      ...os.ServicesSet.results.map((s) => s.TIPO_OS),
    ])
  );

  return (
    <Card className="mb-6 shadow-md border">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          OS: {os.CODIGO_OS} - {getStatusDescricao(os.STATUS_OS)}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Grid de duas colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm">
              <span className="font-semibold">Concessionária:</span>{" "}
              {getDealerName(os.DEALER_CODE)}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Consultor:</span>{" "}
              {os.CONSULTOR_SERVICOS}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Cliente:</span> {os.NOME_CLIENTE}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Cidade:</span> {os.CIDADE_CLIENTE}{" "}
              - {os.UF_CLIENTE}
            </p>
          </div>

          <div>
            <p className="text-sm">
              <span className="font-semibold">Modelo:</span> {os.MODELO}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Ano:</span> {os.ANO_MODELO}
            </p>
            <p className="text-sm">
              <span className="font-semibold">KM:</span> {os.KM_VEICULO}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Valor Total:</span>{" "}
              {formatCurrency(Number(os.VALOR_TOTAL_OS))}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Solicitação do cliente : </span>{" "}
              {os.SOLICITACAO_CLIENTE}
            </p>
          </div>
        </div>

        {/* Datas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-sm space-y-1">
            <p>Data de Abertura: {formatReadableDate(os.DATA_ABERTURA_OS)}</p>
            <p>
              Data de Fechamento: {formatReadableDate(os.DATA_FECHAMENTO_OS)}
            </p>
            <p>
              Tempo OS aberta:{" "}
              {calculateDuration(os.DATA_ABERTURA_OS, os.DATA_FECHAMENTO_OS)}
            </p>
          </div>
          <div>
            <p className="text-sm">
              <span className="font-semibold">Horas Trabalhadas : </span>{" "}
              {os.QUANTIDADE_HORAS_TRABALHADAS}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Horas Vendidas : </span>{" "}
              {os.QUANTIDADE_HORAS_VENDIDAS}
            </p>
          </div>
        </div>

        {/* Por TIPO_OS */}
        {tipos.map((tipo) => {
          const servicos = os.ServicesSet.results.filter(
            (s) => s.TIPO_OS === tipo
          );
          const produtos = os.ProductsSet.results.filter(
            (p) => p.TIPO_OS === tipo
          );

          return (
            <div key={tipo} className="border-t pt-4">
              <h4 className="font-semibold text-lg">Tipo: {tipo}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicos.length > 0 && (
                  <div>
                    <h5 className="font-semibold mt-2">Serviços</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      {servicos.map((serv) => (
                        <li key={serv.COD_ITEM} className="text-sm">
                          {serv.DESCRICAO_ITEM} - {serv.QUANTIDADE_ITEM}{" "}
                          {serv.UNIDADE} -{" "}
                          {formatCurrency(Number(serv.VALOR_TOTAL_ITEM))}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {produtos.length > 0 && (
                  <div>
                    <h5 className="font-semibold mt-2">Produtos</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      {produtos.map((prod) => (
                        <li key={prod.COD_ITEM} className="text-sm">
                          {prod.DESCRICAO_ITEM} - {prod.QUANTIDADE_ITEM}{" "}
                          {prod.UNIDADE} -{" "}
                          {formatCurrency(Number(prod.VALOR_TOTAL_ITEM))}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
