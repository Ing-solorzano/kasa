import React from 'react'
import './Footer.css'

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