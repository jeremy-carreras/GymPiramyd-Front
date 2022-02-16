import {
  Col,
  Row,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import styles from "./login.module.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

const urlApi = process.env.API_ROOT;

const Login = () => {
  const [datos, setDatos] = useState({
    user: "",
    password: "",
  });

  const router = useRouter();

  const handleNextPage = () => {
    router.push("/matricula");
  };

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container
      style={{ backgroundColor: "#fff" }}
      className={`${styles.shadow} rounded col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4`}
    >
      <div style={{ margin: "8rem 0 8rem 0"}}>
        <p className="h3 py-3 text-center">Inicio de sesión</p>
        <Row className="pb-2 px-2">
          <Col className="col-12 mb-2">
            <FormControl
              name="user"
              placeholder="Usuario"
              onChange={handleInputChange}
            />
          </Col>
          <Col className="col-12 mb-1">
            <FormControl
              name="fechaNacimiento"
              placeholder="Constraseña"
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Row className="pb-3 text-center px-2">
          <Col>
            <Button
              className={`w-100 btn btn-danger ${styles.btn}`}
              onClick={handleNextPage}
            >
              Aceptar
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
