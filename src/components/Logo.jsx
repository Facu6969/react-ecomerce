import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <h1>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'logo-link active' : 'logo-link'}
      >
        Valyria
      </NavLink>
    </h1>
  );
}

export default Logo;
