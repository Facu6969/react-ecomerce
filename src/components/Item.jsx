import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto, categorias }) => {
  const categoria = categorias.find(cat => cat.id === producto.categoria.id);
  return (
    <div className='producto'>
        <h2>{categoria ? categoria.nombre : producto.categoria.nombre}</h2>
        <img src={producto.imagen} alt={producto.categoria.nombre} />
        <p>Medida: {producto.medida}</p>
        <p>Largo: {producto.largo}</p>
        <p>Precio: ${producto.precio}</p>
        <Link to={`/item/${producto.id}`}>ver mas</Link>
        
    </div>
  );
}

export default Item;
