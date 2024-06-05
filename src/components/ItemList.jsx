import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <div className="productos-grilla">
      {productos.length > 0 ? 
        productos.map(producto => <Item key={producto.id} producto={producto} />) 
        : <p>No hay productos</p>}
    </div>
  );
}

export default ItemList;
