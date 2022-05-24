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
import moment from "moment";
import axios from "axios";

const urlApi = "http://localhost:3000";

const Pagos = (props) => {
  const [dataPagos, setDataPagos] = useState({});

  useEffect(() => {
    const getData = async () => {
      const params = new URLSearchParams(window.location.search);
      const idCliente = params.get("idCliente");
      try {
        const response = await axios.get(
          `${urlApi}/Pago/pagosCliente?idCliente=${idCliente}`
        );
        setDataPagos(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Container
      style={{ backgroundColor: "#fff" }}
      className={`${styles.shadow} rounded col-12 col-md-11 col-lg-10 col-xl-9 col-xxl-8 my-5`}
    ></Container>
  );
};

export default Pagos;
