import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* Ce fichier index.js est le "point de départ" de l'application.
Il indique le 'lieu' (la balise div dont l'id est 'roots') 
ou le code HTML virtuellement crée grâce à REACT,
va s'implanter dans le fichier HTML 'index.html' qui est dans le dossier 'public'.*/

const root = ReactDOM.createRoot(document.getElementById('root'));

/*React utilise  une écriture spécifique qui ressemble au HTML
mais avec des balises dont le nom commance par une majuscule (exemple: '<App />')
et peuvent être autofermantes, sauf pour celle qui "encadre" toutes les balises.
Dans ce cas la fonction 'render' de REACT appelle le fichier 'App.jsx'
(par la 'balise': '<App />') qui fait réference à l'import du même nom ci-dessus)
*/

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
