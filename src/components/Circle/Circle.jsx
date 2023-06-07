import React from "react";
import "./Circle.css";

function Circle() {
  const rotateText = () => {
    const text = "A random animation . Because everyone loves it .";
    return text.split("").map((char, i) => (
      <span key={i} style={{ transform: `rotate(${i * 7.4}deg)` }} id='spamCircle'>{char}</span>
    ));
   }

  return (
    <div className="circle" id="scrollingCircle">
      <div className="logo"></div>
      <div className="text">
        <p>{rotateText()}</p>
      </div>
    </div>
  );
}

export default Circle;