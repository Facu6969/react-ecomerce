import React from 'react';
import { Link } from 'react-router-dom';
import useCount from '../hooks/useCount';
import useToasty from '../hooks/useToasty';

const Item = ({ producto, categorias }) => {
  const { count, handleRestar, handleSumar } = useCount(1, 1, producto.cantidad);
  const categoria = categorias.find(cat => cat.id === producto.categorias.id);
  const { handleAgregarProducto } = useToasty();
  
  return (
    <div className='producto'>
        <h2>{categoria ? categoria.nombre : producto.categorias.nombre}</h2>
        <img src={producto.imagen} alt={categoria ? categoria.nombre : producto.categorias.nombre} />
        <p>Medida: {producto.medida}</p>
        <p>Largo: {producto.largo}</p>
        <p>Precio: ${producto.precio}</p>
        <Link to={`/item/${producto.id}`}>ver mas</Link>
        <div className='quantity-controls'>
          <button onClick={handleRestar}>-</button>
          <span>{count}</span>
          <button onClick={handleSumar}>+</button>
        </div>
        <button onClick={() => handleAgregarProducto(producto, count)} className='add-button'>Agregar Producto</button>
    </div>
  );
}

export default Item;
