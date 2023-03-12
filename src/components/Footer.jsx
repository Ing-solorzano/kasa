import React from 'react'
import './Footer.css'

/* Le composant Footer est construit ici de façon 'unique' pour être appelé par toutes les pages
sans avoir besoin d'être construit de nouveau à chaque fois, comme le Header aussi.
J'utilise ici la fonction : 'Date().getFullYear()' qui récupère l'année courante ('2023' quand j'ai créé cette application!)
que je place dans la balise <p> sous forme de variable '{effectiveYear}'
J'utilise aussi le symbole de copyright '©' avec le code '&copy' */

function Footer() {
    const effectiveYear = new Date().getFullYear();
  return (
    <div className='footer-container'>
        <img src="../../logoFooter.png" alt="logo monochrome de l'agence Kasa"/>
        <p className="footer-text">
        &copy;
        {effectiveYear} Kasa. All rights reserved
      </p>
    </div>
  )
}

export default Footer;