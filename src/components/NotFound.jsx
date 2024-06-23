import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <Link to="/" className="home-link">Inicio</Link>
    </div>
  )
}

export default NotFound
