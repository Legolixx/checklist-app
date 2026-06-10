/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Car, Gauge, Repeat, Calendar } from "lucide-react";

/* ================================
   CONFIG CENTRAL — EDITÁVEL
================================ */

type VehicleConfig = {
  name: string;
  body: Record<string, string>;
  engines: Record<string, string>;
};

const VEHICLES: Record<string, VehicleConfig> = {
  B: {
    name: "HB20",
    body: { "4": "Sedan", "5": "Hatch" },
    engines: {
      B: "1.0 TCI",
      C: "1.0",
      D: "1.6",
    },
  },

  C: {
    name: "Novo HB20",
    body: { "4": "Sedan", "5": "Hatch" },
    engines: {
      A: "1.0",
      B: "1.0 TGDI",
      D: "1.6",
      E: "1.0 TGDI L8",
      F: "1.0 L8",
    },
  },

  G: {
    name: "Creta",
    body: { "8": "SUV" },
    engines: {
      "1": "1.6",
      "3": "2.0",
    },
  },

  P: {
    name: "Novo Creta",
    body: { "8": "SUV" },
    engines: {
      B: "1.0 TGDI",
      C: "2.0",
      E: "1.0 TGDI",
      F: "1.6 TGDI",
      G: "1.6 TGDI FLEX",
    },
  },

  H: {
    name: "KONA",
    body: { "8": "SUV" },
    engines: { "1": "1.6 GDI HEV" },
  },

  R: {
    name: "PALISADE",
    body: { "8": "SUV" },
    engines: { E: "3.8 GDI" },
  },

  J: {
    name: "Tucson",
    body: { "3": "SUV" },
    engines: { L: "1.6 T-GDI" },
  },

  K: {
    name: "IONIC 5",
    body: { "8": "SUV" },
    engines: { C: "FR 70kW + RR 160kW" },
  },
};

const I20_CONFIG: VehicleConfig = {
  name: "i20",
  body: {
    "5": "Hatch",
  },
  engines: {
    E: "1.0 TGDi",
    F: "1.0 MPI",
  },
};

const TRANSMISSIONS: Record<string, string> = {
  A: "Manual",
  B: "AT",
  D: "AT",
  G: "DCT",
  X: "7DCT",
};

const YEARS: Record<string, string> = {
  X: "2028",
  V: "2027",
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

/* ================================
   HELPERS
================================ */

function getVehicleConfig(v: string): VehicleConfig | undefined {
  const vehicle = v[3];

  // Regra especial do i20
  if (vehicle === "B" && (v[7] === "E" || v[7] === "F")) {
    return I20_CONFIG;
  }

  return VEHICLES[vehicle];
}

function validarChassi(v: string) {
  const config = getVehicleConfig(v);

  if (v.length >= 4 && !config) return "Veículo inválido";

  if (v.length >= 6 && !config?.body[v[5]]) return "Carroceria inválida";

  if (v.length >= 8 && !config?.engines[v[7]]) return "Motorização inválida";

  if (v.length >= 9 && !TRANSMISSIONS[v[8]]) return "Transmissão inválida";

  if (v.length >= 10 && !YEARS[v[9]]) return "Ano inválido";

  return "";
}

function decodeChassi(v: string) {
  const config = getVehicleConfig(v);

  if (!config) return {};

  return {
    veiculo: config.name,
    carroceria: config.body[v[5]] || "",
    motorizacao: config.engines[v[7]] || "",
    transmissao: TRANSMISSIONS[v[8]] || "",
    ano: YEARS[v[9]] || "",
  };
}

/* ================================
   COMPONENTE
================================ */

export default function LeituraChassi() {
  const [chassi, setChassi] = useState("");
  const [erro, setErro] = useState("");

  const [modelo, setModelo] = useState({
    veiculo: "",
    carroceria: "",
    motorizacao: "",
    transmissao: "",
    ano: "",
    carName: "",
  });

  const buscarCarName = async (value: string) => {
    try {
      const res = await fetch("/api/carname", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) return;

      setModelo((prev) => ({
        ...prev,
        carName: data.data.d.CarName,
      }));
    } catch (err) {
      console.error("Erro carName:", err);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();

    setChassi(value);

    const erroMsg = validarChassi(value);
    setErro(erroMsg);

    if (erroMsg) {
      setModelo({
        veiculo: "",
        carroceria: "",
        motorizacao: "",
        transmissao: "",
        ano: "",
        carName: "",
      });
      return;
    }

    const decoded = decodeChassi(value);

    setModelo((prev) => ({
      ...prev,
      ...decoded,
    }));

    if (value.length === 17) buscarCarName(value);
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-180px)] max-w-2xl p-10 mx-auto bg-gray-100 dark:bg-gray-900 rounded-md">
      <form className="flex flex-col items-center gap-2 mx-auto">
        <p className="text-muted-foreground">
          Digite o chassi para descobrir o Modelo:
        </p>

        <Input
          maxLength={17}
          placeholder="Digite o chassi"
          value={chassi}
          onChange={handleChange}
          className="w-full max-w-xs rounded-lg shadow-sm"
        />
      </form>

      {erro && <p className="text-red-500 text-center mt-3">{erro}</p>}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {modelo.veiculo && card(Car, "Veículo", modelo.veiculo)}

        {modelo.carroceria && card(Car, "Carroceria", modelo.carroceria)}

        {modelo.motorizacao && card(Gauge, "Motorização", modelo.motorizacao)}

        {modelo.transmissao && card(Repeat, "Transmissão", modelo.transmissao)}

        {modelo.ano && card(Calendar, "Ano Modelo", modelo.ano)}

        {modelo.carName && card(Car, "CarName", modelo.carName)}
      </div>
    </div>
  );
}

/* ================================
   CARD UI HELPER
================================ */

function card(Icon: any, label: string, value: string) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 shadow rounded-xl border border-gray-200 dark:border-gray-700">
      <Icon className="text-blue-500" />

      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
