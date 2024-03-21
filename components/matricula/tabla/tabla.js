import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Table,
  InputGroup,
  FormControl,
  Row,
} from "react-bootstrap";
import {
  faCaretDown,
  faSearch,
  faCaretUp,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./tabla.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import moment from "moment";
import {
  avisoError,
  avisoLoading,
  cerrarLoading,
} from "../../../funciones/avisos";

const urlApi = process.env.API_ROOT;

const Tabla = () => {
  const [dataCompleta, setDataCompleta] = useState([]);
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [reverse, setReverse] = useState(false);
  const [caret] = useState([
    faCaretDown,
    faCaretDown,
    faCaretDown,
    faCaretDown,
    faCaretDown,
  ]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleNextPage = (id) => {
    router.push({
      pathname: "/cliente",
      query: {
        idCliente: id,
      },
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        avisoLoading();
        const response = await axios.get(`${urlApi}/cliente/clientes`);
        setDataCompleta(response.data);
        setData(response.data);
        cerrarLoading();
      } catch (error) {
        console.log(error);
        avisoError("No fue podible obtener los clientes");
        cerrarLoading();
      }
    }
    fetchData();
  }, []);

  function predicateBy(array) {
    return function (a, b) {
      if (a[array] > b[array]) {
        return 1;
      } else if (a[array] < b[array]) {
        return -1;
      }
      return 0;
    };
  }

  const ordenar = (array, ordenarPor) => {
    array.sort(predicateBy(ordenarPor));
    if (reverse === true) {
      array.reverse();
    }
    setData([...array]);
  };

  const campos = [
    { id: 1, nombre: "Clave", nombreVar: "idCliente" },
    { id: 2, nombre: "Nombre", nombreVar: "nombre" },
    { id: 3, nombre: "Fecha del último pago", nombreVar: "fechaUltimoPago" },
    { id: 4, nombre: "Fecha del próximo pago", nombreVar: "fechaProximoPago" },
    { id: 5, nombre: "Status", nombreVar: "status" },
  ];

  const filtrarElementos = (terminoBusqueda) => {
    let search = dataCompleta.filter((item) => {
      if (
        item.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        String(item.idCliente)
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return item;
      }
    });
    setData([...search]);
  };

  const changeCaret = (index, reverse) => {
    if (reverse) {
      caret[index] = faCaretUp;
    } else {
      caret[index] = faCaretDown;
    }
  };

  return (
    <Container
      style={{ backgroundColor: "#fff" }}
      className={`${styles.container} ${styles.shadow} rounded my-3`}
    >
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "200px" }}>
          {/*<SpinnerLoading width={"3rem"} height={"3rem"} fontSize={"1.7rem"} />*/}
        </div>
      ) : (
        <div>
          {dataCompleta.length === 0 ? (
            <Row style={{ textAlign: "center" }}>
              <p className="h2" style={{ marginTop: "12rem" }}>
                No hay registros
              </p>
            </Row>
          ) : (
            <div className="p-4">
              <div style={{ textAlign: "left", width: "15rem" }}>
                <InputGroup className="mt-2" size="sm">
                  <FormControl
                    placeholder="Clave, Nombre"
                    value={busqueda}
                    onChange={(value) => {
                      setBusqueda(value.target.value);
                      filtrarElementos(value.target.value);
                    }}
                  />
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      className={`btnPrimario`}
                      icon={faSearch}
                    />
                  </InputGroup.Text>
                </InputGroup>
              </div>
              {data.length === 0 ? (
                <Row style={{ textAlign: "center", margin: "100px 0 200px 0" }}>
                  <p className="h2">No hay coincidencias</p>
                </Row>
              ) : (
                <div
                  style={{
                    marginTop: "1.5rem",
                    //overflow: "scroll",
                    //maxHeight: "25rem",
                    //minHeight: "12rem",
                  }}
                >
                  <Table hover responsive className="table table-striped">
                    <thead>
                      <tr>
                        {campos.map((campo, index) => (
                          <th style={{ textAlign: "center" }} key={campo.id}>
                            {campo.nombre}{" "}
                            <FontAwesomeIcon
                              className={`mt-2 ${styles.caretDown}`}
                              icon={caret[index]}
                              onClick={() => {
                                ordenar(data, campo.nombreVar);
                                //console.log("Se ordena " + data + " por " + campo.nombreVar);
                                setReverse(!reverse);
                                changeCaret(index, reverse);
                              }}
                            />
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((cliente, index) => (
                        <tr
                          key={index}
                          onClick={() => {
                            handleNextPage(cliente.idCliente);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <td style={{ textAlign: "center" }}>
                            <p className="m-2"></p> {cliente.idCliente}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p className="m-2"></p> {cliente.nombre}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p className="m-2"></p>
                            {cliente.fechaUltimoPago ? (
                              <>
                                {moment(cliente.fechaUltimoPago).format(
                                  "DD-MM-YYYY"
                                )}
                              </>
                            ) : (
                              <p>No hay registros</p>
                            )}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p className="m-2"></p>
                            {cliente.fechaProximoPago ? (
                              <>
                                {moment(cliente.fechaProximoPago).format(
                                  "DD-MM-YYYY"
                                )}
                              </>
                            ) : (
                              <p>No hay registros</p>
                            )}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p className="m-2"></p>
                            {moment(cliente.fechaProximoPago) >= moment() &&
                            cliente.fechaProximoPago ? (
                              <FontAwesomeIcon
                                style={{ color: "green" }}
                                className={`fa-2x`}
                                icon={faCircleCheck}
                              />
                            ) : (
                              <FontAwesomeIcon
                                style={{ color: "#dc3545" }}
                                className={`fa-2x`}
                                icon={faCircleXmark}
                              />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default Tabla;
