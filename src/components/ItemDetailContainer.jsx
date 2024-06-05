import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/productos.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const productoEncontrado = data.find(producto => producto.id === parseInt(id));
    setProducto(productoEncontrado);
  }, [id]);

  return (
    <div className="item-detail-container">
      {producto && <ItemDetail producto={producto} />}
    </div>
  );
}

export default ItemDetailContainer;
