import { Modal, Button, Row, Col, FloatingLabel, Form } from "react-bootstrap";
import { useState } from "react";
import {
  avisoError,
  avisoExito,
  avisoLoading,
  cerrarLoading,
} from "../../../funciones/avisos";
import axios from "axios";

const urlApi = process.env.API_ROOT;

const ModalEditar = (props) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleClose = () => {
    props.handleClose();
    setShowEdit(false);
  };

  const handleInputsChange = (event) => {
    props.setData({
      ...props.data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    avisoLoading();
    try {
      await axios.put(`${urlApi}/plan/update`, props.data);
      await avisoExito();
      window.location.reload(true);
    } catch (error) {
      console.log(error);
      await avisoError("No fue posible guardar cambios");
    }
    cerrarLoading();
  };

  return (
    <>
      <Modal centered size="lg" show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="px-2">{props.data.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FloatingLabel label="Nombre" className="mb-3">
              <Form.Control
                type="text"
                name="nombre"
                onChange={handleInputsChange}
                placeholder="Nombre"
                defaultValue={props.data.nombre}
              />
            </FloatingLabel>
            <FloatingLabel label="Plan ($)" className="mb-3">
              <Form.Control
                type="text"
                name="precio"
                onChange={handleInputsChange}
                placeholder="Plan"
                defaultValue={props.data.precio}
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} className="mx-2" variant="success">
            Acpetar
          </Button>
          <Button onClick={handleClose} className="mx-2" variant="danger">
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditar;
