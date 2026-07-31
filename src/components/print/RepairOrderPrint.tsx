/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatReadableDate, calculateDuration } from "@/lib/dateManipulation";
import {
  formatCurrency,
  getDealerName,
  getStatusDescricao,
} from "@/lib/functions";
import { RepairOrder } from "@/types/repairOrder";
import Image from "next/image";

interface RepairOrderPrintProps {
  order: RepairOrder;
  onPrint?: () => void;
}

export function RepairOrderPrint({ order }: RepairOrderPrintProps) {
  const totalServicos = order.ServicesSet.results.reduce(
    (acc, item) => acc + Number(item.VALOR_TOTAL_ITEM),
    0,
  );

  const totalProdutos = order.ProductsSet.results.reduce(
    (acc, item) => acc + Number(item.VALOR_TOTAL_ITEM),
    0,
  );

  const itens = [
    ...order.ServicesSet.results.map((s) => ({
      ...s,
      ITEM_TYPE: "Serviço",
    })),
    ...order.ProductsSet.results.map((p) => ({
      ...p,
      ITEM_TYPE: "Produto",
    })),
  ];

  return (
    <div className="bg-white text-black w-[210mm] min-h-[297mm] mx-auto p-6 text-xs">
      <div className="border-b-2 border-black pb-3 mb-4 flex justify-between items-center">
        <div>
          <Image
            src="/Hyundai_logo.png"
            alt="Hyundai Logo"
            width={150}
            height={70}
            className="object-contain"
            priority
          />
          <p className="text-gray-600">Ordem de Serviço</p>
        </div>

        <div className="text-right">
          <div className="text-xs uppercase text-gray-500">
            Ordem de Serviço
          </div>

          <div className="text-2xl font-bold">#{order.CODIGO_OS}</div>
        </div>
      </div>

      <div className="mb-4">
        <span className="font-semibold">Status:</span>{" "}
        {getStatusDescricao(order.STATUS_OS)}
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-5">
        <Info label="Cliente" value={order.NOME_CLIENTE} />
        <Info label="Consultor" value={order.CONSULTOR_SERVICOS} />

        <Info label="Concessionária" value={getDealerName(order.DEALER_CODE)} />

        <Info label="Cidade" value={order.CIDADE_CLIENTE} />

        <Info label="Modelo" value={order.MODELO} />
        <Info label="Ano Modelo" value={String(order.ANO_MODELO)} />

        <Info
          label="Quilometragem"
          value={`${order.KM_VEICULO.toLocaleString("pt-BR")} km`}
        />

        <Info
          label="Valor Total"
          value={formatCurrency(order.VALOR_TOTAL_OS)}
        />

        <Info
          label="Data Abertura"
          value={formatReadableDate(order.DATA_ABERTURA_OS)}
        />

        <Info
          label="Data Fechamento"
          value={formatReadableDate(order.DATA_FECHAMENTO_OS)}
        />

        <Info
          label="Permanência"
          value={calculateDuration(
            order.DATA_ABERTURA_OS,
            order.DATA_FECHAMENTO_OS,
          )}
        />

        <Info
          label="Horas Trabalhadas"
          value={String(order.QUANTIDADE_HORAS_TRABALHADAS)}
        />
      </div>

      <div className="mb-5">
        <h2 className="text-base font-bold border-b pb-1 mb-2">
          Solicitação do Cliente
        </h2>

        <div className="border rounded p-2 leading-5">
          {order.SOLICITACAO_CLIENTE}
        </div>
      </div>

      <div className="mb-5" style={{ pageBreakInside: "avoid" }}>
        <UnifiedTable rows={itens} formatCurrency={formatCurrency} />
      </div>

      <div
        className="mt-5 border rounded-lg overflow-hidden"
        style={{ pageBreakInside: "avoid" }}
      >
        <div className="bg-gray-200 px-3 py-2 font-bold">Resumo Financeiro</div>

        <div className="p-3 space-y-1">
          <div className="flex justify-between">
            <span>Total Serviços</span>
            <span>{formatCurrency(totalServicos)}</span>
          </div>

          <div className="flex justify-between">
            <span>Total Produtos</span>
            <span>{formatCurrency(totalProdutos)}</span>
          </div>

          <hr />

          <div className="flex justify-between font-bold text-base">
            <span>Total da Ordem</span>
            <span>{formatCurrency(order.VALOR_TOTAL_OS)}</span>
          </div>
        </div>
      </div>

      <footer className="mt-6 border-t pt-2 text-xs text-gray-500 flex justify-between">
        <span>Portal Histórico de Ordens de Serviço</span>

        <span>Emitido em {new Date().toLocaleString("pt-BR")}</span>
      </footer>
    </div>
  );
}

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] text-gray-500">{label}</div>

      <div className="font-medium">{value}</div>
    </div>
  );
}

function UnifiedTable({
  rows,
  formatCurrency,
}: {
  rows: any[];
  formatCurrency: (value: number) => string;
}) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-200 px-3 py-2 font-bold">
        Itens da Ordem de Serviço
      </div>

      <table className="w-full border-collapse text-xs">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-1 text-left">Tipo OS</th>

            <th className="border p-1 text-left">Item</th>

            <th className="border p-1 text-left">Código</th>

            <th className="border p-1 text-left">Descrição</th>

            <th className="border p-1 text-center">Qtd</th>

            <th className="border p-1 text-right">Valor</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((item, index) => (
            <tr key={`${item.COD_SERVICO || item.COD_PRODUTO}-${index}`}>
              <td className="border p-1">{item.TIPO_OS}</td>

              <td className="border p-1">{item.ITEM_TYPE}</td>

              <td className="border p-1">
                {item.COD_SERVICO || item.COD_PRODUTO}
              </td>

              <td className="border p-1">{item.DESCRICAO_ITEM}</td>

              <td className="border p-1 text-center">{item.QUANTIDADE_ITEM}</td>

              <td className="border p-1 text-right">
                {formatCurrency(Number(item.VALOR_TOTAL_ITEM))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
