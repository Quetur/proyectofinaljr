import { useEffect, useState, useContext} from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import TarjetaDeCarta from './TarjetaDeCarta';
import { CartContext } from './CartContext';


const ListaDeCartas = ({types = null }) => {
  
  const[personajes,setPersonajes]=useState([]);
  const[loading,setLoading]=useState(true);
  const { agregarAlCarrito } = useContext(CartContext);

   // Estado para la página actual
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6;

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
  
    //const handleAgregarAlCarrito = (personajes) => {
    //  alert(`Tarjeta ${personajes.number} agregada al carrito`);
    //};
    
  if (loading) {
    return <div>Loading...</div>;
  }

  /* Lógica de paginación
  const indiceUltimoProducto = paginaActual * productosPorPagina; 
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosVisibles = personajes.slice(indicePrimerProducto, indiceUltimoProducto);
  console.log("productos visibles", productosVisibles);
  const totalPaginas = Math.ceil(personajes.length / productosPorPagina);
  console.log("total paginas", totalPaginas);
*/

  return (
    <Row>
      {personajes.map((carta)=>(
        <Col key={carta.id} md={4}>
           {/*console.log(carta.imageUrl)
            console.log(carta.number)*/}
          <TarjetaDeCarta carta={carta} agregarAlCarrito={agregarAlCarrito} />
        </Col>
      ))}
    </Row>
    

  );
};

export default ListaDeCartas;