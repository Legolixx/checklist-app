"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@react-email/components";
import { Loader2 } from "lucide-react";

function LeituraChassi() {
  const [chassi, setChassi] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(chassi);
    setIsLoading(false);
  };

  return (
    <div className="flex  min-h-[calc(100vh-180px)] max-w-100 p-10">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          maxLength={17}
          type="text"
          placeholder="Digite o chassi"
          value={chassi}
          onChange={(e) => setChassi(e.target.value)}
          className="w-full max-w-xs rounded-lg shadow-sm"
          required
        />
        <Button
          type="submit"
         // disabled={isLoading}
          className="flex items-center gap-2"
        >
          {isLoading && <Loader2 className="animate-spin w-4 h-4" />}
          {isLoading ? "Buscando..." : "Buscar"}
        </Button>
      </form>
    </div>
  );
}

export default LeituraChassi;
