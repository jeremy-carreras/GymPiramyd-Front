import { Container } from "react-bootstrap";
import Layout from "/components/layouts/layout";
import Tabla from "../../components/planes/tabla/tabla";

const Index = () => {

  return (
    <Layout
      tituloNav={"Planes"}
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
