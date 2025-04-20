"use client"

import type { ReactNode } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DashboardNav } from "./dashboard-nav"
import { DashboardHeader } from "./dashboard-header"
import { Menu } from "lucide-react"

interface DashboardShellProps {
  children: ReactNode
  className?: string
}

export function DashboardShell({ children, className }: DashboardShellProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        {isDesktop ? (
          <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r bg-background pt-16 lg:flex">
            <DashboardNav />
          </aside>
        ) : (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="fixed left-4 top-3.5 z-40 lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0 pt-10">
              <SheetHeader className="px-6 py-4">
                <SheetTitle>Dashboard</SheetTitle>
              </SheetHeader>
              <DashboardNav />
            </SheetContent>
          </Sheet>
        )}
        <main className="flex-1 bg-muted/20 pb-12 pt-16 lg:pl-64">
          <div className={cn("container p-4 md:p-8", className)}>{children}</div>
        </main>
      </div>
    </div>
  )
}
