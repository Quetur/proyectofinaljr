import Encabezado from "./components/Encabezado";
import Pie from "./components/Pie";
import Inicio from "./paginas/Inicio";
import ListarTodasLasCartas from "./paginas/ListarTodasLasCartas";
import Land from "./components/Land";
import { CartProvider } from './components/CartContext';
import Login from "./paginas/Login";
import Perfil from './paginas/usuarios';  
import RutaProtegida from './components/RutaProtegida';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carrito from './components/Carrito';



function App() {

  return (
  
    <CartProvider>
      <Router>
        <Encabezado />
        <Routes>             
          <Route  path="/" element={<Inicio />}/>
          <Route path="/ListarTodasLasCartas" element={<ListarTodasLasCartas />} />
          <Route path="/land" element={<Land />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/perfil/:id" element={
                  <RutaProtegida><Perfil /></RutaProtegida>
               } />
        </Routes>
        <Pie />
      </Router>
    </CartProvider>

  );
}

export default App;
