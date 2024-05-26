import React from 'react'
import Header from './header/Header'
import NavBar from './header/NavBar'
import Cart from './header/Cart'
import Footer from './footer/Footer'

const Aside = () => {
  return (
    <aside>
        <Header />
        <NavBar />
        <Cart />
        <Footer />
    </aside>
  )
}

export default Aside
