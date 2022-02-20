import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import styles from "./formularioAltaTrabajador.module.css";
import { useState } from "react";

const FormularioAltaTrabajador = () => {
  const [selectedTipoUsuario, setSelectedTipoUsuario] = useState(
    "Seleccione el tipo de usuario"
  );
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const [dataAlta, setDataAlta] = useState({
    nombreCliente: "",
    telefono: "",
    direccion: "",
    tipoUsuario: "",
    usuario: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setDataAlta({
      ...dataAlta,
      [event.target.name]: event.target.value,
    });
  };

  const inscribir = () => {
    console.log(dataAlta);
  };

  return (
    <Container
      style={{ backgroundColor: "#fff" }}
      className={`${styles.shadow} rounded col-12 col-md-11 col-lg-10 col-xl-9 col-xxl-8 px-4 my-5`}
    >
      <p className="h2 p-4">Alta de un trabajador</p>
      <Row className="px-4 pb-3">
        <Col className="col-12">
          <h5>Nombre:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl name="nombreCliente" onChange={handleInputChange} />
        </Col>
        <Col className="col-12">
          <h5>Teléfono:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl name="telefono" onChange={handleInputChange} />
        </Col>
        <Col className="col-12">
          <h5>Dirección:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl name="direccion" onChange={handleInputChange} />
        </Col>
        <Col className="col-12">
          <h5>Tipo de trabajador:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <Dropdown>
            <Dropdown.Toggle
              className="w-100"
              id={1}
              variant="outline-secondary"
            >
              {selectedTipoUsuario}
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ width: "100%" }}
              onClick={(event) => {
                setDataAlta({
                  ...dataAlta,
                  tipoUsuario: event.target.id,
                });
                //setTipoUsuario(parseInt(event.target.id));
                if (parseInt(event.target.id) === 1) {
                  setSelectedTipoUsuario("Administrador");
                }
                if (parseInt(event.target.id) === 2) {
                  setSelectedTipoUsuario("Trabajador");
                }
              }}
            >
              <Dropdown.Item id={1}>
                Administrador
              </Dropdown.Item>
              <Dropdown.Item id={2}>
                Trabajador
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="col-12">
          <h5>Nombre de usuario:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl name="usuario" onChange={handleInputChange} />
        </Col>
        <Col className="col-12">
          <h5>Constraseña:</h5>
        </Col>
        <Col className="col-12 mb-3">
          <FormControl name="password" onChange={handleInputChange} />
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

export default FormularioAltaTrabajador;
