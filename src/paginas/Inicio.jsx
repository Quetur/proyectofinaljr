import React from "react";
import fondo from "./fondo.png";
import ListaDeCartas from "../components/ListaDeCartas";

const Inicio = () => {
  return (
    <div>
      <a>
        <img src={fondo} className="fondo" />
        {/*<ListaDeCartas />*/}

      </a>
    </div>
  );
};

export default Inicio;
