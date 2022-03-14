import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import styles from "./infoCard.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const dataPrueba = {
  nombre: "Jeremy Carreras",
  fechaNacimiento: "2022-02-19",
  correo: "correo@unam.mx",
  telefono: "5549593871",
  fechaUltimoPago: "2022-03-13",
  fechaProximoPago: "2022-03-13",
  tipoSangre: "O+",
};

const InfoCard = () => {
  const [dataCliente, setDataCliente] = useState(dataPrueba);
  const [visible, setVisible] = useState(false);
  const [correo, setCorreo] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  const handleShow = () => {
    setVisible(!visible);
  };

  const handelEdit = () => {
    setShowEdit(!showEdit);
  };

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

  const handleSubmit = () => {
    console.log(dataCliente);
  };

  return (
    <Container
      style={{ backgroundColor: "#fff" }}
      className={`${styles.shadow} rounded col-12 col-md-11 col-lg-10 col-xl-9 col-xxl-8 my-5`}
    >
      <Row style={{ textAlign: "space-between" }}>
        <Col>
          <p className="h2 px-4 pt-4 pb-2">Cliente</p>
        </Col>
        {showEdit ? (
          <></>
        ) : (
          <Col style={{ textAlign: "right" }}>
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faPenToSquare}
              className={`${styles.hover} fa-xl pt-4 px-3`}
              onClick={handelEdit}
            />
          </Col>
        )}
      </Row>
      {showEdit ? (
        <div className="px-3 pt-2">
          <FloatingLabel label="Nombre" className="mb-3">
            <Form.Control
              type="text"
              name="nombre"
              onChange={handleInputsChange}
              placeholder="Nombre"
              defaultValue={dataCliente.nombre}
            />
          </FloatingLabel>
          <FloatingLabel label="Fecha de nacimiento" className="mb-3">
            <Form.Control
              type="date"
              name="fechaNacimiento"
              onChange={handleInputsChange}
              placeholder="Fecha de nacimiento"
              defaultValue={dataCliente.fechaNacimiento}
            />
          </FloatingLabel>
          <FloatingLabel label="Correo" className="mb-3">
            <Form.Control
              type="email"
              name="correo"
              onChange={handleInputsChange}
              placeholder="Correo"
              defaultValue={dataCliente.correo}
            />
          </FloatingLabel>
          <FloatingLabel label="Teléfono" className="mb-3">
            <Form.Control
              type="text"
              name="telefono"
              onChange={handleInputsChange}
              placeholder="Teléfono"
              defaultValue={dataCliente.telefono}
            />
          </FloatingLabel>
          <FloatingLabel label="Teléfono de emergencia" className="mb-3">
            <Form.Control
              type="text"
              name="telefonoEmergencia"
              onChange={handleInputsChange}
              placeholder="Teléfono de emergencia"
              defaultValue={dataCliente.telefonoEmergencia}
            />
          </FloatingLabel>
          <FloatingLabel label="Tipo de sangre" className="mb-3">
            <Form.Control
              type="text"
              name="tipoSangre"
              onChange={handleInputsChange}
              placeholder="Tipo de sangre"
              defaultValue={dataCliente.tipoSangre}
            />
          </FloatingLabel>
        </div>
      ) : (
        <div className="pb-3 pt-2">
          <Row className="px-4 pb-3">
            <Col className="col-12 col-sm-4">
              <h5>Nombre:</h5>
            </Col>
            <Col className="col-12 col-sm-8">
              <h5 style={{ fontWeight: "300" }}>{dataCliente.nombre}</h5>
            </Col>
          </Row>
          <Row className="px-4 pb-3">
            <Col className="col-12 col-sm-4">
              <h5>Fecha de nacimiento:</h5>
            </Col>
            <Col className="col-12 col-sm-8">
              <h5 style={{ fontWeight: "300" }}>
                {dataCliente.fechaNacimiento}
              </h5>
            </Col>
          </Row>
          <Row className="px-4 pb-3">
            <Col className="col-12 col-sm-4">
              <h5>Correo:</h5>
            </Col>
            <Col className="col-12 col-sm-8">
              <h5 style={{ fontWeight: "300" }}>{dataCliente.correo}</h5>
            </Col>
          </Row>
          <Row className="px-4 pb-3">
            <Col className="col-12 col-sm-4">
              <h5>Teléfono:</h5>
            </Col>
            <Col className="col-12 col-sm-8">
              <h5 style={{ fontWeight: "300" }}>{dataCliente.telefono}</h5>
            </Col>
          </Row>
          {dataCliente.telefonoEmergencia ? (
            <Row className="px-4 pb-3">
              <Col className="col-12 col-sm-4">
                <h5>Teléfono de emergencia:</h5>
              </Col>
              <Col className="col-12 col-sm-8">
                <h5 style={{ fontWeight: "300" }}>
                  {dataCliente.telefonoEmergencia}
                </h5>
              </Col>
            </Row>
          ) : (
            <></>
          )}
          <Row className="px-4 pb-3">
            <Col className="col-12 col-sm-4">
              <h5>Fecha de último pago:</h5>
            </Col>
            <Col className="col-12 col-sm-8">
              <h5 style={{ fontWeight: "300" }}>
                {dataCliente.fechaUltimoPago}
              </h5>
            </Col>
          </Row>
          <Row className="px-4 pb-3">
            <Col className="col-12 col-sm-4">
              <h5>Fecha de próximo pago:</h5>
            </Col>
            <Col className="col-12 col-sm-8">
              <h5 style={{ fontWeight: "300" }}>
                {dataCliente.fechaProximoPago}
              </h5>
            </Col>
          </Row>
          <Row className="px-4 pb-3">
            <Col className="col-12 col-sm-4">
              <h5>Tipo de sangre:</h5>
            </Col>
            <Col className="col-12 col-sm-8">
              <h5 style={{ fontWeight: "300" }}>{dataCliente.tipoSangre}</h5>
            </Col>
          </Row>
        </div>
      )}
      {showEdit ? (
        <Row className="pb-3" style={{ textAlign: "space-between" }}>
          <Col style={{ textAlign: "right" }}>
            <Button onClick={handelEdit} className="mx-2" variant="danger">
              Cancelar
            </Button>
            <Button onClick={handleSubmit} className="mx-2" variant="success">
              Acpetar
            </Button>
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default InfoCard;
