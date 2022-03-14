import { Container } from "react-bootstrap";
import Layout from "/components/layouts/layout";
import InfoCard from "../../components/cliente/infoCard";

const Index = () => {
  return (
    <Layout
      tituloNav={"User"}
      tipoUsuario={1}
      urlBackground={"url(fondo-pago.jpeg)"}
    >
      <Container style={{ minHeight: "30rem" }}>
        <InfoCard></InfoCard>
      </Container>
    </Layout>
  );
};

export default Index;
