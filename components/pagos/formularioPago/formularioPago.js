import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import styles from "./formularioPago.module.css";
import { useState } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";

//const PRECIO_SEMANA = process.env.PRECIO_SEMANA;
const PRECIO_SEMANA = 100;
const PRECIO_MES = 250;
const PRECIO_ANUAL = 1000;

const FormularioPago = () => {
  const [idPlan, setIdPlan] = useState(null);
  const [cantidad, setCantidad] = useState(0);
  const [idCliente, setIdCliente] = useState("");
  const [monto, setMonto] = useState(0);
  const [selectedPago, setSelectedPago] = useState(
    "Seleccione el plan de pago"
  );
  const [disabled, setDisabled] = useState([true]);

  const dataPago = {
    idPlan: idPlan,
    cantidad: cantidad,
    idCliente: idCliente,
    monto: monto,
    idTrabajador: null,
  };

  const pagar = () => {
    console.log(dataPago);
  };

  return (
    <Container
      style={{ backgroundColor: "#fff" }}
      className={`${styles.shadow} rounded w-75 px-4 my-5`}
    >
      <p className="h2 p-4">Pagos</p>
      <Row className="px-4 pb-3">
        <Col className="col-12 col-lg-5 mb-2">
          <Dropdown>
            <Dropdown.Toggle
              className="w-100"
              id={1}
              variant="outline-secondary"
            >
              {selectedPago}
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ width: "100%" }}
              onClick={(event) => {
                setIdPlan(parseInt(event.target.id));
                if (parseInt(event.target.id) === 1) {
                  setSelectedPago("Semana");
                  setMonto(PRECIO_SEMANA);
                }
                if (parseInt(event.target.id) === 2) {
                  setSelectedPago("Mensual");
                  setMonto(PRECIO_MES);
                }
                if (parseInt(event.target.id) === 3) {
                  setSelectedPago("Anual");
                  setMonto(PRECIO_ANUAL);
                }
                disabled[0] = false;
                setCantidad(1);
              }}
            >
              <Dropdown.Item id={1}>Semanal</Dropdown.Item>
              <Dropdown.Item id={2}>Mensual</Dropdown.Item>
              <Dropdown.Item id={3}>Anual</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="col-12 col-sm-4 col-lg-2">
          <h5 className="pt-1">Cantidad:</h5>
        </Col>
        <Col className="col-12 col-sm-8 col-lg-5">
          <FormControl
            disabled={disabled[0]}
            type="number"
            value={cantidad}
            min={1}
            onChange={(value) => {
              setCantidad(value.target.value);
              if (idPlan === 1) {
                setMonto(
                  parseInt(PRECIO_SEMANA) * parseInt(value.target.value)
                );
              }
              if (idPlan === 2) {
                setMonto(parseInt(PRECIO_MES) * parseInt(value.target.value));
              }
              if (idPlan === 3) {
                setMonto(parseInt(PRECIO_ANUAL) * parseInt(value.target.value));
              }
            }}
          />
        </Col>
      </Row>
      <Row className="px-4 pb-3">
        <Col className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
          <h5 className="pt-1">ID del cliente:</h5>
        </Col>
        <Col className="col-12 col-sm-6 col-md-8 col-lg-9 col-xxl-10">
          <FormControl
            value={idCliente}
            onChange={(value) => {
              setIdCliente(value.target.value);
            }}
          />
        </Col>
      </Row>
      <Row className="px-4 pb-4">
        <Col className="col-4 col-sm-4 col-md-4 col-lg-3 col-xxl-2">
          <h5>Monto:</h5>
        </Col>
        <Col>{monto != 0 ? <h5>${monto}.00</h5> : <></>}</Col>
      </Row>
      <Row className="pb-4 text-center">
        <Col>
          <Button onClick={pagar}>Aceptar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FormularioPago;
