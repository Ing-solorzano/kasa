import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CardsPanel from "../components/CardsPanel";
import Footer from "../components/Footer";

/*React utilise  une écriture spécifique qui ressemble au HTML
mais avec des balises dont le nom commance par une majuscule (exemple: '<Header />')
et peuvent être autofermantes, sauf pour celle qui "encadre" toutes les balises
Ici La balise "encadrante" est une "div", qui est vraiment du HTML (elle commence par une minuscule).
en effet REACT utilise aussi directement du HTML original.
Dans ce cas la fonction 'Home()' appelle 4 fichiers qui composent cette page d'accueil
par les 'balises' REACT: '<Header />, <Banner />, <CardsPanel />, <Footer />'
qui font réference à l'import du même nom de chaque balise, ci-dessus.
*/
/*REACT permet de ne pas charger à chaque fois une nouvelle page complète, ccomme le fait normalement le link 'a' de HTML
Au contraire, REACT ne charge que des parties de la même page de départ.
ICI c'est la page 'Home' (Accueil)
*/

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <CardsPanel />
      <Footer />
    </div>
  );
}

export default Home;
