import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import styles from "./formularioInscripciones.module.css";
import { useState } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";

const FormularioInscripciones = () => {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setfechaNacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [tipoSangre, setTipoSangre] = useState("");

  const [dataInscripcion, setDataInscripcion] = useState({
    nombreCliente: "",
    fechaNacimiento: "",
    telefono: "",
    direccion: "",
    correo: "",
    tipoSangre: "",
  });

  const handleInputChange = (event) => {
    setDataInscripcion({
      ...dataInscripcion,
      [event.target.name]: event.target.value,
    });
  };

  const inscribir = () => {
    console.log(dataInscripcion);
  };

  return (
    <Container
      style={{ backgroundColor: "#fff" }}
      className={`${styles.shadow} rounded w-75 px-4 my-5`}
    >
      <p className="h2 p-4">Inscripciones</p>
      <Row className="px-4 pb-3">
        <Col className="col-12">
          <h5>Nombre:</h5>
        </Col>
        <Col className="col-12 mb-2">
          <FormControl
            name="nombreCliente"
            onChange={handleInputChange}
          />
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
          <FormControl
            name="telefono"
            onChange={handleInputChange}
          />
        </Col>
        <Col className="col-12">
          <h5>Dirección:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl
            name="direccion"
            onChange={handleInputChange}
          />
        </Col>
        <Col className="col-12">
          <h5>Correo:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl
            name="correo"
            onChange={handleInputChange}
          />
        </Col>
        <Col className="col-12">
          <h5>Tipo de sangre:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl
            name="tipoSangre"
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row className="pb-4 text-center">
        <Col>
          <Button onClick={inscribir}>Aceptar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FormularioInscripciones;
