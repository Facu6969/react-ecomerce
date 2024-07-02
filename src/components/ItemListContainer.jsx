import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
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
        const categoriaRef = collection(db, 'categorias');
        const categoriaSnapshot = await getDocs(categoriaRef);
        const categoriasData = categoriaSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("Categorías obtenidas:", categoriasData);
        setCategorias(categoriasData);

        if (id) {
          const categoria = categoriasData.find(categoria => categoria.id === id);
          if (categoria) {
            setTitulo(categoria.nombre);
            const productoRef = query(collection(db, 'productos'), where('categorias.id', '==', id));
            const productoSnapshot = await getDocs(productoRef);
            const productosData = productoSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log("Productos obtenidos:", productosData);
            setProductos(productosData);
          } else {
            setTitulo("Productos");
            const productoRef = collection(db, 'productos');
            const productoSnapshot = await getDocs(productoRef);
            const productosData = productoSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log("Productos obtenidos:", productosData);
            setProductos(productosData);
          }
        } else {
          setTitulo("Productos");
          const productoRef = collection(db, 'productos');
          const productoSnapshot = await getDocs(productoRef);
          const productosData = productoSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          console.log("Productos obtenidos:", productosData);
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
