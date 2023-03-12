import React from 'react';

/* Le composant Banner prépare la bannière contenant l'image de fond du paysage et le texte 'Chez vous, partout et ailleurs'
pour être affichée quand elle est appelée par la page d'accueil ('Home')
Ici on n'importe pas de fichier CSS, car le CCS est inclus dans celui de la page 'Home.css'
car c'est seule page la qui utilise cette bannière*/

function Banner() {
    return(
        <div className="banner">
            <img className="imgAccueil" src="banner.png" alt="Paysage de fond de la page Accueil kasa" />
        <p>Chez vous, partout et ailleurs</p>      
      </div>
    )
}

export default Banner;