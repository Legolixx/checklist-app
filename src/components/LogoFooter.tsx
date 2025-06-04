"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function LogoHyundai() {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "/Hyundai_logo_dark.png"
      : "/Hyundai_logo.png";

  return (
    <Image
      src={logoSrc}
      alt="Logo Hyundai"
      width={100}
      height={100}
      className="mb-2"
    />
  );
}
