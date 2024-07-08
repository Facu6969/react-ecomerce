import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebase/config';
import Cart from './Cart';

const NavBar = (props) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const categoriasSnap = await getDocs(collection(db, 'categorias'));
        const categoriasData = categoriasSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCategorias(categoriasData);
      } catch (error) {
        console.error('Error al obtener las categorías desde Firebase:', error);
      }
    };

    fetchCategorias();
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
