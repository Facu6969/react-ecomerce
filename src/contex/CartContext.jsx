import React, { createContext, useState } from 'react';
import productosData from "../data/productos.json";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto, cantidad) => {
    const productoEnCarrito = carrito.find(p => p.id === producto.id);
    if (productoEnCarrito) {
      const carritoActualizado = carrito.map(p =>
        p.id === producto.id 
          ? { ...p, cantidad: p.cantidad + cantidad } 
          : p
      );
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }

    // Actualiza la cantidad en productosData
    const productosActualizados = productosData.map(producto => 
      producto.id === producto.id 
        ? { ...producto, cantidad: producto.cantidad - cantidad } 
        : producto
    );

    // Aquí podrías guardar los productos actualizados en el estado o enviarlos a un backend
    // productosData = productosActualizados;
};



const CalcTotal = () => {
    return carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
};

const value = { carrito, setCarrito, agregarProducto, CalcTotal };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

