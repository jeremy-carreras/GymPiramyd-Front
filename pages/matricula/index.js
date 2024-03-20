import { Container, Button } from "react-bootstrap";
import Layout from "/components/layouts/layout";
import Tabla from "../../components/matricula/tabla/tabla";
import { useEffect, useState } from "react";
import axios from "axios";

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
