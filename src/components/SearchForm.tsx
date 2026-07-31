"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

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
    <form onSubmit={handleSubmit} className="flex gap-2 m-w-24">
      <Input
        type="text"
        placeholder="Digite o chassi"
        value={chassi}
        onChange={(e) => setChassi(e.target.value)}
        className="w-full min-w-xs rounded-lg shadow-sm"
        required
      />
      <Button type="submit" disabled={isLoading} className="flex items-center gap-2">
        {isLoading && <Loader2 className="animate-spin w-4 h-4" />}
        {isLoading ? "Buscando..." : "Buscar"}
      </Button>
    </form>
  );
}
