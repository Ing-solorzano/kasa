import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";
import Collapse from "../components/Collapse";

function About() {

  const Items = [
    {
      id: 1,
      title: "Fiabilité",
      texte:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
      id: 2,
      title: "Respect",
      texte: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      id: 3,
      title: "Service",
      texte: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      id: 4,
      title: "Sécurité",
      texte: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
  ];

  return (
    <div>
      <Header />
      <div className="container-about">
        <div >
          <div className="aboutImg"></div>
        </div>
        <div className="valeurs">
          {Items.map((item) => {
            return (
              <Collapse title={item.title} texte={item.texte} key={item.id} />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;