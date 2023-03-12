import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import cardItems from "../assets/logements.json";
import "./Logement.css";
import StarsColored from "../assets/starsColored";
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

  const listeEquipements = item.equipments.map((e) => <li key={e}>{e}</li>);
  return (
    <>
      <Header />
      <main>
      <Caroussel pictures={item.pictures} />
  
        <div className="content">
          <div className="bloc-left">
            <div className="location">
              <b>{item.title}</b>
              <p>{item.location}</p>
            </div>
            <div className="tags">
              <ul>
                {item.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bloc-right">
            <div className="NbRating" >
              <StarsColored  rating={item.rating} />
            </div>

            <div className="host">
              <p>{item.host.name}</p>
              <img src={item.host.picture} alt="host" />
            </div>
          </div>
        </div>

        <div className="description">
          <Collapse texte={item.description} title="Description" />
          <Collapse texte={listeEquipements} title="Equipements" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Logement;