import React from "react";
import "../styles/happyCard.css";

function HappyCard({ number, title, Icon }) {
  return (
    <div className="happy_card">
      <div className="cardDiv">
        <Icon className="happy_Icon" size={30} /> {/* Dinamik ikonka */}
      </div>
      <h3>{number}</h3>
      <p>{title}</p>
    </div>
  );
}

export default HappyCard;
