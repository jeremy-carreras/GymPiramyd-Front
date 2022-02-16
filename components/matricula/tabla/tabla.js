import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Table,
  Button,
  InputGroup,
  FormControl,
  Row,
} from "react-bootstrap";
import Swal from "sweetalert2";
import {
  faCaretDown,
  faSearch,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./tabla.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
//import SpinnerLoading from "../general/spinnerLoading";
//import moment from "moment";
//import axios from "axios";
//import { avisoError } from "../../funciones/avisos";

//const urlApi = process.env.API_ROOT;

const dataPrueba = [
  {
    clave: "CLIENT-0001",
    nombre: "Nombre Apellido1 Apellido2",
    fechaUltimoPago: "15-05-2022",
    fechaProximoPago: "15-05-2022",
  },
  {
    clave: "CLIENT-0002",
    nombre: "Nombre Apellido1 Apellido2",
    fechaUltimoPago: "15-05-2022",
    fechaProximoPago: "15-05-2022",
  },
  {
    clave: "CLIENT-0003",
    nombre: "Nombre Apellido1 Apellido2",
    fechaUltimoPago: "15-05-2022",
    fechaProximoPago: "15-05-2022",
  },
  {
    clave: "CLIENT-0004",
    nombre: "Nombre Apellido1 Apellido2",
    fechaUltimoPago: "15-05-2022",
    fechaProximoPago: "15-05-2022",
  },
  {
    clave: "CLIENT-0005",
    nombre: "Nombre Apellido1 Apellido2",
    fechaUltimoPago: "15-05-2022",
    fechaProximoPago: "15-05-2022",
  },
  {
    clave: "CLIENT-0002",
    nombre: "Nombre Apellido1 Apellido2",
    fechaUltimoPago: "15-05-2022",
    fechaProximoPago: "15-05-2022",
  },
  {
    clave: "CLIENT-0003",
    nombre: "Nombre Apellido1 Apellido2",
    fechaUltimoPago: "15-05-2022",
    fechaProximoPago: "15-05-2022",
  },
  {
    clave: "CLIENT-0004",
    nombre: "Nombre Apellido1 Apellido2",
    fechaUltimoPago: "15-05-2022",
    fechaProximoPago: "15-05-2022",
  },
  {
    clave: "CLIENT-0005",
    nombre: "Nombre Apellido1 Apellido2",
    fechaUltimoPago: "15-05-2022",
    fechaProximoPago: "15-05-2022",
  },
];

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
  ]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleNextPage = (producto) => {
    router.push({
      pathname: "/adscripcion/solicitud",
      query: {
        idProducto: producto.id_producto,
        folioProducto: producto.folio_producto,
      },
    });
  };

  useEffect(() => {
    async function fetchData() {
      setDataCompleta(dataPrueba);
      setData(dataPrueba);
      /*try {
        const response = await axios.get(`${urlApi}/adscripciones/pedidos`, {
          params: {
            idAdscripcion: localStorage.getItem("id_adscripcion"),
          },
        });
        setLoading(false);
        setReverse(true);
        ordenar(response.data, "fecha_evento");
        for (let index in response.data) {
          response.data[index].pCola = index;
        }
        setReverse(false);
        setDataCompleta(response.data);
        setData(response.data);
      } catch (error) {
        setLoading(false);
        avisoError("No fue posible cargar los pedidos");
        console.log(error);
      }*/
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
    { id: 1, nombre: "Clave", nombreVar: "clave" },
    { id: 2, nombre: "Nombre", nombreVar: "nombre" },
    { id: 3, nombre: "Fecha Último Pago", nombreVar: "fechaUltimoPago" },
    { id: 4, nombre: "Fecha Próximo Pago", nombreVar: "fechaProximoPago" },
  ];

  const filtrarElementos = (terminoBusqueda) => {
    let search = dataCompleta.filter((item) => {
      if (
        item.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        item.clave.toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return item;
      }
    });
    setData(search);
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
      style={{ backgroundColor: "#fff", width: "85%" }}
      className={`${styles.container} ${styles.shadow} rounded my-5`}
    >
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "200px" }}>
          {/*<SpinnerLoading width={"3rem"} height={"3rem"} fontSize={"1.7rem"} />*/}
        </div>
      ) : (
        <div>
          {dataCompleta.length === 0 ? (
            <Row style={{ textAlign: "center", margin: "200px 0 200px 0" }}>
              <p className="h2">No hay registros</p>
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
                    marginTop: "30px",
                    overflow: "scroll",
                    maxHeight: "25rem",
                    minHeight: "12rem",
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
                            handleNextPage(cliente);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <td style={{ textAlign: "center" }}>
                            <p className="m-2"></p> {cliente.clave}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p className="m-2"></p> {cliente.nombre}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p className="m-2"></p> {cliente.fechaUltimoPago}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p className="m-2"></p> {cliente.fechaProximoPago}
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
