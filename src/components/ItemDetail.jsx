import React, { useContext } from 'react';
import useCount from '../hooks/useCount';
import useToasty from '../hooks/useToasty';

const ItemDetail = ({ producto }) => {
  const { count, handleRestar, handleSumar } = useCount(1, 1, producto?.cantidad);
  const { handleAgregarProducto } = useToasty();

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }


  return (
    <div className='producto-detalle'>
      <h1>{producto.nombre}</h1>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>Medida: {producto.medida}</p>
      <p>Largo: {producto.largo}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.cantidad}</p>
      <div className='quantity-controls'>
        <button onClick={handleRestar}>-</button>
        <span>{count}</span>
        <button onClick={handleSumar}>+</button>
      </div>
      <button onClick={() => handleAgregarProducto(producto, count)} className='add-button'>Agregar Producto</button>
    </div>
  );
};

export default ItemDetail;
