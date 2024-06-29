import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [titulo, setTitulo] = useState("Productos"); 
  const [categorias, setCategorias] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriasSnap = await getDocs(collection(db, 'categorias'));
        const categoriasData = categoriasSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCategorias(categoriasData);

        const productosSnap = await getDocs(collection(db, 'productos'));
        const productosData = productosSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        if (id) {
          const categoria = categoriasData.find(categoria => categoria.id === id);
          if (categoria) {
            setTitulo(categoria.nombre);
            setProductos(productosData.filter(producto => producto.categoriaId === id));
          } else {
            setTitulo("Productos");
            setProductos(productosData);
          }
        } else {
          setTitulo("Productos");
          setProductos(productosData);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="item-list-container">
      <h1>{titulo}</h1>
      {loading ? <p>Cargando productos...</p> : <ItemList productos={productos} categorias={categorias} />}
    </div>
  );
}

export default ItemListContainer;
