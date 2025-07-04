import { Card } from "react-bootstrap";
import { Container, Row, Button } from "react-bootstrap";
import miLogo from './micard.png';

const TarjetaDeCarta = ({ carta, agregarAlCarrito }) => {
  return (
    //muestro las cards
   
    <Container className="mt-4">

      <Row>
            <Card className="m-2" >
               {console.log("tarjeta ", carta)}
              <Card.Img height="300" src={carta.imageUrl || miLogo}/>
                <Card.Body>
                  <Card.Title style={{ fontSize: '16px' }}>Nombre: {carta.name}</Card.Title>
                    <Card.Text style={{ fontSize: '14px' }}>
                        <strong  >Tipo: {carta.type || 'N/A'}</strong>
                        <strong className="text-end d-block" style={{ fontSize: '16px', textAlign: 'right' }}>${carta.cmc}</strong>
                    </Card.Text>
                    <Card.Text>
                       
                    </Card.Text>

                      <Button variant="primary" onClick={() => agregarAlCarrito(carta)}> Agregar al carrito   </Button>
                </Card.Body>
              </Card>
    
      </Row>
    </Container>
  );
};

export default TarjetaDeCarta;
