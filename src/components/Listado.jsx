import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { Button, Container, Spinner } from "react-bootstrap";
import Buscador from "./Buscador";
import Paginador from "./Paginador";

function Listado() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Estado para la página actual
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6;

  // Cargar los productos desde la API

  const cargarProductos = async () => {
    try {
      let url = "https://api.magicthegathering.io/v1/cards";
      //https://fakestoreapi.com/products";
    
      console.log("consulta ", url);
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      setProductos(datos.cards);
      console.log("productos", datos);
    } catch (error) {
      toast.error("Error al cargar los productos");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const manejarAgregar = () => {
    toast.success("Producto agregado al carrito 😜");
  };

  // Lógica de paginación
  const indiceUltimoProducto = paginaActual * productosPorPagina;
console.log("indiceUltimoProducto", indiceUltimoProducto);
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  console.log("indicePrimerProducto", indicePrimerProducto);
  const productosVisibles = productos.slice(
    indicePrimerProducto,
    indiceUltimoProducto
  );
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  return (
    <Container className="my-5">
      <Helmet>

        <meta name="descriptin" content="" />
      </Helmet>
  

      <Button variant="success" className="mb-4" onClick={manejarAgregar}>
        Agregar producto
      </Button>
      {cargando ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Buscador productos={productosVisibles} />
          <Paginador
            totalPaginas={totalPaginas}
            paginaActual={paginaActual}
            cambiarPagina={setPaginaActual}
          />
        </>
      )}

      <ToastContainer />
    </Container>
  );
}

export default Listado;
