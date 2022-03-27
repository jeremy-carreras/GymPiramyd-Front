import { Container, Row, Col, Button, FormControl } from "react-bootstrap";
import styles from "./formularioInscripciones.module.css";
import { useState } from "react";
import axios from "axios";

const urlApi = "http://localhost:8081";

const FormularioInscripciones = () => {
  const [dataInscripcion, setDataInscripcion] = useState({
    nombre: "",
    fechaNacimiento: "",
    telefono: "",
    telefonoEmergencia: "",
    correo: "",
    tipoSangre: "",
  });

  const handleInputChange = (event) => {
    setDataInscripcion({
      ...dataInscripcion,
      [event.target.name]: event.target.value,
    });
  };

  const inscribir = async () => {
    console.log(dataInscripcion);
    try {
      await axios.post(`${urlApi}/cliente/nuevo`, dataInscripcion);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      style={{ backgroundColor: "#fff" }}
      className={`${styles.shadow} rounded col-12 col-md-11 col-lg-10 col-xl-9 col-xxl-8 px-4 my-5`}
    >
      <p className="h2 p-4">Inscripciones</p>
      <Row className="px-4 pb-3">
        <Col className="col-12">
          <h5>Nombre:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl name="nombre" onChange={handleInputChange} />
        </Col>
        <Col className="col-12">
          <h5>Fecha de nacimiento:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl
            type="date"
            name="fechaNacimiento"
            onChange={handleInputChange}
          />
        </Col>
        <Col className="col-12">
          <h5>Teléfono:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl name="telefono" onChange={handleInputChange} />
        </Col>
        <Col className="col-12">
          <h5>Teléfono de emergencia:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl name="telefonoEmergencia" onChange={handleInputChange} />
        </Col>
        <Col className="col-12">
          <h5>Correo:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl name="correo" onChange={handleInputChange} />
        </Col>
        <Col className="col-12">
          <h5>Tipo de sangre:</h5>
        </Col>
        <Col className="col-12 mb-4">
          <FormControl name="tipoSangre" onChange={handleInputChange} />
        </Col>
        <Col className="col-12 mb-3">
          <Button className="w-100" onClick={inscribir}>
            Aceptar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FormularioInscripciones;
