import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardItems from "../assets/logements";
import "./Caroussel.css";

function Caroussel() {
  const { id } = useParams();
  const foundItem = cardItems.find((object) => object.id === id);
  const pictures = foundItem.pictures;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  return (
    <div className="caroussel">
      <button className="fleche-prec" onClick={prevSlide} >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button className="fleche-suiv" onClick={nextSlide} > 
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      {pictures.map((img, numPage) => {
        return (
          <div key={numPage}>
            {numPage === current && (
              <img src={img} alt="Photos du logement" className="caroussel-image" />
            )}
            {numPage === current && (
              <p className="numero-page"> {current + 1}/{pictures.length} </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Caroussel;