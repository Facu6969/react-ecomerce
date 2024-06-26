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

const handleChangeCantidad = (event, producto) => {
  const nuevaCantidad = parseInt(event.target.value, 10);
  if (!isNaN(nuevaCantidad) && nuevaCantidad >= 0) {
    const carritoActualizado = carrito.map(p =>
      p.id === producto.id
        ? { ...p, cantidad: nuevaCantidad }
        : p
    );
    setCarrito(carritoActualizado.filter(p => p.cantidad > 0));
  }
};

const handleKeyDown = (event, producto) => {
  if (event.key === 'Enter') {
    const nuevaCantidad = parseInt(event.target.value, 10);
    if (!isNaN(nuevaCantidad) && nuevaCantidad >= 0) {
      handleChangeCantidad(event, producto);
    }
  }
};

const CalcTotal = () => {
    return carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
};

const value = { carrito, setCarrito, agregarProducto, handleChangeCantidad, handleKeyDown, CalcTotal };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

