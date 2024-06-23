import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/productos.json';
import ItemDetail from './ItemDetail';
import NotFound from './NotFound';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const productoEncontrado = data.find(producto => producto.id === parseInt(id));
    setProducto(productoEncontrado);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail-container">
      {producto ? <ItemDetail producto={producto} /> : <NotFound />}
    </div>
  );
}

export default ItemDetailContainer;
