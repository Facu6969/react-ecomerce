import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import NotFound  from './NotFound';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  

  useEffect(() => {
    setLoading(true);
    
    const fetchProducto = async () => {
      try {
        const docRef = doc(db, 'productos', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al cargar el producto:", error);
        setProducto(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

if (loading) {
  return <div>Cargando...</div>;
} else {
  return (
    <div className="item-detail-container">
      {producto ? <ItemDetail producto={producto} /> : <NotFound />}
    </div>
  );
}
}

export default ItemDetailContainer;
