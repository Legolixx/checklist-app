import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { ChecklistEmail } from '@/components/email/ChecklistEmail';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

type ChecklistItem = {
  name: string;
  status: string;
};

type RequestBody = {
  name: string;
  email: string;
  model: string;
  km: string;
  observations?: string;
  checklistItems: ChecklistItem[];
};

// Define the checklist fields from the incoming data
const checklistFields = [
  "nivelOleo",
  "fluidoFreio",
  "fluidoDirecao",
  "fluidoArrefecimento",
  "desgastePneu",
  "calibragemPneus",
  "lampadasDianteiras",
  "lampadasTraseiras",
  "fluidoLimpador",
  "desgasteBorrachaLimpador",
  "correaAcessorios",
];

// Map field names to human-readable display names
const checklistFieldMap: Record<string, string> = {
  nivelOleo: "Nível de Óleo",
  fluidoFreio: "Fluido de Freio",
  fluidoDirecao: "Fluido de Direção",
  fluidoArrefecimento: "Fluido de Arrefecimento",
  desgastePneu: "Desgaste dos Pneus",
  calibragemPneus: "Calibragem dos Pneus",
  lampadasDianteiras: "Lâmpadas Dianteiras",
  lampadasTraseiras: "Lâmpadas Traseiras",
  fluidoLimpador: "Fluido do Limpador",
  desgasteBorrachaLimpador: "Desgaste da Borracha do Limpador",
  correaAcessorios: "Correia de Acessórios",
};

export async function POST(req: Request) {
  try {
    // Parse the incoming data
    const incomingData = await req.json();

    // Transform the incoming data to match RequestBody
    const transformedData: RequestBody = {
      name: incomingData.name,
      email: incomingData.email,
      model: `${incomingData.brand} ${incomingData.model}`, // Combine brand and model
      km: incomingData.km,
      observations: incomingData.observations,
      checklistItems: checklistFields.map(field => ({
        name: checklistFieldMap[field] || field, // Use display name or field name as fallback
        status: incomingData[field], // Get the status from incoming data
      })),
    };

    // Log the transformed data for debugging (optional)
    console.log(transformedData);

    // Destructure the transformed data
    const { name, email, model, km, observations, checklistItems } = transformedData;

    // Basic validation
    if (
      !name ||
      !email ||
      !model ||
      !km ||
      !Array.isArray(checklistItems) ||
      checklistItems.length === 0
    ) {
      return NextResponse.json(
        { error: 'Dados incompletos ou inválidos para envio do e-mail.' },
        { status: 400 }
      );
    }

    // Render the email HTML
    const emailHtml = await render(
      ChecklistEmail({
        customerName: name,
        vehicle: { model, km },
        checklistItems,
        observations,
      })
    );

    // Send the email with Resend
    const result = await resend.emails.send({
      from: 'Checklist Hyundai <Hyundai@vfazekas.art>',
      to: [email],
      subject: `Checklist do seu veículo - ${model}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar e-mail. Verifique os dados e tente novamente.' },
      { status: 500 }
    );
  }
}