import React from 'react';
import banner from '../assets/banner.png';
import "./Banner.css";

function Banner() {
    return(
        <div className="banner">
            <img className="imgAccueil" src= {banner} alt="Paysage de fond de la page Accueil kasa" />
        <p>Chez vous, partout et ailleurs</p>      
      </div>
    )
}

export default Banner;