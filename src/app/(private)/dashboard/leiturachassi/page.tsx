"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Car, Gauge, Repeat, Calendar } from "lucide-react";

function LeituraChassi() {
  const [carname, setCarName] = useState("");
  const [chassi, setChassi] = useState("");
  const [modelo, setModelo] = useState({
    veiculo: "",
    carroceria: "",
    motorizacao: "",
    transmissao: "",
    ano: "",
    carName: "",
  });

  const decodeChassi = async (value: string) => {
    const result = {
      veiculo: "",
      carroceria: "",
      motorizacao: "",
      transmissao: "",
      ano: "",
      carName: "",
    };

    if (value.length >= 4) {
      const veiculo = value[3];
      if (veiculo === "B") result.veiculo = "HB20";
      else if (veiculo === "C") result.veiculo = "Novo HB20";
      else if (veiculo === "G") result.veiculo = "Creta";
      else if (veiculo === "P") result.veiculo = "Novo Creta";
    }

    if (value.length >= 6) {
      const carroceria = value[5];
      if (carroceria === "4") result.carroceria = "Sedan";
      else if (carroceria === "5") result.carroceria = "Hatch";
      else if (carroceria === "8") result.carroceria = "SUV";
    }

    if (value.length >= 8) {
      const motorizacao = value[7];
      const veiculo = value[3];
      if (veiculo === "B") {
        if (motorizacao === "B") result.motorizacao = "1.0 TCI";
        else if (motorizacao === "C") result.motorizacao = "1.0";
        else if (motorizacao === "D") result.motorizacao = "1.6";
      } else if (veiculo === "C") {
        if (motorizacao === "A") result.motorizacao = "1.0";
        else if (motorizacao === "B") result.motorizacao = "1.0 TGDI";
        else if (motorizacao === "D") result.motorizacao = "1.6";
      } else if (veiculo === "G") {
        if (motorizacao === "1") result.motorizacao = "1.6";
        else if (motorizacao === "3") result.motorizacao = "2.0";
      } else if (veiculo === "P") {
        if (motorizacao === "B") result.motorizacao = "1.0 TGDI";
        else if (motorizacao === "C") result.motorizacao = "2.0";
        else if (motorizacao === "E") result.motorizacao = "1.0 TGDi";
        else if (motorizacao === "F") result.motorizacao = "1.6 TGDi";
      }
    }

    if (value.length >= 9) {
      const transmissao = value[8];
      if (transmissao === "A") result.transmissao = "Manual";
      else if (transmissao === "B") result.transmissao = "Automático";
      else if (transmissao === "G") result.transmissao = "DCT";
    }

    if (value.length >= 10) {
      const ano = value[9];
      const anos: { [key: string]: string } = {
        S: "2025",
        R: "2024",
        P: "2023",
        N: "2022",
        M: "2021",
        L: "2020",
        K: "2019",
        J: "2018",
        H: "2017",
        G: "2016",
        F: "2015",
        E: "2014",
        D: "2013",
        C: "2012",
      };
      if (anos[ano]) result.ano = anos[ano];
    }

    if (value.length > 16) {
      try {
        const res = await fetch("/api/carname", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value }),
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
          console.error("Erro ao buscar OS:", data.error);
          alert(`Erro: ${data.error || "Erro desconhecido"}`);
          return;
        }

        result.carName = data.data.d.CarName;

        console.log(data.data.d.CarName);
      } catch (error) {
        console.error("Erro inesperado:", error);
        alert("Erro inesperado ao buscar OS.");
      }
    }
    setModelo(result);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setChassi(value);
    decodeChassi(value);
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-180px)] max-w-2xl p-10 mx-auto bg-gray-100 dark:bg-gray-900 rounded-md">
      <form className="flex flex-col items-center gap-2">
        <p className="text-muted-foreground">
          Digite o chassi para descobrir o Modelo:
        </p>
        <Input
          maxLength={17}
          type="text"
          placeholder="Digite o chassi"
          value={chassi}
          onChange={handleChange}
          className="w-full max-w-xs rounded-lg shadow-sm"
          required
        />
      </form>

      {/* Resultado */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {modelo.veiculo && (
          <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 shadow rounded-xl border border-gray-200 dark:border-gray-700">
            <Car className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Veículo
              </p>
              <p className="font-semibold">{modelo.veiculo}</p>
            </div>
          </div>
        )}
        {modelo.carroceria && (
          <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 shadow rounded-xl border border-gray-200 dark:border-gray-700">
            <Car className="text-green-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Carroceria
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {modelo.carroceria}
              </p>
            </div>
          </div>
        )}
        {modelo.motorizacao && (
          <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 shadow rounded-xl border border-gray-200 dark:border-gray-700">
            <Gauge className="text-red-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Motorização
              </p>
              <p className="font-semibold">{modelo.motorizacao}</p>
            </div>
          </div>
        )}
        {modelo.transmissao && (
          <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 shadow rounded-xl border border-gray-200 dark:border-gray-700">
            <Repeat className="text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Transmissão
              </p>
              <p className="font-semibold">{modelo.transmissao}</p>
            </div>
          </div>
        )}
        {modelo.ano && (
          <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 shadow rounded-xl border border-gray-200 dark:border-gray-700">
            <Calendar className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Ano Modelo</p>
              <p className="font-semibold">{modelo.ano}</p>
            </div>
          </div>
        )}
        {modelo.carName && (
          <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 shadow rounded-xl border border-gray-200 dark:border-gray-700">
            <Car className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">CarName</p>
              <p className="font-semibold">{modelo.carName}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LeituraChassi;
