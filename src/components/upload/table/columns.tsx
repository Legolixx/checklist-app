import { ColumnDef } from "@tanstack/react-table";

interface Venda {
  codigo: string;
  concessionario: string;
  _count: {
    _all: number;
  };
}

export const columns: ColumnDef<Venda>[] = [
  {
    accessorKey: "codigo",
    header: "Código",
    cell: ({ getValue }) => getValue(),
  },
  {
    accessorKey: "concessionario",
    header: "Concessionário",
    cell: ({ getValue }) => getValue(),
  },
  {
    accessorFn: (row) => row._count._all,
    header: "Vendas",
    cell: ({ getValue }) => getValue(),
  },
];
