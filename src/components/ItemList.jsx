import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div className="productos-grilla">
        {
         productos.length > 0 ? 
         productos.map(producto => {
          return <Item key={producto.id} producto={producto} />
         }) //podria usarse sin return? funciona, pero todavia nose si esta por algo en especial
         : <p>No hay productos</p>
        }
    </div>
  )
}

export default ItemList
