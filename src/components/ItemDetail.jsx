import React, { useContext } from 'react';
import CartContext from '../contex/CartContext.jsx';
import useCount from '../hooks/useCount';

const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);
  const { count, handleRestar, handleSumar } = useCount(1, 1, producto?.cantidad);

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
      <button onClick={() => agregarProducto(producto, count)} className='add-button'>Agregar Producto</button>
    </div>
  );
};

export default ItemDetail;
