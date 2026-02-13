// app/api/gservico/detail/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

//7000

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getPtBr(arr: any[] = []) {
  const pt = arr.find((x: any) => x.idioma === "PT_BR");
  return pt ? pt.texto.trim() : arr[0]?.texto || "";
}

export async function GET(req: NextRequest) {
  const startId = Number(req.nextUrl.searchParams.get("start")) || 0;
  try {
    const token = process.env.HMB_TOKEN!;
    if (!token) throw new Error("Token não configurado");

    const ids = await prisma.gerServicoList.findMany({
      where: { id: { gte: startId } },
      select: { id: true },
      orderBy: { id: "asc" },
    });


    console.log(`Iniciando sync de ${ids.length} registros (Xata mode)`);

    const batchSize = 4;
    let processed = 0;

    for (let i = 0; i < ids.length; i += batchSize) {
      const batch = ids.slice(i, i + batchSize);

      await Promise.all(
        batch.map(async (item) => {
          try {
            const url = `https://portalhyundai-api.mobato.com.br/v1/gerservicos/${item.id}`;
            const res = await fetch(url, {
              headers: {
                Accept: "application/json, text/plain, */*",
                Origin: "https://portalhyundai.mobato.com.br",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "PT_BR",
                Referer: "https://portalhyundai.mobato.com.br/",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            });

            if (!res.ok) {
              console.error(`Erro ${res.status} no ID ${item.id}`);
              return;
            }

            const data = await res.json();

            // ==================== 1. TABELA PRINCIPAL ====================
            await prisma.gerServico.deleteMany({ where: { id: data.id } }); // limpa antes
            await prisma.gerServico.create({
              data: {
                id: data.id,
                empresaId: data.empresa.id,
                empresaNome: data.empresa.razao,
                codFabrica: data.empresa.codFabrica,
                data: new Date(data.data),
                status: data.status,
                quickServiceInstalado: data.quickServiceInstalado ?? false,
                quickServiceOperando: data.quickServiceOperando ?? false,
                dataEncerramento: data.dataEncerramento
                  ? new Date(data.dataEncerramento)
                  : null,
                dataValidacao: data.dataValidacao
                  ? new Date(data.dataValidacao)
                  : null,
              },
            });

            // ==================== 2. HORÁRIOS ====================
            if (data.horarios?.length) {
              await prisma.gerServicoHorario.deleteMany({
                where: { gerServicoId: data.id },
              });
              await prisma.gerServicoHorario.createMany({
                data: data.horarios.map((h: any) => ({
                  id: h.id,
                  gerServicoId: data.id,
                  tipo: h.tipo,
                  entradaDia: h.entradaDia,
                  saidaAlmoco: h.saidaAlmoco,
                  entradaAlmoco: h.entradaAlmoco,
                  saidaDia: h.saidaDia,
                  horasTrabalhadas: h.horasTrabalhadas,
                  quantidadeDias: h.quantidadeDias,
                })),
                skipDuplicates: true, // Xata aceita isso
              });
            }

            // ==================== 3. TÉCNICOS ====================
            if (data.detalhes?.length) {
              await prisma.gerServicoDetalheTecnico.deleteMany({
                where: { gerServicoId: data.id },
              });
              await prisma.gerServicoDetalheTecnico.createMany({
                data: data.detalhes.map((d: any) => ({
                  id: d.id,
                  gerServicoId: data.id,
                  tipo: d.tipo,
                  nomeTecnico: d.nome,
                  diaSemana: d.diaSemana,
                  diaSabado: d.diaSabado,
                  faltaSemana: d.faltaSemana,
                  faltaSabado: d.faltaSabado,
                  vendidas: d.vendidas,
                  trabalhadas: d.trabalhadas,
                  disponiveis: d.disponiveis,
                  absenteismo: d.absenteismo ?? 0,
                  produtividade: d.produtividade,
                  eficiencia: d.eficiencia,
                  utilizacao: d.utilizacao,
                })),
                skipDuplicates: true,
              });
            }

            // ==================== 4. MÉTRICAS (A mais importante) ====================
            if (data.metricas?.length) {
              await prisma.gerServicoMetrica.deleteMany({
                where: { gerServicoId: data.id },
              });
              await prisma.gerServicoMetrica.createMany({
                data: data.metricas.map((m: any) => {
                  const titulo = getPtBr(m.metrica.titulo);
                  const subTitulo = getPtBr(m.metrica.subTitulo);
                  return {
                    id: m.id,
                    gerServicoId: data.id,
                    metricaId: m.metrica.id,
                    titulo,
                    subTitulo: subTitulo || null,
                    formato: m.metrica.formato,
                    realizado: m.realizado,
                    categoria: subTitulo || titulo,
                  };
                }),
                skipDuplicates: true,
              });
            }

            processed++;
            console.log(`Processado: ${data.id} - ${data.empresa.razao}`);
          } catch (err: any) {
            console.error(`Erro no ID ${item.id}:`, err.message);
          }
        })
      );

      await delay(1000); // Xata free agradece
    }

    return NextResponse.json({
      sucesso: true,
      processados: processed,
      mensagem: "Sync concluído com sucesso (modo Xata free)",
    });
  } catch (error: any) {
    console.error("Erro fatal:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
