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
              <Card.Img src={carta.imageUrl || miLogo}/>
                <Card.Body>
                  <Card.Title>Nombre: {carta.name}</Card.Title>
                    <Card.Text>
                        <strong>Tipo: {carta.type || 'N/A'}</strong>
                    </Card.Text>
                    <Card.Text>
                        <strong>${carta.cmc}</strong>
                    </Card.Text>

                      <Button variant="primary" onClick={() => agregarAlCarrito(carta)}> Agregar al carrito   </Button>
                </Card.Body>
              </Card>
    
      </Row>
    </Container>
  );
};

export default TarjetaDeCarta;
