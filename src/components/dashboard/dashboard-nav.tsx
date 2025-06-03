"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CarFront, ClipboardCheck, HandCoins, Car } from "lucide-react";
import Image from "next/image";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Consulta OS",
    href: "/dashboard/repairorder",
    icon: CarFront,
  },
  {
    title: "AS1Q",
    href: "/dashboard/AS1Q",
    icon: HandCoins,
  },
{
  title: "Relatórios",
  href: "/dashboard/relatorios",
  icon: ClipboardCheck,
}
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 p-4 h-full">
      <div className="flex flex-col justify-between h-full flex--1">
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Image
            src={"/MyHyundaiCare.png"}
            alt="logo Hyundai Care"
            width={150}
            height={80}
          />
        </div>
      </div>
    </nav>
  );
}
