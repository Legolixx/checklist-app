// app/(dashboard)/layout.tsx ou app/(protected)/layout.tsx

import { ReactNode } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"

export default async function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardShell>
      {children}
    </DashboardShell>
  )
}
