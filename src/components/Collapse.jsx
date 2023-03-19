import React from "react";
import { useState } from "react";
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
    <div className="collapse-block">
      <div className="collapse-title" onClick={inputCollapse}>
        <p>{props.title}</p>
        <button className="fleche" style={{ rotate: `${rotate}` }}>
          <i class="fa-solid fa-chevron-down"></i>
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