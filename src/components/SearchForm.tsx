"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchForm({
  onSearch,
}: {
  onSearch: (chassi: string) => Promise<void>;
}) {
  const [chassi, setChassi] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await onSearch(chassi);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        placeholder="Digite o chassi"
        value={chassi}
        onChange={(e) => setChassi(e.target.value)}
        className="w-full max-w-xs"
        required
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Buscando..." : "Buscar"}
      </Button>
    </form>
  );
}
