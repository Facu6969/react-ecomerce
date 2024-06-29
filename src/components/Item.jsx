import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../contex/CartContext';
import useCount from '../hooks/useCount';

const Item = ({ producto, categorias }) => {
  const {agregarProducto} = useContext(CartContext);
  const { count, handleRestar, handleSumar } = useCount(1, 1, producto.cantidad);
  const categoria = categorias.find(cat => cat.id === producto.categoria.id);
  
  return (
    <div className='producto'>
        <h2>{categoria ? categoria.nombre : producto.categoria.nombre}</h2>
        <img src={producto.imagen} alt={producto.categoria.nombre} />
        <p>Medida: {producto.medida}</p>
        <p>Largo: {producto.largo}</p>
        <p>Precio: ${producto.precio}</p>
        <Link to={`/item/${producto.id}`}>ver mas</Link>
        <div className='quantity-controls'>
          <button onClick={handleRestar}>-</button>
          <span>{count}</span>
          <button onClick={handleSumar}>+</button>
        </div>
        <button onClick={() => agregarProducto(producto, count)} className='add-button'>Agregar Producto</button>
    </div>
  );
}

export default Item;
