import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Table,
  InputGroup,
  FormControl,
  Row,
  Button,
} from "react-bootstrap";
import {
  faCaretDown,
  faSearch,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./tabla.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  avisoError,
  avisoLoading,
  cerrarLoading,
} from "../../../funciones/avisos";
import ModalEditar from "../modal/modalEditar";

const urlApi = process.env.API_ROOT;

const Tabla = () => {
  const [dataCompleta, setDataCompleta] = useState([]);
  const [data, setData] = useState([]);
  const [dataEditar, setDataEditar] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [showModalEditar, setShowModalEditar] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [caret] = useState([
    faCaretDown,
    faCaretDown,
    faCaretDown,
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        avisoLoading();
        const response = await axios.get(`${urlApi}/plan/planes`);
        setDataCompleta(response.data);
        setData(response.data);
        cerrarLoading();
      } catch (error) {
        console.log(error);
        avisoError("No fue podible obtener los datos");
        cerrarLoading();
      }
    }
    fetchData();
  }, []);

  const handleCloseModalEditar = () => {
    setShowModalEditar(!showModalEditar);
  };

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
    { id: 1, nombre: "Clave", nombreVar: "idPlan" },
    { id: 2, nombre: "Nombre", nombreVar: "nombre" },
    { id: 3, nombre: "Precio", nombreVar: "precio" },
    { id: 4, nombre: "Editar", nombreVar: "" },
  ];

  const filtrarElementos = (terminoBusqueda) => {
    let search = dataCompleta.filter((item) => {
      if (
        item.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        String(item.idPlan)
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        String(item.precio)
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
                  <FontAwesomeIcon className={`btnPrimario`} icon={faSearch} />
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
                          {caret[index] ? (
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
                          ) : (
                            <></>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((plan, index) => (
                      <tr key={index} style={{ cursor: "pointer" }}>
                        <td style={{ textAlign: "center" }}>
                          <p className="m-2"></p> {plan.idPlan}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <p className="m-2"></p> {plan.nombre}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <p className="m-2"></p>{" "}
                          {plan.precio.toLocaleString("en-EN", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <Button
                            onClick={() => {
                              setShowModalEditar(!showModalEditar);
                              setDataEditar(plan);
                            }}
                            className="m-0"
                          >
                            Editar
                          </Button>
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
      <ModalEditar
        show={showModalEditar}
        handleClose={handleCloseModalEditar}
        data={dataEditar}
        setData={setDataEditar}
      ></ModalEditar>
    </Container>
  );
};

export default Tabla;
