import React from "react";
import fondo from "./fondo.png";
import ListaDeCartas from "../components/ListaDeCartas";

const Inicio = () => {
  return (
    <div  className="h-100 d-flex flex-column" style={{ backgroundColor: '#f0f0f0', padding: '0px' }}>
     
        <img src={fondo}  style={{ maxWidth: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}  className="fondo" />
        {/*<ListaDeCartas />*/}

    
    </div>
  );
};

export default Inicio;
