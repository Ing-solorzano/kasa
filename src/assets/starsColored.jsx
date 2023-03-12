import React, { useState, useEffect }  from "react";

function StarsColored(props) {
  let nbStars = props.rating;

  const maxStar = 5;
  const stars = [];


  const [mode, setMode] = useState("desktop");
  
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMode("desktop");
    } else {
      setMode("mobile");
    }
    window.addEventListener("resize", onResize);

    function onResize() {
      if (window.innerWidth >= 768 && mode === "mobile") {
        setMode("desktop");
      } if (window.innerWidth < 768 && mode ==='desktop'){
        setMode("mobile");
      }
    }
  },[mode]);

  
  for (let i = 1; i < maxStar + 1; i++) {
    if (i <= nbStars) {

      mode === "mobile" ?
        stars.push(
          <svg key={i} className="active-star" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" />
          </svg>
        ):
        stars.push(
          <svg key={i} className="active-star" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
          </svg>
        );
    } else {
      mode === "mobile" ?
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg">
            <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" />
          </svg>
        ):
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg">
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
          </svg>
        );
    }
  }
  return <>{stars}</>;
}

export default StarsColored;