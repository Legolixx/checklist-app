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
  Hr,
  Img,
} from "@react-email/components";

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

export const ChecklistEmail = ({
  customerName,
  vehicle,
  checklistItems,
  observations,
}: ChecklistEmailProps) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const formatStatus = (status: string) => {
    const normalized = status.trim().toLowerCase();
    if (normalized === "bom") return "✅";
    if (normalized === "ruim") return "❌";
    return status;
  };

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
            <Heading style={{ ...heading, fontSize: 20 }}>
              Itens avaliados
            </Heading>
            {checklistItems.map((item, i) => (
              <Row key={i} style={{ marginBottom: "10px" }}>
                <Column>
                  <Text style={paragraph}>
                    {item.name}: <strong>{formatStatus(item.status)}</strong>
                  </Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Hr />

          <Section>
            <Text style={paragraph}>
              <strong>Observações:</strong> {observations || "Nenhuma"}
            </Text>
          </Section>

          <Hr />

          <Section style={footer}>
            <Img
              style={footerLogo}
              src={`${baseUrl}/Hyundai_logo.png`}
              alt="Hyundai Logo"
            />
            <Text style={footerText}>
              Obrigado pelo atendimento! 🚗🔧
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f9f9f9",
  fontFamily: "Arial, sans-serif",
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: 8,
  padding: 20,
  maxWidth: 600,
  margin: "0 auto",
};

const heading = {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 10,
};

const paragraph = {
  fontSize: 16,
  lineHeight: "24px",
  margin: "4px 0",
};

const footer = {
  textAlign: "center" as const,
  marginTop: "20px",
};

const footerLogo = {
  width: "80px",
  height: "auto",
  margin: "0 auto 10px",
};

const footerText = {
  fontSize: 12,
  color: "#999",
};
