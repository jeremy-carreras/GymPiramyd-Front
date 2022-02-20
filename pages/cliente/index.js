import { Container } from "react-bootstrap";
import Layout from "/components/layouts/layout";

const Index = () => {
  return (
    <Layout tituloNav={"Nombre del cliente"} tipoUsuario={1} urlBackground={"url(fondo-matricula.jpeg)"}>
      <Container>
      </Container>
    </Layout>
  );
};

export default Index;
