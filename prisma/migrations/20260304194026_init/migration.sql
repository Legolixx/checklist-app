-- CreateTable
CREATE TABLE "ApiToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "ApiToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PacoteManutencao" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "chassi" TEXT NOT NULL,
    "comissao" DOUBLE PRECISION NOT NULL,
    "concessionario" TEXT NOT NULL,
    "consultor" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataEncerramento" TIMESTAMP(3) NOT NULL,
    "modelo" TEXT NOT NULL,
    "notaFiscalIndividual" BOOLEAN NOT NULL,
    "pacote" TEXT NOT NULL,
    "prazo" INTEGER NOT NULL,
    "revisoes" INTEGER NOT NULL,
    "statusComissao" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "versao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "mes" INTEGER NOT NULL,
    "DPSM" TEXT NOT NULL DEFAULT 'DPSM',

    CONSTRAINT "PacoteManutencao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BASE_DEALER" (
    "COD_DEALER" TEXT NOT NULL,
    "NOME_DEALER" TEXT,
    "ESTADO" TEXT,
    "GRUPO" TEXT,
    "DIVISÃO" TEXT,
    "STATUS" TEXT,
    "GER_REG" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BASE_DEALER_pkey" PRIMARY KEY ("COD_DEALER")
);

-- CreateTable
CREATE TABLE "resumo_os_por_dealer" (
    "id" TEXT NOT NULL,
    "dealer" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "total_os" INTEGER NOT NULL,
    "retro_os_erdat" INTEGER NOT NULL,
    "retro_os_aedat" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "resumo_os_por_dealer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GerServicoList" (
    "id" INTEGER NOT NULL,
    "dealerId" INTEGER,
    "dealerName" TEXT,
    "dealerCode" TEXT,
    "referenceMonth" TIMESTAMP(3),
    "status" TEXT,
    "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GerServicoList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GerServico" (
    "id" INTEGER NOT NULL,
    "empresaId" INTEGER NOT NULL,
    "empresaNome" TEXT NOT NULL,
    "codFabrica" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "quickServiceInstalado" BOOLEAN NOT NULL,
    "quickServiceOperando" BOOLEAN NOT NULL,
    "dataEncerramento" TIMESTAMP(3),
    "dataValidacao" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GerServico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GerServicoHorario" (
    "id" INTEGER NOT NULL,
    "gerServicoId" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "entradaDia" TEXT,
    "saidaAlmoco" TEXT,
    "entradaAlmoco" TEXT,
    "saidaDia" TEXT,
    "horasTrabalhadas" TEXT NOT NULL,
    "quantidadeDias" INTEGER NOT NULL,

    CONSTRAINT "GerServicoHorario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GerServicoDetalheTecnico" (
    "id" INTEGER NOT NULL,
    "gerServicoId" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "nomeTecnico" TEXT NOT NULL,
    "diaSemana" INTEGER NOT NULL,
    "diaSabado" INTEGER NOT NULL,
    "faltaSemana" INTEGER NOT NULL,
    "faltaSabado" INTEGER NOT NULL,
    "vendidas" DECIMAL(12,2) NOT NULL,
    "trabalhadas" DECIMAL(12,2) NOT NULL,
    "disponiveis" DECIMAL(12,2) NOT NULL,
    "absenteismo" DECIMAL(8,4) NOT NULL DEFAULT 0,
    "produtividade" DECIMAL(12,8) NOT NULL,
    "eficiencia" DECIMAL(12,8) NOT NULL,
    "utilizacao" DECIMAL(12,8) NOT NULL,

    CONSTRAINT "GerServicoDetalheTecnico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GerServicoMetrica" (
    "id" INTEGER NOT NULL,
    "gerServicoId" INTEGER NOT NULL,
    "metricaId" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "subTitulo" TEXT,
    "formato" TEXT NOT NULL,
    "realizado" DECIMAL(18,4) NOT NULL,
    "categoria" TEXT,

    CONSTRAINT "GerServicoMetrica_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "resumo_os_por_dealer_dealer_key" ON "resumo_os_por_dealer"("dealer");

-- CreateIndex
CREATE INDEX "GerServicoList_referenceMonth_idx" ON "GerServicoList"("referenceMonth");

-- CreateIndex
CREATE INDEX "GerServicoList_dealerCode_idx" ON "GerServicoList"("dealerCode");

-- CreateIndex
CREATE INDEX "GerServico_codFabrica_idx" ON "GerServico"("codFabrica");

-- CreateIndex
CREATE INDEX "GerServico_data_idx" ON "GerServico"("data");

-- CreateIndex
CREATE UNIQUE INDEX "GerServicoHorario_id_gerServicoId_key" ON "GerServicoHorario"("id", "gerServicoId");

-- CreateIndex
CREATE UNIQUE INDEX "GerServicoDetalheTecnico_id_gerServicoId_key" ON "GerServicoDetalheTecnico"("id", "gerServicoId");

-- CreateIndex
CREATE INDEX "GerServicoMetrica_titulo_idx" ON "GerServicoMetrica"("titulo");

-- CreateIndex
CREATE INDEX "GerServicoMetrica_categoria_idx" ON "GerServicoMetrica"("categoria");

-- CreateIndex
CREATE UNIQUE INDEX "GerServicoMetrica_id_gerServicoId_key" ON "GerServicoMetrica"("id", "gerServicoId");

-- AddForeignKey
ALTER TABLE "PacoteManutencao" ADD CONSTRAINT "PacoteManutencao_codigo_fkey" FOREIGN KEY ("codigo") REFERENCES "BASE_DEALER"("COD_DEALER") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerServico" ADD CONSTRAINT "GerServico_id_fkey" FOREIGN KEY ("id") REFERENCES "GerServicoList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerServicoHorario" ADD CONSTRAINT "GerServicoHorario_gerServicoId_fkey" FOREIGN KEY ("gerServicoId") REFERENCES "GerServico"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerServicoDetalheTecnico" ADD CONSTRAINT "GerServicoDetalheTecnico_gerServicoId_fkey" FOREIGN KEY ("gerServicoId") REFERENCES "GerServico"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerServicoMetrica" ADD CONSTRAINT "GerServicoMetrica_gerServicoId_fkey" FOREIGN KEY ("gerServicoId") REFERENCES "GerServico"("id") ON DELETE CASCADE ON UPDATE CASCADE;
