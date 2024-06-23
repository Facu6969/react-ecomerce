import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

const Aside = (props) => {
  return (
    <aside className='aside'>
        <Header />
        <NavBar num={props.num}/>
        <Footer />
    </aside>
  )
}

export default Aside
