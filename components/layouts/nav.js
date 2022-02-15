import Link from "next/link";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Offcanvas } from "react-bootstrap";
import styles from "../../styles/nav.module.css";

const Nav = (props) => {
  const [tipoUsuario, setTipoUsusario] = useState(props.tipoUsuario);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 1- adscripcion
  // 2- trabajador
  // 3- admin
  // 4- comunicación social
  // 4- reproducciones gráficas

  return (
    <div className={`${styles.nav}`}>
      <div className={`${styles.centro} container`}>
        <FontAwesomeIcon
          className={`${styles.bars} fa-2x d-inline-flex`}
          onClick={handleShow}
          icon={faBars}
        />
        <p className={`${styles.titulo} col-5 h4`}>{props.titulo}</p>
        <div className={`col-5 offset-4 d-inline-flex justify-content-end`}>
          <p className={`${styles.departamento}`}>
            Departamento de Tipografía y Diseño <br />
            Departamento de Reproducciones Gráficas
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
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.contenedor}>
          {tipoUsuario === 1 ? (
            <div>
              <br />
              <Link href="/adscripcion/misPedidos">
                <a className={`${styles.link} my-5`}>Alta de un servicio</a>
              </Link>
              <br />
              <Link href="/adscripcion/misPedidos">
                <a className={`${styles.link} my-5`}>Mis pedidos</a>
              </Link>
              <br />
            </div>
          ) : (
            <></>
          )}
          {tipoUsuario === 2 ? (
            <div>
              <br />
              <Link href="/trabajador/misProyectos">
                <a className={`${styles.link} my-5`}>
                  Solicitudes de servicios
                </a>
              </Link>
              <br />
              <br />
              <Link href="/">
                <a className={`${styles.link} my-5`}>Estadísticas personales</a>
              </Link>
              <br />
            </div>
          ) : (
            <></>
          )}
          {tipoUsuario === 3 ? (
            <div>
              <br />
              <Link href="/administrador/solicitudesServicios">
                <a className={`${styles.link} my-5`}>
                  Solicitudes de servicios
                </a>
              </Link>
              <br />
              <Link href="/administrador/trabajadores">
                <a className={`${styles.link} my-5`}>Trabajadores</a>
              </Link>
              <br />
              <Link href="/">
                <a className={`${styles.link} my-5`}>Alta de un libro</a>
              </Link>
              <br />
              <Link href="/">
                <a className={`${styles.link} my-5`}>Estadísticas</a>
              </Link>
              <br />
            </div>
          ) : (
            <></>
          )}
          {tipoUsuario === 4 ? (
            <div>
              <br />
              <Link href="/comunicacion/aprobaciones">
                <a className={`${styles.link} my-5`}>Aprobaciones</a>
              </Link>
              <br />
            </div>
          ) : (
            <></>
          )}
          {tipoUsuario === 5 ? (
            <div>
              <br />
              <Link href="/reproduccionesGraficas/impresiones">
                <a className={`${styles.link} my-5`}>Impresiones</a>
              </Link>
              <br />
            </div>
          ) : (
            <></>
          )}

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
