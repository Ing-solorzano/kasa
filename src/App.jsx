import React from "react";

import MyRoutes from "./Routes";

/*la fonction 'App() appelle le fichier 'MyRoutes.jsx'
grâce à la 'balise' REACT: '<MyRoutes />')
qui fait réference à l'import du même nom ci-dessus.
*/

function App() {
  return (
    <MyRoutes />
  );
}

/* Avec REACT, pour qu'une fonction puisse être 'importée'
et donc utilisé dans un autre fichier, 
il faut d'abord qu'elle soit 'exportée' ainsi:
*/
export default App;