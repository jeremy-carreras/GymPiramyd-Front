import { Container, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Layout from "/components/layouts/layout";
import Tabla from "../../components/matricula/tabla/tabla";
const Index = () => {
  const router = useRouter();

  const handleNextPage = () => {
    router.push("");
  };

  return (
    <Layout tituloNav={"Matrícula"} /*tipoUsuario={}*/>
      <Container>
        <Tabla></Tabla>
      </Container>
    </Layout>
  );
};

export default Index;
