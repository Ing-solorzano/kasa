import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Error.css";

function Error() {
  return (
    <div className="BodyError">
      <Header />
      <div className="blocError">
        <div className="error404">404</div>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retour vers la page d'accueil</Link>
      </div>
    </div>
  );
}

export default Error;