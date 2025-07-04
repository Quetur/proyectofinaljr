import React, { useContext } from "react";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import miLogo from "./bg.jpg";
import { CartContext } from "./CartContext";
import imgcarrito from "./carrito.png"; 
import { Link, useNavigate } from "react-router-dom";

function Encabezado() {
  const { carrito } = useContext(CartContext);
  const totalItems =  carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth") === "true";

  const cerrarSesion = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <Link to="/">
              
                <img
                  src={miLogo}
                  className="logo"
                  alt="Mi logo"
                  width="250"
                  height="150"
                />
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="me-3">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/ListarTodasLasCartas" className="me-3">
              Personajes
            </Nav.Link>
            <Nav.Link as={Link} to="/Land" className="me-3">
              Lugares
            </Nav.Link>
            {/* Enlaces que solo se muestran si el usuario está autenticado */}
            {isAuth && (
              <Nav.Link as={Link} to="/perfil/admin">
                Administracion
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {/* Mostrar botón de login o logout según autenticación */}
            {!isAuth ? (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            ) : (
              <Button variant="outline-light" onClick={cerrarSesion}>
                Cerrar sesión
              </Button>
            )}
          </Nav>
          {/*
          <button rel="stylesheet" to="/carrito">
            {totalItems > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </Badge>
              )}
           
          </button>
          */}
      <div>
        <Link to="/carrito" className="position-relative">
          <img src={imgcarrito} width={60} alt="Carrito" className="carrito-icon" />
      
          <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle border border-light rounded-circle">
            {totalItems}
          </Badge>
        </Link>		
			</div>

        </Container>
      </Navbar>
    </>
  );
}

export default Encabezado;
