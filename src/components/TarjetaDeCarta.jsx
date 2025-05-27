
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const TarjetaDeCarta = ({ cartas, agregarAlCarrito }) => {

  return (
     //muestro las cards
      <Container className='mt-4'>
        <h1>Personajes DBZ</h1>
        <Row>
          {cartas.map(char=>(
            <Col key={char.id} md={4}>
              <Card className="m-2">
              <Card.Img src={char.image}/>
                <Card.Body>
                  <Card.Title>{char.name}</Card.Title>
                    <Card.Text>
                        <strong>Raza:{char.race || 'N/A'}</strong>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
  );
};

export default TarjetaDeCarta;