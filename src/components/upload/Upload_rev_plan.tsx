"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Upload } from "lucide-react";

function UploadPlanilha() {
  const [data, setData] = useState<any[][]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const arrayBuffer = evt.target?.result as ArrayBuffer;
      const wb = XLSX.read(arrayBuffer, { type: "array" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      setData(data as any[][]);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <label className="cursor-pointer flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        <Upload className="w-5 h-5" />
        <span>Upload Planilha</span>
        <input
          type="file"
          accept=".xlsx, .xls, .csv, .xlsb"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>

      {data.length > 0 && (
        <div className="overflow-x-auto w-full max-w-4xl mt-4">
          <table className="min-w-full table-auto border border-gray-300">
            <thead>
              <tr>
                {data[0].map((col, idx) => (
                  <th key={idx} className="border px-2 py-1 bg-gray-100">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(1).map((row, idx) => (
                <tr key={idx}>
                  {row.map((cell, i) => (
                    <td key={i} className="border px-2 py-1">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UploadPlanilha;
