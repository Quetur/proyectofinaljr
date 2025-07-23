import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agregar producto al carrito
  const agregarAlCarrito = (carta) => {
    console.log("carta de cartcontext",carta.name)
       Swal.fire({
      icon: 'success',
      title: `carta ${carta.name}`,
      text: "Agregada al carrito",
      showConfirmButton: false,
      timer: 1500})
   
    // Verificar si el producto ya existe en el carrito
    // Si existe, aumentar la cantidad; si no, agregarlo con cantidad 1
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find(item => item.id === carta.id);
      if (existe) {
        // Si ya existe, aumentar la cantidad
        console.log("existe",existe)
        return prevCarrito.map(item =>
          item.id === carta.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
         
      }
      else {
        console.log("no existe",carta)
      // Si no existe, agregarlo con cantidad 1
       console.log("carta.name",carta.name)
      return [...prevCarrito, { ...carta, cantidad: 1 }];
      }
    
    });
    
   
  };



  // Eliminar producto por ID
  /*const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
  };
*/
  

// Vaciar el carrito (opcional)
/*
  const vaciarCarrito = () => {
    setCarrito([]);
  };
*/
  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        agregarAlCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
  
};