import Encabezado from "./components/Encabezado";
import Pie from "./components/Pie";
import Inicio from "./paginas/Inicio";
import Cartas from "./paginas/Cartas";
import Land from "./components/Land";
import Login from "./paginas/Login";
import Perfil from './paginas/usuarios';  
import RutaProtegida from './components/RutaProtegida';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  
  return (
    <div >
      <Router>
        <header>
          <Encabezado />
        </header>
        <main>
          
          <Routes>    
                            
            <Route  path="/" element={<Inicio />}/>
            <Route path="/cartas" element={<Cartas />} />
            <Route path="/land" element={<Land />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil/:id" element={
                  <RutaProtegida><Perfil /></RutaProtegida>
               } />
          </Routes>
        </main>
        <footer>
          <Pie />
        </footer>
      </Router>
    </div>
  );
}

export default App;
