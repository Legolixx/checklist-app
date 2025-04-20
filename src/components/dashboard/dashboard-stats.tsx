import type React from "react"
import { ArrowDown, ArrowUp, CreditCard, DollarSign, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  trend: {
    value: string
    isPositive: boolean
  }
}

function StatCard({ title, value, description, icon, trend }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-muted p-1.5">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs text-muted-foreground">
          {trend.isPositive ? (
            <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
          ) : (
            <ArrowDown className="mr-1 h-3 w-3 text-rose-500" />
          )}
          <span className={trend.isPositive ? "text-emerald-500" : "text-rose-500"}>{trend.value}</span>
          <span className="ml-1">{description}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value="$45,231.89"
        description="compared to last month"
        icon={<DollarSign className="h-5 w-5" />}
        trend={{ value: "12%", isPositive: true }}
      />
      <StatCard
        title="New Customers"
        value="2,350"
        description="compared to last month"
        icon={<Users className="h-5 w-5" />}
        trend={{ value: "5.2%", isPositive: true }}
      />
      <StatCard
        title="Active Subscriptions"
        value="1,725"
        description="compared to last month"
        icon={<CreditCard className="h-5 w-5" />}
        trend={{ value: "2.1%", isPositive: true }}
      />
      <StatCard
        title="Churn Rate"
        value="0.8%"
        description="compared to last month"
        icon={<Users className="h-5 w-5" />}
        trend={{ value: "0.5%", isPositive: false }}
      />
    </div>
  )
}
