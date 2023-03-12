import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Error from "./pages/Error";

/* Ce fichier etablit les routes vers toutes les 4 pages de l'application
grâce à l'écriture spécifique React qui ressemble au HTML.
'BrowserRouter', 'Routes' et 'Route' sont des fonctions de React
Ici on applique les paramètre de 'Route", ('path' et 'exact path', 'element')
Dans chaque balise 'Route' On appelle chaque page par son nom de balise donné
lors de l'import ci-dessus
(exemple : '<Home />' fait référence à "import Home from './pages/Home'"; ).
Le premier chemin : "/" est le chemin par défaut qui fait le lien (et donc affiche) la page 'Home' (Accueil)
*/
/*REACT permet de ne pas charger à chaque fois une nouvelle page complète, ccomme le fait normalement le link 'a' de HTML
Au contraire, REACT ne charge que des parties de la même page de départ: la page 'Home' (Accueil)
*/

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;