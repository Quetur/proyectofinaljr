import { Container, Row ,Col } from 'react-bootstrap';

const Pie = () => {
  return (
    <footer bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container fluid>   
         <Row className="bg-primary text-white">
            <Col>
                Talento Tech © Todos los derechos reservados
            </Col>         
         </Row>      
      </Container>
    </footer>
  );
};

export default Pie;