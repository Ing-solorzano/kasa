import React from "react";
import cardItems from "../assets/logements.json";
import { Link } from "react-router-dom";

/* Le composant CardsPanel affiche tous les fiches des logements (depuis la "BDD" json : logements.json)
grâce à la fonction de mapping "map".
la photo et le titre sont récupérés pour être affichés ('cover' et 'title')
Il ajoute à chaque Card affichée, un lien clicable: 'Link' (de React, voir les imports)
auquel on associe le chemin vers la page (parametre "to") qui ouvre la fiche du logement
grâce à l'Id récupéré sur la fiche cliquée (parametre "key").
Ici on n'importe pas de fichier CSS, car le CCS est inclus dans celui de la page 'Home.css'
car c'est seule page la qui utilise cette bannière*/

function CardsPanel() { 
    return (
        <div className="cardsPanel">
        {cardItems.map((item) => (
            <Link key={item.id} to={`/logement/${item.id}`}>
                <div className="card">
                <img src={item.cover} alt={item.title} />
                <p>{item.title}</p>
                </div>
            </Link>
        ))}
        </div>
    );
}

export default CardsPanel;