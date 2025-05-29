import { Navbar, Nav, Container } from 'react-bootstrap';
import miLogo from './bg.jpg';
import { Link } from 'react-router-dom';

function Encabezado() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                <Link to="/">
                    <a>
                        <img src={miLogo} className="logo" alt="Mi logo" width="250" height="150"/>
                    </a>
                </Link>
            </Navbar.Brand>
            <Nav className="ms-auto align-items-center">
                <Nav.Link as={Link} to="/" className="me-3">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/cartas" className="me-3">Personajes</Nav.Link>
                <Nav.Link as={Link} to="/Land" className="me-3">Lugares</Nav.Link> 
            </Nav>
            </Container>
        </Navbar>
    </>
    )  
}

export default Encabezado;