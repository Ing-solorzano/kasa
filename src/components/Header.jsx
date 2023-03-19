import React from 'react'
import Navbar from './Navbar'
import logo from "../assets/logo.png";

import './Header.css'

function Header() {
  return (
    <div className='header-container'>
        <img className='header-logo' src={logo} alt="logo de l'agence immobilière Kasa"></img>
        <Navbar/>
    </div>
  )
}
export default Header;