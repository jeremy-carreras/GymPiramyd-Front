import { Container } from "react-bootstrap";
import Layout from "/components/layouts/layout";
import Tabla from "../../components/matricula/tabla/tabla";

const Index = () => {
  return (
    <Layout
      tituloNav={"Matrícula"}
      tipoUsuario={1}
      urlBackground={"url(fondo-matricula.jpeg)"}
    >
      <Container>
        <Tabla></Tabla>
      </Container>
    </Layout>
  );
};

export default Index;
