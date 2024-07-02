import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import categoriasData from '../data/categorias.json';
import Cart from './Cart';

const NavBar = (props) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    setCategorias(categoriasData);
  }, []);

  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Inicio</NavLink>
        </li>
        {
          categorias.map(categoria => (
            <li key={categoria.id}>
              <NavLink 
                to={`/categorias/${categoria.id}`} 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {categoria.nombre}
              </NavLink>
            </li>
        ))}
      </ul>
      <Cart num={props.num} />
    </nav>
  );
}

export default NavBar;
