import React from 'react';

const Item = ({ producto }) => {
  return (
    <div className='producto'>
      <h2>{producto.categoria}</h2>
      <p>Medida: {producto.medida}</p>
      <p>Largo: {producto.largo}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Cantidad: {producto.cantidad}</p>
      <img src={producto.imagen} alt={producto.categoria} />
    </div>
  );
}

export default Item;
