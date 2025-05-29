import React from 'react';
import ListaDeCartas from './ListaDeCartas';

const Land = () => {
  return (
    <div className="container">
      <h1>Filtrar por "Land"</h1>
      <ListaDeCartas types="Land" />
    </div>
  );
};

export default Land