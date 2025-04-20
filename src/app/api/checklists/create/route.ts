import { prisma } from '../../../../lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

const mapEstadoCheck = (estado?: string): 'BOM' | 'RUIM' => {
  return (estado?.toLowerCase() === 'bom') ? 'BOM' : 'RUIM';
};

export async function POST(req: Request) {
  const user = await currentUser();

  try {
    const data = await req.json();
    console.log('🚀 Dados recebidos:', data);

    const client = await prisma.client.create({
      data: {
        nome: data.name,
        telefone: data.phone,
        email: data.email,
      },
    });

    const vehicle = await prisma.vehicle.create({
      data: {
        marca: data.brand,
        modelo: data.model,
        km: parseInt(data.km),
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const checklist = await prisma.checkList.create({
      data: {
        createdBy: user?.id as string,
        createdByName: user?.username || '',
        clientId: client.xata_id,
        vehicleId: vehicle.xata_id,

        nivelOleo: mapEstadoCheck(data.nivelOleo),
        fluidoFreio: mapEstadoCheck(data.fluidoFreio),
        fluidoDirecao: mapEstadoCheck(data.fluidoDirecao),
        fluidoArrefecimento: mapEstadoCheck(data.fluidoArrefecimento),
        desgastePneu: mapEstadoCheck(data.desgastePneu),
        calibragemPneus: mapEstadoCheck(data.calibragemPneus),
        lampadasDianteiras: mapEstadoCheck(data.lampadasDianteiras),
        lampadasTraseiras: mapEstadoCheck(data.lampadasTraseiras),
        fluidoLimpador: mapEstadoCheck(data.fluidoLimpador),
        desgasteBorrachaLimpador: mapEstadoCheck(data.desgasteBorrachaLimpador),
        correaAcessorios: mapEstadoCheck(data.correaAcessorios),

        observacoes: data.observations,
      },
    });

    return new Response(JSON.stringify({ message: 'Checklist criado com sucesso!' }), { status: 200 });

  } catch (error) {
    console.error('[CHECKLIST_CREATE_ERROR]', error);
    return new Response(JSON.stringify({ error: 'Erro ao criar o checklist' }), { status: 500 });
  }
}
