import React from 'react'
import NavBar from './NavBar'
import Cart from './Cart'

const Header = () => {
  return (
    <header className="header">
      <h1><a className='logo-link' href="#">Valyria</a></h1>
      <NavBar />
      <Cart />
    </header>
  )
}

export default Header
