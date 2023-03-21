import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import cardItems from "../assets/logements.json";
import "./Logement.css";
import Caroussel from "../components/Caroussel";
import Collapse from "../components/Collapse";
import Error from "./Error";
import Footer from "../components/Footer";

function Logement() {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const foundItem = cardItems.find((c) => c.id === id);

    setItem(foundItem);
  }, [id]);
  // si l'id n'est pas trouvé, alors l'utilisateur est redirigé vers la page d'erreur 404
  if (!item) {
    return <Error />;
  }
 
    // On sépare le nom et le prénom, grâce à la fonction split(), car ils sont dans une seule valeur de la BDD,
    //mais il faut les mettre sur 2 lignes dans la page
  const [firstName, lastName] = item.host.name.split(' ');

  return (
    <div className="page-content">
      <div className="main-top">
        <Header />
        <main>
          <Caroussel pictures={item.pictures} />
          <div className="content">
            <div className="bloc-left">
              <div className="location">
                <h2>{item.title}</h2>
                <p>{item.location}</p>
              </div>
              <div className="tags">
                <ul>
                  {item.tags.map((tag) => (<li key={tag}> {tag} </li>))}
                </ul>
              </div>
            </div>
            <div className="bloc-right">
              <div className="rating" >
                {[1,2,3,4,5].map((index)=> (<span className={item.rating >= index ? "coloredStar": "greyStar"}> ★ </span>))}
              </div>
              <div className="owner">
                <div className="owner-name">
                  <p>{firstName}</p>
                  <p>{lastName}</p>
                </div>
                <img src={item.host.picture} alt="propriétaire" />
              </div>
            </div>
          </div>
          <div className="description">
            <Collapse texte={item.description} title="Description" />
            <Collapse texte={item.equipments.map((e) => <li key={e}>{e}</li>)} title="Equipements" />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Logement;