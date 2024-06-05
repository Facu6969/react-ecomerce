import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className='producto'>
      <Link to={`/item/${producto.id}`}>
        <h2>{producto.categoria.nombre}</h2>
        <p>Medida: {producto.medida}</p>
        <p>Largo: {producto.largo}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: {producto.cantidad}</p>
        <img src={producto.imagen} alt={producto.categoria.nombre} />
      </Link>
    </div>
  );
}

export default Item;
