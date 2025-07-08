"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Upload } from "lucide-react";

function UploadPlanilha() {
  const [data, setData] = useState<any[][]>([]);
  const [registros, setRegistros] = useState<Record<string, any>[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = async (evt) => {
      const arrayBuffer = evt.target?.result as ArrayBuffer;
      const wb = XLSX.read(arrayBuffer, { type: "array" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 }) as any[][];

      setData(data);

      const headers = data[0];
      const registros = data.slice(1).map((row) => {
        const obj: Record<string, any> = {};
        headers.forEach((header, index) => {
          obj[header] = row[index];
        });
        return obj;
      });

      console.log("Registros gerados:", registros);
      setRegistros(registros);

      try {
        setLoading(true);
        const response = await fetch("/api/importar-pacotes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ registros }),
        });

        const result = await response.json();

        if (response.ok) {
          console.log("Importação feita com sucesso!");
        } else {
          console.error("Erro na importação:", result);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      } finally {
        setLoading(false);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="flex flex-col items-end">
      <label className="cursor-pointer flex items-center gap-2 bg-white hover:bg-slate-400 text-slate-800 px-4 py-2 rounded-4xl">
        <Upload className="w-5 h-5" />
        <span>{loading ? "Importando..." : "Upload Planilha"}</span>
        <input
          type="file"
          accept=".xlsx, .xls, .csv, .xlsb"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
    </div>
  );
}

export default UploadPlanilha;
