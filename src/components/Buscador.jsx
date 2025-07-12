import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import miLogo from './micard.png';

const Buscador = ({ productos }) => {
  return (
    <Row>
      {productos.map((producto) => (
        <Col key={producto.id} md={4} className="mb-4">
          <Card>
            {/*<Card.Img variant="top" src={producto.image} style={{ height: '200px', objectFit: 'contain' }} />*/}
             <Card.Img height="300" src={producto.imageUrl || miLogo}/>
             <Card.Body>
                   <Card.Title style={{ fontSize: '16px' }}>Nombre: {producto.name}</Card.Title>
              {/*<Card.Title>{producto.title}</Card.Title>
              <Card.Text>${producto.price}</Card.Text>*/}
               <Card.Text style={{ fontSize: '14px' }}>
                        <strong  >Tipo: {producto.type || 'N/A'}</strong>
                        <strong className="text-end d-block" style={{ fontSize: '16px', textAlign: 'right' }}>${producto.cmc}</strong>
                    </Card.Text>
                {/*<Button variant="primary" onClick={() => agregarAlCarrito(producto)}> Agregar al carrito   </Button>*/}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Buscador;