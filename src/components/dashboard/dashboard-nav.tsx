"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CarFront,
  ChevronDown,
  ClipboardCheck,
  HandCoins,
  Search,
  User2Icon
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title:"Controle Acesso",
    href:"",
    icon: User2Icon,
    children: [
      {
        title:"Usuários",
        href:"/dashboard/users",
        icon: User2Icon
      }
    ]
  },
  {
    title: "Consultas",
    href: "/dashboard/repairorder",
    icon: CarFront,
    children: [
      {
        title: "Identificar Modelo",
        href: "/dashboard/leiturachassi",
        icon: Search,
      },
      {
        title: "Ordem de Serviço",
        href: "/dashboard/repairorder",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    title: "Envio Retroativo",
    href: "/dashboard/resumo_os_por_dealer",
    icon: HandCoins,
    children: [
      {
        title: "Envio Retroativo",
        href: "/dashboard/resumo_os_por_dealer",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    title: "Relatórios",
    href: "/dashboard/relatorios",
    icon: ClipboardCheck,
    children: [
      {
        title: "Revisões planejadas",
        href: "/dashboard/relatorios/revplanejadas",
        icon: ClipboardCheck,
      },
      {
        title: "A3",
        href: "/dashboard/relatorios/a3",
        icon: ClipboardCheck,
      }
    ],
  }
];

export function DashboardNav() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 p-4 h-full">
      <div className="flex flex-col justify-between h-full flex--1">
        <div className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const isOpen = openSubmenu === item.href;

            return (
              <div key={item.href} className="flex flex-col">
                {item.children ? (
                  <button
                    type="button"
                    onClick={() => setOpenSubmenu(isOpen ? null : item.href)}
                    className={cn(
                      "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      {item.title}
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isOpen ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                )}

                {item.children && isOpen && (
                  <div className="ml-6 mt-1 flex flex-col gap-1">
                    {item.children.map((child) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "flex items-center gap-2 rounded-md px-3 py-1 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                            isChildActive
                              ? "bg-accent text-accent-foreground"
                              : "text-muted-foreground"
                          )}
                        >
                          <child.icon className="h-4 w-4" />
                          {child.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
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
