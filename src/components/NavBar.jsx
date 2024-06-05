import React from 'react'
import Cart from './Cart'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='nav'>
            <ul className='nav-menu'>
                <li ><Link to="/" className='nav-link'>Inicio</Link></li>
                <li><Link to="/categorias/tirante" className='nav-link'>Tirantes</Link></li>
                <li><Link to="/categorias/columna" className='nav-link'>Columnas</Link></li>
                <li><Link to="/categorias/viga" className='nav-link'>Vigas</Link></li>
            </ul>
            <Cart />
     </nav>
  )
}

export default NavBar
