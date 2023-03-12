import React from 'react'
import Navbar from './Navbar'

import './Header.css'

function Header() {
  return (
    <div className='container'>
        <img className='logo' src="../../logo.png" alt="logo de l'agence immobilière Kasa"></img>
        <Navbar/>
    </div>
  )
}
export default Header;