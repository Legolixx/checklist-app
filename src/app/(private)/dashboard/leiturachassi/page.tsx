"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Car, Gauge, Repeat, Calendar } from "lucide-react";

function LeituraChassi() {
  const [chassi, setChassi] = useState("");
  const [modelo, setModelo] = useState({
    veiculo: "",
    carroceria: "",
    motorizacao: "",
    transmissao: "",
    ano: "",
    carName: "",
  });
  const [erro, setErro] = useState("");

  const validarChassi = (value: string) => {
    const veiculosValidos = ["H", "R", "B", "C", "G", "P"];
    const carroceriasValidas: {
      [key: string]: string[];
      B: string[];
      C: string[];
      G: string[];
      P: string[];
      H: string[];
      R: string[];
    } = {
      B: ["4", "5"],
      C: ["4", "5"],
      G: ["8"],
      P: ["8"],
      H: ["8"],
      R: ["8"],
    };
    const motorizacoesValidas: {
      [key: string]: string[];
      B: string[];
      C: string[];
      G: string[];
      P: string[];
      H: string[];
      R: string[];
    } = {
      B: ["B", "C", "D"],
      C: ["A", "B", "D", "E", "F"],
      G: ["1", "3"],
      P: ["B", "C", "E", "F"],
      H: ["1"],
      R: ["E"],
    };

    const transmissoesValidas = ["A", "B", "G", "D"];
    const anosValidos = [
      "T",
      "S",
      "R",
      "P",
      "N",
      "M",
      "L",
      "K",
      "J",
      "H",
      "G",
      "F",
      "E",
      "D",
      "C",
    ];

    if (value.length >= 4 && !veiculosValidos.includes(value[3])) {
      return "Veículo inválido no 4º caractere do chassi.";
    }
    if (
      value.length >= 6 &&
      !carroceriasValidas[value[3]]?.includes(value[5])
    ) {
      return "Carroceria inválida no 6º caractere do chassi.";
    }
    if (
      value.length >= 8 &&
      !motorizacoesValidas[value[3]]?.includes(value[7])
    ) {
      return "Motorização inválida no 8º caractere do chassi.";
    }
    if (value.length >= 9 && !transmissoesValidas.includes(value[8])) {
      return "Transmissão inválida no 9º caractere do chassi.";
    }
    if (value.length >= 10 && !anosValidos.includes(value[9])) {
      return "Ano inválido no 10º caractere do chassi.";
    }
    return ""; // Chassi válido até o momento
  };

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
      if (veiculo === "H") result.veiculo = "KONA";
      else if (veiculo === "R") result.veiculo = "PALISADE";
      else if (veiculo === "B") result.veiculo = "HB20";
      else if (veiculo === "C") result.veiculo = "Novo HB20";
      else if (veiculo === "G") result.veiculo = "Creta";
      else if (veiculo === "P") result.veiculo = "Novo Creta";
    }

    if (value.length >= 6) {
      const carroceria = value[5];
      const veiculo = value[3];
      if (veiculo === "C" || "B") {
        if (carroceria === "4") result.carroceria = "Sedan";
        else if (carroceria === "5") result.carroceria = "Hatch";
      }
      if (veiculo === "G" || "P" || "H" || "R") {
        if (carroceria === "8") result.carroceria = "SUV";
      }
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
        else if (motorizacao === "E") result.motorizacao = "1.0 TGDI L8";
        else if (motorizacao === "F") result.motorizacao = "1.0 L8";
      } else if (veiculo === "G") {
        if (motorizacao === "1") result.motorizacao = "1.6";
        else if (motorizacao === "3") result.motorizacao = "2.0";
      } else if (veiculo === "P") {
        if (motorizacao === "B") result.motorizacao = "1.0 TGDI";
        else if (motorizacao === "C") result.motorizacao = "2.0";
        else if (motorizacao === "E") result.motorizacao = "1.0 TGDi";
        else if (motorizacao === "F") result.motorizacao = "1.6 TGDi";
      } else if (veiculo === "H") {
        if (motorizacao === "1") result.motorizacao = "1.6 GDI HEV";
      } else if (veiculo === "R") {
        if (motorizacao === "E") result.motorizacao = "3.8 GDI";
      }
    }

    if (value.length >= 9) {
      const transmissao = value[8];
      if (transmissao === "A") result.transmissao = "Manual";
      else if (transmissao === "B") result.transmissao = "AT";
      else if (transmissao === "G") result.transmissao = "DCT";
      else if (transmissao === "D") result.transmissao = "AT";
    }

    if (value.length >= 10) {
      const ano = value[9];
      const anos: { [key: string]: string } = {
        T: "2026",
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
      } catch (error) {
        console.error("Erro inesperado:", error);
        alert("Erro inesperado ao buscar OS.");
      }
    }
    setModelo(result);
  };

  const handleChassiChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setChassi(value);

    // Validar o chassi
    const mensagemErro = validarChassi(value);
    setErro(mensagemErro);

    if (!mensagemErro && value.length >= 4) {
      await decodeChassi(value);
    } else {
      setModelo({
        veiculo: "",
        carroceria: "",
        motorizacao: "",
        transmissao: "",
        ano: "",
        carName: "",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-180px)] max-w-2xl p-10 mx-auto bg-gray-100 dark:bg-gray-900 rounded-md">
      <form className="flex flex-col items-center gap-2 mx-auto">
        <p className="text-muted-foreground">
          Digite o chassi para descobrir o Modelo:
        </p>
        <Input
          maxLength={17}
          type="text"
          placeholder="Digite o chassi"
          value={chassi}
          onChange={handleChassiChange}
          className="w-full max-w-xs rounded-lg shadow-sm"
          required
        />
      </form>
      {erro && <p className="text-red-500 text-center mt-3">{erro}</p>}

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
              <p className="font-semibold text-sm">{modelo.carName}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LeituraChassi;
