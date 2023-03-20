import React from "react";
import cardItems from "../assets/logements.json";
import { Link } from "react-router-dom";
import "./CardsPanel.css";

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