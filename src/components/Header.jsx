import React from 'react'
import Navbar from './Navbar'

import './Header.css'

/* Le composant Header est construit ici de façon 'unique' pour être appelé par toutes les pages
sans avoir besoin d'être construit de nouveau à chaque fois, comme le Footer aussi.
D'ailleurs lui-même appelle le composant Navbar grâce a l'écriture React, proche du HTML,
mais avec une majuscule pour le nom de la balise et autofermante ( '<NavBar />') */

function Header() {
  return (
    <div className='container'>
        <img className='logo' src="../../logo.png" alt="logo de l'agence immobilière Kasa"></img>
        <Navbar/>
    </div>
  )
}
export default Header;