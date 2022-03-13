import { Container, Row, Col, Button, FormControl } from "react-bootstrap";
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
  fechaActualización: "2022-02-19",
  direccion: "Camino de la Prosperidad No. 158",
  telefono: "5549593871",
  usuario: "user",
  password: "password",
  tipoUsuario: "trabajador",
};

const InfoCard = () => {
  const [dataTrabajador, setDataTrabajador] = useState(dataPrueba);
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    const first = () => {
      let aux = "";
      for (let i = 0; i < dataTrabajador.password.length; i++) {
        aux = aux.concat("*");
      }
      setPassword(aux);
    };
    first();
  }, []);

  const handleShow = () => {
    setVisible(!visible);
  };

  const handleInputChange = (event) => {
    setDataTrabajador({
      ...dataTrabajador,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container
      style={{ backgroundColor: "#fff" }}
      className={`${styles.shadow} rounded col-12 col-md-11 col-lg-10 col-xl-9 col-xxl-8 my-5`}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="h2 p-4">Trabajador</p>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faPenToSquare}
          className={`${styles.hover} fa-xl py-3 px-2`}
          onClick={() => {
            setShowEdit(!showEdit);
          }}
        />
      </div>
      <Row className="px-4 pb-3">
        <Col className="col-12 col-sm-4">
          <h5>Nombre:</h5>
        </Col>
        <Col className="col-12 col-sm-8">
          {showEdit ? (
            <FormControl
              style={{ fontSize: "20px", fontWeight: "300", height: "2.5rem" }}
              defaultValue={dataTrabajador.nombre}
              name="nombre"
              onChange={handleInputChange}
              //disabled={true}
            ></FormControl>
          ) : (
            <h5 style={{ fontWeight: "300" }}>{dataTrabajador.nombre}</h5>
          )}
        </Col>
      </Row>
      <Row className="px-4 pb-3">
        <Col className="col-12 col-sm-4">
          <h5>Fecha de actualización:</h5>
        </Col>
        <Col className="col-12 col-sm-8">
          <h5 style={{ fontWeight: "300" }}>
            {dataTrabajador.fechaActualización}
          </h5>
        </Col>
      </Row>
      <Row className="px-4 pb-3">
        <Col className="col-12 col-sm-4">
          <h5>Dirección:</h5>
        </Col>
        <Col className="col-12 col-sm-8">
          {showEdit ? (
            <FormControl
              style={{ fontSize: "20px", fontWeight: "300", height: "2.5rem" }}
              defaultValue={dataTrabajador.direccion}
              name="direccion"
              onChange={handleInputChange}
              //disabled={true}
            ></FormControl>
          ) : (
            <h5 style={{ fontWeight: "300" }}>{dataTrabajador.direccion}</h5>
          )}
        </Col>
      </Row>
      <Row className="px-4 pb-3">
        <Col className="col-12 col-sm-4">
          <h5>Teléfono:</h5>
        </Col>
        <Col className="col-12 col-sm-8">
          {showEdit ? (
            <FormControl
              style={{ fontSize: "20px", fontWeight: "300", height: "2.5rem" }}
              defaultValue={dataTrabajador.telefono}
              name="telefono"
              onChange={handleInputChange}
              //disabled={true}
            ></FormControl>
          ) : (
            <h5 style={{ fontWeight: "300" }}>{dataTrabajador.telefono}</h5>
          )}
        </Col>
      </Row>
      <Row className="px-4 pb-3">
        <Col className="col-12 col-sm-4">
          <h5>Tipo de usuario:</h5>
        </Col>
        <Col className="col-12 col-sm-8">
          <h5 style={{ fontWeight: "300" }}>{dataTrabajador.tipoUsuario}</h5>
        </Col>
      </Row>
      <Row className="px-4 pb-3">
        <Col className="col-12 col-sm-4">
          <h5>Usuario:</h5>
        </Col>
        <Col className="col-12 col-sm-8">
          {showEdit ? (
            <FormControl
              style={{ fontSize: "20px", fontWeight: "300", height: "2.5rem" }}
              defaultValue={dataTrabajador.usuario}
              name="usuario"
              onChange={handleInputChange}
              //disabled={true}
            ></FormControl>
          ) : (
            <h5 style={{ fontWeight: "300" }}>{dataTrabajador.usuario}</h5>
          )}
        </Col>
      </Row>
      <Row className="px-4 pb-3">
        <Col className="col-12 col-sm-4">
          <h5>Contraseña:</h5>
        </Col>
        {visible ? (
          <Col className="col-12 col-sm-8 py-1">
            <h5 style={{ fontWeight: "300" }}>
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faEyeSlash}
                className={`${styles.hover} py-1 px-2 fa-sm`}
                onClick={() => {
                  handleShow();
                }}
              />
              {dataTrabajador.password}
            </h5>
          </Col>
        ) : (
          <Col className="col-12 col-sm-8">
            <h5 style={{ fontWeight: "300" }}>
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faEye}
                className={`${styles.hover} py-2 px-2 fa-sm`}
                onClick={() => {
                  handleShow();
                }}
              />
              {password}
            </h5>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default InfoCard;
