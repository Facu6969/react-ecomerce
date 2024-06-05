import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/productos.json';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  const [titulo, setTitulo] = useState("Productos"); 

  useEffect(() => {
    if (id) {
      const categoria = data.find(producto => producto.categoria.id === id)?.categoria;
      setTitulo(categoria ? categoria.nombre : "Productos");
      setProductos(data.filter(producto => producto.categoria.id === id));
    } else {
      setTitulo("Productos");
      setProductos(data);
    }
  }, [id]);

  return (
    <div className="item-list-container">
      <h1>{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
