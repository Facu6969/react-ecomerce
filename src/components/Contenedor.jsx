import React from 'react'
import Aside from './aside/Aside'
import ItemListContainer from './ItemListContainer'

const Contenedor = () => {
  return (
    <div className='contenedor'>
        <Aside />
        <ItemListContainer titulo="ItemListContainer" />
    </div>
  )
}

export default Contenedor
