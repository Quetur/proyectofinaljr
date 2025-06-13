import { useEffect, useState } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import TarjetaDeCarta from './TarjetaDeCarta';


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
  
    const handleAgregarAlCarrito = (personajes) => {
      alert(`Tarjeta ${personajes.number} agregada al carrito`);
    };
    
  if (loading) {
    return <div>Loading...</div>;
  }

  return (

     
     <Row>
      {personajes.map((carta)=>(
         
        <Col key={carta.number} md={4}>
           {/*console.log(carta.imageUrl)*/
            console.log(carta.number)}
          <TarjetaDeCarta carta={carta} agregarAlCarrito={handleAgregarAlCarrito} />
        </Col>
      ))}
    </Row>
    

  );
};

export default ListaDeCartas;