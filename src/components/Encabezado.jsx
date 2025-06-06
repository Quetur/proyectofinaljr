import { Navbar, Nav, Container, Button } from "react-bootstrap";
import miLogo from "./bg.jpg";
import { Link, useNavigate } from "react-router-dom";

function Encabezado() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth") === "true";

  const cerrarSesion = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <Link to="/">
              <a>
                <img
                  src={miLogo}
                  className="logo"
                  alt="Mi logo"
                  width="250"
                  height="150"
                />
              </a>
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="me-3">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/cartas" className="me-3">
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
        </Container>
      </Navbar>
    </>
  );
}

export default Encabezado;
