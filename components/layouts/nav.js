import Link from "next/link";
import { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Offcanvas } from "react-bootstrap";
import styles from "../../styles/nav.module.css";

const Nav = (props) => {
  const [tipoUsuario, setTipoUsusario] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    function fetchData() {
      setTipoUsusario(parseInt(localStorage.getItem("idTipoUsuario")));
    }
    fetchData();
  });

  const menu_url = [
    { url: "matricula", nombre: "Matrícula", users: 2 },
    { url: "inscripciones", nombre: "Inscripciones", users: 2 },
    { url: "registroPagos", nombre: "Registro de pagos", users: 2 },
    { url: "pagos", nombre: "Pagos", users: 2 },
    { url: "altaTrabajador", nombre: "Alta de trabajador", users: 2 },
    { url: "matriculaTrabajadores", nombre: "Trabajadores", users: 2 },
    { url: "planes", nombre: "Planes", users: 2 },
  ];

  return (
    <div className={`${styles.nav}`}>
      <div className={`${styles.centro} container`}>
        <FontAwesomeIcon
          className={`${styles.bars} fa-2x d-inline-flex`}
          onClick={handleShow}
          icon={faBars}
        />
        <p className={`${styles.titulo} col-5 h4`}>{props.titulo}</p>
        <div className={`col-5 offset-5 d-inline-flex justify-content-end`}>
          <p className={`${styles.departamento}`}>
            Sistema Integral de Administración
            <br />
          </p>
        </div>
        <div className={styles.triangle}></div>
      </div>

      <Offcanvas className={styles.sidebar} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <FontAwesomeIcon
            className={`fa-2x d-inline-flex`}
            onClick={handleShow}
            icon={faBars}
          />
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.contenedor}>
          <div>
            <br />
            {menu_url.map((opcion, index) => (
              <div className="mt-1" key={index}>
                <Link href={"/" + opcion.url}>
                  <a className={`${styles.link} my-5`}>{opcion.nombre}</a>
                </Link>
                <br />
              </div>
            ))}
          </div>
          <Link href="/">
            <a className={`${styles.link} ${styles.cerrar}`}>Cerrar sesión</a>
          </Link>
          <br />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Nav;
