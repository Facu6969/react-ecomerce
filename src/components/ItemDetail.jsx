import React from 'react';

const ItemDetail = ({ producto }) => {
  return (
    <div className='producto-detalle'>
      <h1>{producto.categoria.nombre}</h1>
      <img src={producto.imagen} alt={producto.categoria.nombre} />
      <p>Medida: {producto.medida}</p>
      <p>Largo: {producto.largo}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Cantidad: {producto.cantidad}</p>
    </div>
  );
}

export default ItemDetail;
