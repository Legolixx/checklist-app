export type Produto = {
    COD_ITEM: string;
    DESCRICAO_ITEM: string;
    QUANTIDADE_ITEM: number;
    UNIDADE: string;
    VALOR_TOTAL_ITEM: number;
    TIPO_OS: string;
};

export type Servico = {
    COD_ITEM: string;
    DESCRICAO_ITEM: string;
    QUANTIDADE_ITEM: number;
    UNIDADE: string;
    VALOR_TOTAL_ITEM: number;
    TIPO_OS: string;
};

export type RepairOrder = {
    CODIGO_OS: string;
    MODELO: string;
    DEALER_CODE: string;
    DATA_ABERTURA_OS: string;
    DATA_FECHAMENTO_OS: string;
    ANO_MODELO: string;
    KM_VEICULO: number;
    CONSULTOR_SERVICOS: string;
    STATUS_OS: string;
    VALOR_TOTAL_OS: number;
    NOME_CLIENTE: string;
    CIDADE_CLIENTE: string;
    UF_CLIENTE: string;
    SOLICITACAO_CLIENTE: string;
    QUANTIDADE_HORAS_TRABALHADAS: string;
    QUANTIDADE_HORAS_VENDIDAS: string;
    EMAIL_CLIENTE: string;
    ProductsSet: { results: Produto[] };
    ServicesSet: { results: Servico[] };
};