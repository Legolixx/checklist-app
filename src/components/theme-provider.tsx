"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Evita hydration mismatch retornando nada ou um fallback seguro.
    return null;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
