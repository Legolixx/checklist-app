// app/(dashboard)/page.tsx

import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { currentUser } from "@clerk/nextjs/server"

export default async function DashboardPage() {

  const user = await currentUser()


  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Bem-vindo <span className="text-blue-700 uppercase">{user?.username}</span></h1>
        <p className="text-muted-foreground">
          Check-list Hyundai-Brasil app
        </p>
      </div>
      <DashboardStats />
      <div className="grid gap-6 md:grid-cols-2">
        {/* Outras seções do dashboard */}
      </div>
    </div>
  )
}
