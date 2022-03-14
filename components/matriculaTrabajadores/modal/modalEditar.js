import { Modal, Button, Row, Col, FloatingLabel, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import styles from "./modalEditar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
//import axios from "axios";
//import { avisoExito } from "../../funciones/avisos";
//import Swal from "sweetalert2";

const urlApi = process.env.API_ROOT;

const ModalEditar = (props) => {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [indPass, setIndPass] = useState(false);
  const [showPass, setShowPass] = useState("password");

  useEffect(() => {
    const first = () => {
      let aux = "";
      /*for (let i = 0; i < hidden.length; i++) {
        aux = aux.concat("*");
      }*/
      setPassword(aux);
    };
    first();
  }, []);

  const handleClose = () => {
    props.handleClose();
    setShowEdit(false);
  };

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
    props.setDataTrabajador({
      ...props.dataTrabajador,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(props.dataTrabajador);
  };

  const changePass = (index) => {
    setIndPass(!indPass);
    if (index) return setShowPass("password");
    else return setShowPass("text");
  };

  return (
    <>
      <Modal centered size="lg" show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="px-2">
            {props.dataTrabajador.nombre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showEdit ? (
            <div>
              <FloatingLabel label="Nombre" className="mb-3">
                <Form.Control
                  type="text"
                  name="nombre"
                  onChange={handleInputsChange}
                  placeholder="Nombre"
                  defaultValue={props.dataTrabajador.nombre}
                />
              </FloatingLabel>
              <FloatingLabel label="Dirección" className="mb-3">
                <Form.Control
                  name="direccion"
                  onChange={handleInputsChange}
                  placeholder="Dirección"
                  defaultValue={props.dataTrabajador.direccion}
                />
              </FloatingLabel>
              <FloatingLabel label="Teléfono" className="mb-3">
                <Form.Control
                  type="text"
                  name="telefono"
                  onChange={handleInputsChange}
                  placeholder="Teléfono"
                  defaultValue={props.dataTrabajador.telefono}
                />
              </FloatingLabel>
              <FloatingLabel label="Usuario" className="mb-3">
                <Form.Control
                  type="text"
                  name="usuario"
                  onChange={handleInputsChange}
                  placeholder="Usuario"
                  defaultValue={props.dataTrabajador.usuario}
                />
              </FloatingLabel>
              <FloatingLabel label="Contraseña" className="mb-3">
                <Form.Control
                  type={showPass}
                  name="password"
                  onChange={handleInputsChange}
                  placeholder="Contraseña"
                  defaultValue={props.dataTrabajador.password}
                />
              </FloatingLabel>
            </div>
          ) : (
            <div>
              <Row style={{ textAlign: "right" }}>
                <Col>
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faPenToSquare}
                    className={`${styles.hover} fa-xl pb-2 px-3`}
                    onClick={handelEdit}
                  />
                </Col>
              </Row>
              <Row className="px-4 pb-3">
                <Col className="col-12 col-sm-4">
                  <h5>Nombre:</h5>
                </Col>
                <Col className="col-12 col-sm-8">
                  <h5 style={{ fontWeight: "300" }}>
                    {props.dataTrabajador.nombre}
                  </h5>
                </Col>
              </Row>
              <Row className="px-4 pb-3">
                <Col className="col-12 col-sm-4">
                  <h5>Fecha de actualización:</h5>
                </Col>
                <Col className="col-12 col-sm-8">
                  <h5 style={{ fontWeight: "300" }}>
                    {props.dataTrabajador.fechaActualizacion}
                  </h5>
                </Col>
              </Row>
              <Row className="px-4 pb-3">
                <Col className="col-12 col-sm-4">
                  <h5>Dirección:</h5>
                </Col>
                <Col className="col-12 col-sm-8">
                  <h5 style={{ fontWeight: "300" }}>
                    {props.dataTrabajador.direccion}
                  </h5>
                </Col>
              </Row>
              <Row className="px-4 pb-3">
                <Col className="col-12 col-sm-4">
                  <h5>Teléfono:</h5>
                </Col>
                <Col className="col-12 col-sm-8">
                  <h5 style={{ fontWeight: "300" }}>
                    {props.dataTrabajador.telefono}
                  </h5>
                </Col>
              </Row>
              <Row className="px-4 pb-3">
                <Col className="col-12 col-sm-4">
                  <h5>Tipo de usuario:</h5>
                </Col>
                <Col className="col-12 col-sm-8">
                  <h5 style={{ fontWeight: "300" }}>
                    {props.dataTrabajador.tipoUsuario}
                  </h5>
                </Col>
              </Row>
              <Row className="px-4 pb-3">
                <Col className="col-12 col-sm-4">
                  <h5>Usuario:</h5>
                </Col>
                <Col className="col-12 col-sm-8">
                  <h5 style={{ fontWeight: "300" }}>
                    {props.dataTrabajador.usuario}
                  </h5>
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
                        className={`${styles.hover} py-1 px-1 fa-sm`}
                        onClick={() => {
                          handleShow();
                        }}
                      />
                      {props.dataTrabajador.password}
                    </h5>
                  </Col>
                ) : (
                  <Col className="col-12 col-sm-8">
                    <h5 style={{ fontWeight: "300" }}>
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        icon={faEye}
                        className={`${styles.hover} py-2 px-1 fa-sm`}
                        onClick={() => {
                          handleShow();
                        }}
                      />
                      {password}
                    </h5>
                  </Col>
                )}
              </Row>
            </div>
          )}
          {showEdit ? (
            <Row style={{ textAlign: "space-between" }}>
              <Col>
                <Form.Check
                  className="mx-2 mt-0"
                  id={1}
                  key={1}
                  label="Mostrar contraseña"
                  type="checkbox"
                  onChange={() => {
                    changePass(indPass);
                  }}
                />
              </Col>
              <Col style={{ textAlign: "right" }}>
                <Button onClick={handelEdit} className="mx-2" variant="danger">
                  Cancelar
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="mx-2"
                  variant="success"
                >
                  Acpetar
                </Button>
              </Col>
            </Row>
          ) : (
            <></>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="mx-2" onClick={handleClose} variant="primary">
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditar;
