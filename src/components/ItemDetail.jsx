import React, { useContext } from 'react';
import CartContext from '../contex/CartContext.jsx';
import useCount from '../hooks/useCount';

const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);
  const { count, handleRestar, handleSumar } = useCount(1, 1, producto.cantidad);

  return (
    <div className='producto-detalle'>
      <h1>{producto.categoria.nombre}</h1>
      <img src={producto.imagen} alt={producto.categoria.nombre} />
      <p>Medida: {producto.medida}</p>
      <p>Largo: {producto.largo}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.cantidad}</p>
      <div>
        <button onClick={handleRestar}>-</button>
        <span>{count}</span>
        <button onClick={handleSumar}>+</button>
      </div>
      <button onClick={() => agregarProducto(producto, count)}>Agregar Producto</button>
    </div>
  );
};

export default ItemDetail;
