import dealers from "@/data/dealers.json";

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  export function getDealerName(code: string): string {
  const dealer = dealers.find((d) => d.code === code);
  return dealer ? dealer.name : code;
}


export function getStatusDescricao(status: string): string {
  const statusMap: Record<string, string> = {
    "01": "Aberta",
    "02": "Fechada",
    "03": "Cancelada",
    "04": "Reaberta",
    "05": "Cancelamento de Recebimento",
    "99": "Recebimento de Veículo",
  };

  return statusMap[status] || status;
}