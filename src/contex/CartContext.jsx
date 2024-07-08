import { doc, updateDoc } from 'firebase/firestore';
import React, { createContext, useState } from 'react';
import { db } from '../firebase/config';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const actualizarCantidadProducto = async (productoId, nuevaCantidad) => {
    try {
      const productoRef = doc(db, 'productos', productoId);
      await updateDoc(productoRef, {
        cantidad: nuevaCantidad
      });
    } catch (error) {
      console.error('Error al actualizar la cantidad del producto en Firebase:', error);
    }
  };


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
      setCarrito([...carrito, { ...producto, cantidad, cantidadOriginal: producto.cantidad }]);
    }

    const nuevaCantidad = parseInt(producto.cantidad, 10) - parseInt(cantidad, 10);
    if (!isNaN(nuevaCantidad) && nuevaCantidad >= 0) {
      actualizarCantidadProducto(producto.id, nuevaCantidad);
    }

};

const handleChangeCantidad = async(event, producto) => {
  const nuevaCantidad = parseInt(event.target.value, 10);
  if (!isNaN(nuevaCantidad) && nuevaCantidad >= 0) {
    const cantidadEnCarritoAnterior = carrito.find(p => p.id === producto.id)?.cantidad || 0;
    const carritoActualizado = carrito.map(p =>
      p.id === producto.id
        ? { ...p, cantidad: nuevaCantidad }
        : p
    );
    setCarrito(carritoActualizado.filter(p => p.cantidad > 0));
    

    const diferenciaCantidad = nuevaCantidad - cantidadEnCarritoAnterior;
    const nuevaCantidadStock = producto.cantidad - diferenciaCantidad;
      
      
      if (!isNaN(nuevaCantidadStock) && nuevaCantidadStock >= 0) {
        await actualizarCantidadProducto(producto.id, nuevaCantidadStock);
      }
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

const vaciarCarrito = () =>{
  setCarrito([]);
}

const value = { 
  carrito, 
  setCarrito, 
  agregarProducto, 
  handleChangeCantidad, 
  handleKeyDown, 
  CalcTotal, 
  vaciarCarrito, 
  actualizarCantidadProducto 
};

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

