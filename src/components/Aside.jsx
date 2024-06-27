import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

const Aside = () => {
  return (
    <aside className='aside'>
        <Header />
        <NavBar/>
        <Footer />
    </aside>
  )
}

export default Aside
