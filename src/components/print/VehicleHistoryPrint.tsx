import { RepairOrder } from "@/types/repairOrder";
import { formatReadableDate } from "@/lib/dateManipulation";
import { RepairOrderPrint } from "./RepairOrderPrint";
import Image from "next/image";

interface VehicleHistoryPrintProps {
  orders: RepairOrder[];
  carName: string;
}

export function VehicleHistoryPrint({
  orders,
  carName,
}: VehicleHistoryPrintProps) {
  if (!orders.length) {
    return null;
  }

  const oldestOrder = orders[orders.length - 1];
  const newestOrder = orders[0];

  return (
    <>
      {/* CAPA */}
      <div
        className="w-[210mm] min-h-[297mm] bg-white text-black p-12 flex flex-col gap-5 items-center"
        style={{
          pageBreakAfter: "always",
        }}
      >
        <Image
          src="/Hyundai_logo.png"
          alt="Hyundai Logo"
          width={400}
          height={400}
          className="object-contain pb-20"
          priority
        />

        <h2 className="text-2xl font-semibold mb-20">
          Histórico Completo de Serviços
        </h2>

        <div className="space-y-4 text-lg">
          <p>
            <strong>Cliente:</strong> {newestOrder.NOME_CLIENTE}
          </p>

          <p>
            <strong>Modelo:</strong> {carName || "Não identificado"}
          </p>

          <p>
            <strong>Total de OS:</strong> {orders.length}
          </p>

          <p>
            <strong>Primeira OS:</strong>{" "}
            {formatReadableDate(oldestOrder.DATA_ABERTURA_OS)}
          </p>

          <p>
            <strong>Última OS:</strong>{" "}
            {formatReadableDate(newestOrder.DATA_ABERTURA_OS)}
          </p>
        </div>

        <div className="absolute bottom-10 text-sm text-gray-500">
          Emitido em {new Date().toLocaleString("pt-BR")}
        </div>
      </div>

      {/* ORDENS DE SERVIÇO */}
      {orders.map((order, index) => (
        <div
          key={`${order.CODIGO_OS}-${index}`}
          style={{
            pageBreakAfter: index === orders.length - 1 ? "auto" : "always",
          }}
        >
          <RepairOrderPrint order={order} />
        </div>
      ))}
    </>
  );
}
