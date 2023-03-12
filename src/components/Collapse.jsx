import React from "react";
import { useState } from "react";
import Vector from "../assets/Vector.svg";
import "./Collapse.css";

function Collapse(props) {
  const [display, setDisplay] = useState("none");
  const [isActive, setIsActive] = useState("");
  const [rotate, setRotate] = useState("180deg");

  function inputCollapse() {
    setIsActive(isActive === "" ? "active" : "");
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
    setDisplay(display === "block" ? "none" : "block");
  }

  return (
    <div>
      <div className="collapse-block" onClick={inputCollapse}>
        <p id="title">{props.title}</p>
        <button>
          <img
            className="vector"
            src={Vector}
            style={{ rotate: `${rotate}` }}
            alt="flêche"
          />
        </button>
      </div>
      <div
        className={`text ${isActive}`}
        key={props.id}
        style={{ display: `${display}` }}
      >
        {props.texte}
      </div>
    </div>
  );
}

export default Collapse;