import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import categoriasData from '../data/categorias.json';
import productosData from '../data/productos.json';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [titulo, setTitulo] = useState("Productos"); 
  const [categorias, setCategorias] = useState([]);

  const obtenerProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosData);
      }, 1000); 
    });
  };

  useEffect(() => {
    setCategorias(categoriasData);
    obtenerProductos().then((productos) => {
      if (id) {
        const categoria = categoriasData.find(categoria => categoria.id === id);
        if (categoria) {
          setTitulo(categoria.nombre);
          setProductos(productos.filter(producto => producto.categoria.id === id));
        } else {
          setTitulo("Productos");
          setProductos(productos);
        }
      } else {
        setTitulo("Productos");
        setProductos(productos);
      }
      setLoading(false); // Indica que los datos han sido cargados
    });
  }, [id]);

  return (
    <div className="item-list-container">
      <h1>{titulo}</h1>
      {loading ? <p>Cargando productos...</p> : <ItemList productos={productos} categorias={categorias} />}
    </div>
  );
}

export default ItemListContainer;
