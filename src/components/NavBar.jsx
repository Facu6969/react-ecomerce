import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';
import categoriasData from '../data/categorias.json';

const NavBar = (props) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    setCategorias(categoriasData);
  }, []);

  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        <li><NavLink to="/" className='nav-link' activeClassName="active" exact>Inicio</NavLink></li>
        {categorias.map(categoria => (
          <li key={categoria.id}><NavLink to={`/categorias/${categoria.id}`} className='nav-link' activeClassName="active">{categoria.nombre}</NavLink></li>
        ))}
      </ul>
      <Cart num={props.num} />
    </nav>
  );
};

export default NavBar;
