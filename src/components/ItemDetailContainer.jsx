import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import NotFound  from './NotFound';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  

  useEffect(() => {
    const fetchProducto = () => {

      const docRef = doc(db, 'productos', id);

      getDoc(docRef)
        .then(res => {
          if (res.exists()) {
            setProductos({...res.data(), id: res.id });
          } else {
            console.log("No such document!");
          }
        })
        .catch(error => {
          console.error("Error al cargar el producto:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
  
    fetchProducto();
  }, [id]);

if (loading) {
  return <div>Cargando...</div>;
} else {
  return (
    <div className="item-detail-container">
      {productos ? <ItemDetail producto={productos} /> : <NotFound />}
    </div>
  );
}
}

export default ItemDetailContainer;
