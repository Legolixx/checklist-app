"use client"

import Image from "next/image"
import { Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

export function DashboardHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur lg:px-8">
      <div className="flex items-center gap-4 lg:gap-6">
        <div className="hidden lg:block">
          <Image
            src="/Hyundai_logo.png"
            alt="Hyundai Logo"
            width={150}
            height={70}
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <UserButton />
          <span className="sr-only">User Menu</span>
        </Button>
      </div>
    </header>
  )
}
