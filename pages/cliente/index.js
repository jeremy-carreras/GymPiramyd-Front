import { Container } from "react-bootstrap";
import Layout from "/components/layouts/layout";
import InfoCard from "../../components/cliente/infoCard";
import { useState, useEffect } from "react";
import axios from "axios";

const urlApi = "http://localhost:8081";

const Index = () => {
  const [dataCliente, setDataCliente] = useState({});

  async function getData() {
    const params = new URLSearchParams(window.location.search);
    const idCliente = params.get("idCliente");
    //console.log(idProducto);
    try {
      const response = await axios.get(
        `${urlApi}/cliente/cliente?idCliente=${idCliente}`
      );
      setDataCliente(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleInputsChange = (event) => {
    /*setDataEditar({
      ...dataEditar,
      [event.target.name]: event.target.value,
    });*/
    setDataCliente({
      ...dataCliente,
      [event.target.name]: event.target.value,
    });
  };

  const modificarCliente = async () => {
    //console.log(dataInscripcion);
    try {
      await axios.put(`${urlApi}/cliente/cliente`, dataCliente);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout
      tituloNav={"User"}
      tipoUsuario={1}
      urlBackground={"url(fondo-pago.jpeg)"}
    >
      <Container style={{ minHeight: "30rem" }}>
        <InfoCard
          dataCliente={dataCliente}
          handleInputsChange={handleInputsChange}
          modificarCliente={modificarCliente}
        ></InfoCard>
      </Container>
    </Layout>
  );
};

export default Index;
