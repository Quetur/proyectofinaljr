import Encabezado from "./components/Encabezado";
import Pie from "./components/Pie";
import Inicio from "./paginas/Inicio";
import Cartas from "./paginas/Cartas";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  
  return (
    <div>
      <Router>
        <header>
          <Encabezado />
        </header>
        <main>
          
          <Routes>    
                            
            <Route  path="/" element={<Inicio />}/>
            <Route path="/cartas" element={<Cartas />} />
           
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
