import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Dealer {
  id: string
  dealer: string
  nome: string
  total_os: number
  retro_os_erdat: number
  retro_os_aedat: number
  createdAt: Date
  updatedAt: Date
}

interface DealersTableProps {
  dealers: Dealer[]
}

export function DealersTable({ dealers }: DealersTableProps) {
  // Processar e ordenar os dealers
  const processedDealers = dealers
    .map((dealer) => {
      const totalRetro = dealer.retro_os_erdat + dealer.retro_os_aedat
      const percentRetro = dealer.total_os > 0 ? (totalRetro / dealer.total_os) * 100 : 0

      return {
        ...dealer,
        totalRetro,
        percentRetro,
      }
    })
    .sort((a, b) => b.percentRetro - a.percentRetro)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Análise de OS Retroativas por Dealer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Código</TableHead>
                <TableHead className="font-semibold">Nome do Dealer</TableHead>
                <TableHead className="text-right font-semibold">Total de OS</TableHead>
                <TableHead className="text-right font-semibold">OS Retroativas</TableHead>
                <TableHead className="text-right font-semibold">% Retroativas</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {processedDealers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    Nenhum dealer encontrado
                  </TableCell>
                </TableRow>
              ) : (
                processedDealers.map((dealer) => (
                  <TableRow key={dealer.id}>
                    <TableCell className="font-medium">{dealer.dealer}</TableCell>
                    <TableCell>{dealer.nome}</TableCell>
                    <TableCell className="text-right">{dealer.total_os.toLocaleString("pt-BR")}</TableCell>
                    <TableCell className="text-right">{dealer.totalRetro.toLocaleString("pt-BR")}</TableCell>
                    <TableCell className="text-right font-semibold">{dealer.percentRetro.toFixed(2)}%</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
