import React, { useEffect, useState } from 'react'
import data from "../data/productos.json"
import ItemList from './ItemList';

const ItemListContainer = ({titulo}) => {

  const  [productos, setProductos] = useState([]);

  const pedirProducto = () => {
    return new Promise ((resolve, reject) =>{
      resolve(data)
    })
  }

  useEffect(() => {
    pedirProducto().then((res)=>{
      
        setProductos(res);
      });
  }, []);

  

  return (
    <div className="item-list-container">
      <h1>{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
