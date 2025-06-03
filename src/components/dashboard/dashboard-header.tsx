"use client";

import Image from "next/image";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../ToggleDarkLightMode";
import { useTheme } from "next-themes";

export function DashboardHeader() {
  const { theme } = useTheme();

  const logoSrc =
    theme === "dark" ? "/Hyundai_logo_dark.png" : "/Hyundai_logo.png";

  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur lg:px-8">
      <div className="flex items-center gap-4 lg:gap-6">
        <div className="hidden lg:block">
          <Image
            src={logoSrc}
            alt="Hyundai Logo"
            width={150}
            height={70}
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
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
  );
}
