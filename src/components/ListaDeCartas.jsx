import { useEffect, useState } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import miLogo from './micard.png';

const ListaDeCartas = ({types = null }) => {
  
  const[personajes,setPersonajes]=useState([]);
  const[loading,setLoading]=useState(true);

  useEffect(()=>
    {
      let url = 'https://api.magicthegathering.io/v1/cards'
      if (types)
      {
        url = `https://api.magicthegathering.io/v1/cards?types=${types}`;
      }
      // hacer el pedido de la api
      console.log("consulta ", url);
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
          setPersonajes(data.cards);
          setLoading(false);
      })
      .catch(err=>{
        console.error("Error de carga de API",err);
        setLoading(false);
      });
    },[types]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className='mt-4'>
     
     <Row>
      {personajes.map(char=>(
         
        <Col key={char.id} md={4}>
           {/*console.log(char.imageUrl)*/}
  
              <Card className="m-2" >
              <Card.Img src={char.imageUrl || miLogo}/>
                <Card.Body>
                  <Card.Title>Nombre: {char.name}</Card.Title>
                    <Card.Text>
                        <strong>Tipo: {char.type || 'N/A'}</strong>
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                         <Button variant='primary' >Agregar al carrito</Button>
                    </div>
                </Card.Body>
              </Card>
        </Col>
      ))}
    </Row>
    
   </Container>
  );
};

export default ListaDeCartas;