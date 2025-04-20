"use client";

import { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import {
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

// --- Model maps ---
const brandModels: Record<string, string[]> = {
  Hyundai: ["HB20", "Creta", "Tucson"],
  Toyota: ["Corolla", "Hilux", "Yaris"],
  Chevrolet: ["Onix", "Tracker", "S10"],
  Fiat: ["Uno", "Argo", "Toro"],
};

// --- Zod schemas ---
const clientSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().email("Email inválido"),
});

const vehicleSchema = z.object({
  brand: z.string().min(1, "Marca é obrigatória"),
  model: z.string().min(1, "Modelo é obrigatório"),
  km: z.string().min(1, "KM é obrigatório"),
});

const technicalSchema = z.object({
  nivelOleo: z.enum(["bom", "ruim"]),
  fluidoFreio: z.enum(["bom", "ruim"]),
  fluidoDirecao: z.enum(["bom", "ruim"]),
  fluidoArrefecimento: z.enum(["bom", "ruim"]),
  desgastePneu: z.enum(["bom", "ruim"]),
  calibragemPneus: z.enum(["bom", "ruim"]),
  lampadasDianteiras: z.enum(["bom", "ruim"]),
  lampadasTraseiras: z.enum(["bom", "ruim"]),
  fluidoLimpador: z.enum(["bom", "ruim"]),
  desgasteBorrachaLimpador: z.enum(["bom", "ruim"]),
  correaAcessorios: z.enum(["bom", "ruim"]),
  observations: z.string().optional(),
});

const fullSchema = clientSchema.merge(vehicleSchema).merge(technicalSchema);

type FormData = z.infer<typeof fullSchema>;

// --- Step components ---
const StepClient = () => {
  const { register } = useFormContext<FormData>();
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input id="name" {...register("name")} />
      </div>
      <div>
        <Label htmlFor="phone">Telefone</Label>
        <Input id="phone" {...register("phone")} />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email")} />
      </div>
    </div>
  );
};

const StepVehicle = () => {
  const { register, watch } = useFormContext<FormData>();
  const selectedBrand = watch("brand");
  const models = brandModels[selectedBrand] || [];
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="brand">Marca</Label>
        <select
          id="brand"
          {...register("brand")}
          className="w-full rounded border px-2 py-1"
        >
          <option value="">Selecione uma marca</option>
          {Object.keys(brandModels).map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="model">Modelo</Label>
        <select
          id="model"
          {...register("model")}
          className="w-full rounded border px-2 py-1"
        >
          <option value="">Selecione um modelo</option>
          {models.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="km">KM</Label>
        <Input id="km" {...register("km")} />
      </div>
    </div>
  );
};

const StepTechnical = () => {
  const form = useFormContext<FormData>();
  const fields: {
    name: keyof FormData;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      name: "nivelOleo",
      label: "Nível de Óleo",
      icon: "/icons/oleo.png",
    },
    {
      name: "fluidoFreio",
      label: "Fluído de Freio",
      icon: "/icons/freio-de-disco.png",
    },
    {
      name: "fluidoDirecao",
      label: "Fluído de Direção",
      icon: "/icons/direcao.png",
    },
    {
      name: "fluidoArrefecimento",
      label: "Fluído de Arrefecimento",
      icon: "/icons/liquido-de-arrefecimento.png",
    },
    {
      name: "desgastePneu",
      label: "Desgaste dos Pneus",
      icon: "/icons/pneu.png",
    },
    {
      name: "calibragemPneus",
      label: "Calibragem dos Pneus",
      icon: "/icons/pressao-do-pneu.png",
    },
    {
      name: "lampadasDianteiras",
      label: "Lâmpadas Dianteiras",
      icon: "/icons/lampada.png",
    },
    {
      name: "lampadasTraseiras",
      label: "Lâmpadas Traseiras",
      icon: "/icons/lampada.png",
    },
    {
      name: "fluidoLimpador",
      label: "Fluído do Limpador",
      icon: "/icons/parabrisa.png",
    },
    {
      name: "desgasteBorrachaLimpador",
      label: "Borracha do Limpador",
      icon: "/icons/limpador.png",
    },
    {
      name: "correaAcessorios",
      label: "Correia de Acessórios",
      icon: "/icons/conjunto-de-engrenagens.png",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 items-center gap-4 font-medium text-sm border-b pb-2">
        <div className="col-span-1">Item</div>
        <div className="text-center">Bom</div>
        <div className="text-center">Ruim</div>
      </div>

      {fields.map((f) => (
        <FormField
          key={f.name}
          control={form.control}
          name={f.name}
          render={({ field }) => (
            <div className="grid grid-cols-3 items-center gap-4 border-b py-2">
              <FormLabel className="col-span-1 flex items-center gap-2">
                {f.icon && (
                  <Image
                    src={f.icon as string}
                    alt={f.label}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                )}
                {f.label}
              </FormLabel>

              <div className="flex justify-center">
                <input
                  type="radio"
                  id={`${f.name}-bom`}
                  value="bom"
                  checked={field.value === "bom"}
                  onChange={field.onChange}
                  className="h-4 w-4"
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="radio"
                  id={`${f.name}-ruim`}
                  value="ruim"
                  checked={field.value === "ruim"}
                  onChange={field.onChange}
                  className="h-4 w-4"
                />
              </div>
            </div>
          )}
        />
      ))}

      <FormField
        control={form.control}
        name="observations"
        render={({ field }) => (
          <div className="mt-6">
            <FormLabel>Observações</FormLabel>
            <FormControl>
              <textarea
                {...field}
                className="w-full h-36 rounded border px-2 py-1 resize-none"
              />
            </FormControl>
            <FormMessage />
          </div>
        )}
      />
    </div>
  );
};

// --- sendDataToAPI with navigation ---
const sendDataToAPI = async (
  data: FormData,
  router: ReturnType<typeof useRouter>
) => {
  try {
    const res = await fetch("/api/checklists/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    await res.json();
    router.push("/dashboard/checklist");
  } catch (err) {
    console.error("Erro ao enviar dados:", err);
  }
};

// --- Main component ---
export default function CheckListPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      brand: "",
      model: "",
      km: "",
      nivelOleo: "bom",
      fluidoFreio: "bom",
      fluidoDirecao: "bom",
      fluidoArrefecimento: "bom",
      desgastePneu: "bom",
      calibragemPneus: "bom",
      lampadasDianteiras: "bom",
      lampadasTraseiras: "bom",
      fluidoLimpador: "bom",
      desgasteBorrachaLimpador: "bom",
      correaAcessorios: "bom",
      observations: "",
    },
  });
  const router = useRouter();

  const validateStep = async () => {
    const schemas = [clientSchema, vehicleSchema, technicalSchema];
    const schema = schemas[currentStep];
    const vals = form.getValues();
    const partial = Object.fromEntries(
      Object.keys(schema.shape).map((k) => [k, vals[k as keyof FormData]])
    );
    const result = schema.safeParse(partial);
    if (!result.success) {
      result.error.errors.forEach((e) =>
        form.setError(e.path[0] as keyof FormData, { message: e.message })
      );
    }
    return result.success;
  };

  const handleNext = async () => {
    if (await validateStep()) setCurrentStep((s) => s + 1);
  };
  const handleBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const handleFinal = form.handleSubmit(async (data) => {
    setIsSubmitting(true);
    await sendDataToAPI(data, router);
    setIsSubmitting(false);
  });

  const steps = [
    <StepClient key="1" />,
    <StepVehicle key="2" />,
    <StepTechnical key="3" />,
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Checklist Automotivo</CardTitle>
      </CardHeader>
      <CardContent>
        <FormProvider {...form}>
          <form className="space-y-4">
            {steps[currentStep]}
            <div className="flex justify-between pt-4">
              {currentStep > 0 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={isSubmitting}
                >
                  Voltar
                </Button>
              ) : (
                <div />
              )}
              {currentStep < steps.length - 1 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={isSubmitting}
                >
                  Próximo
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleFinal}
                  disabled={isSubmitting}
                  className="flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                  ) : (
                    "Enviar"
                  )}
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
