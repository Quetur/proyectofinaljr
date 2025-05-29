import { Container, Row ,Col } from 'react-bootstrap';

const Pie = () => {
  return (
    <footer bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container fluid>   
         <Row className="bg-primary text-white">
            <Col>
                Curso de react dictado por Talent Tech - Alumno Jesus Rosales
            </Col>         
         </Row>      
      </Container>
    </footer>
  );
};

export default Pie;