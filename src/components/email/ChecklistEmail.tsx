import {
    Html,
    Head,
    Body,
    Container,
    Heading,
    Text,
    Section,
    Row,
    Column,
    Img,
    Hr,
  } from '@react-email/components';
  
  interface ChecklistItem {
    name: string;
    status: string;
  }
  
  interface ChecklistEmailProps {
    customerName: string;
    vehicle: { model: string; km: string };
    checklistItems: ChecklistItem[];
    observations?: string;
  }
  
  // Mapa de ícones baseado nos nomes dos itens
  const iconMap: Record<string, string> = {
    nivelOleo: '/icons/oleo.png',
    fluidoFreio: '/icons/freio-de-disco.png',
    fluidoDirecao: '/icons/direcao.png',
    fluidoArrefecimento: '/icons/liquido-de-arrefecimento.png',
    desgastePneu: '/icons/pneu.png',
    calibragemPneus: '/icons/pressao-do-pneu.png',
    lampadasDianteiras: '/icons/lampada.png',
    lampadasTraseiras: '/icons/lampada.png',
    fluidoLimpador: '/icons/parabrisa.png',
    desgasteBorrachaLimpador: '/icons/limpador.png',
    correaAcessorios: '/icons/conjunto-de-engrenagens.png',
  };
  
  export const ChecklistEmail = ({
    customerName,
    vehicle,
    checklistItems,
    observations,
  }: ChecklistEmailProps) => {
    // URL base para os ícones (ajuste conforme seu domínio ou servidor de produção)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
    return (
      <Html>
        <Head />
        <Body style={main}>
          <Container style={container}>
            <Section>
              <Heading style={heading}>Checklist do seu veículo</Heading>
              <Text style={paragraph}>Olá, {customerName}!</Text>
              <Text style={paragraph}>Segue o resumo do seu atendimento:</Text>
              <Text style={paragraph}>
                <strong>Veículo:</strong> {vehicle.model} — {vehicle.km} km
              </Text>
            </Section>
  
            <Hr />
  
            <Section>
              <Heading style={{ ...heading, fontSize: 20 }}>Itens avaliados</Heading>
              {checklistItems.map((item, i) => {
                // Obter o caminho do ícone com base no nome do item
                const iconPath = iconMap[item.name.toLowerCase()];
                // Criar a URL completa do ícone
                const iconUrl = iconPath ? `${baseUrl}${iconPath}` : '';
  
                return (
                  <Row key={i} style={{ marginBottom: '10px' }}>
                    <Column style={{ width: '40px' }}>
                      {iconUrl && (
                        <Img
                          src={iconUrl}
                          alt={item.name}
                          width="24"
                          height="24"
                          style={{ verticalAlign: 'middle' }}
                        />
                      )}
                    </Column>
                    <Column>
                      <Text style={paragraph}>
                        {item.name}: <strong>{item.status}</strong>
                      </Text>
                    </Column>
                  </Row>
                );
              })}
            </Section>
  
            <Hr />
  
            <Section>
              <Text style={paragraph}>
                <strong>Observações:</strong> {observations || 'Nenhuma'}
              </Text>
            </Section>
  
            <Hr />
  
            <Text style={{ fontSize: 12, color: '#999', textAlign: 'center' }}>

            <Column style={{ width: '40px' }}>
            <Img
             src={'http://localhost:3000/Hyundai_logo.png'}
             alt={"Hyundai Logo"}
             width="24"
             height="24"
             style={{ verticalAlign: 'middle' }}
            />
            </Column>
              Obrigado pelo atendimento! 🚗🔧
            </Text>
          </Container>
        </Body>
      </Html>
    );
  };
  
  const main = {
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    padding: '20px 0',
  };
  
  const container = {
    backgroundColor: '#ffffff',
    border: '1px solid #eee',
    borderRadius: 8,
    padding: 20,
    maxWidth: 600,
    margin: '0 auto',
  };
  
  const heading = {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  };
  
  const paragraph = {
    fontSize: 16,
    lineHeight: '24px',
    margin: '4px 0',
  };