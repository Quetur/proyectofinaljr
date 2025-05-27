import { useEffect, useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import miLogo from './ProyectoFinal.png';

const ListaDeCartas = () => { 
  const[personajes,setPersonajes]=useState([]);
  const[loading,setLoading]=useState(true);

  useEffect(()=>
    {
      // hacer el pedido de la api
      fetch('https://api.magicthegathering.io/v1/cards')
      .then(res=>res.json())
      .then(data=>{
          setPersonajes(data.cards);
          setLoading(false);
      })
      .catch(err=>{
        console.error("Error de carga de API",err);
        setLoading(false);
      });
    },[]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className='mt-4'>
    <h1>Personajes DBZ</h1>
    <Row>
      {personajes.map(char=>(
        <Col key={char.id} md={4}>
          <Card className="m-2">
          <Card.Img src={char.imageUrl || miLogo}/>
            <Card.Body>
              <Card.Title>{char.name}</Card.Title>
                <Card.Text>
                    <strong>Raza:{char.type || 'N/A'}</strong>
                </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
   </Container>
  );
};

export default ListaDeCartas;