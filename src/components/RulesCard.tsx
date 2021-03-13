import React from "react";
import "../styles/rules-card.scss";
import closeIcon from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";
export default function RulesCard() {
  return (
    <div className="container">
      <div className="top">
        <h1>RULES</h1>
        <img className="close_icon" src={closeIcon}></img>
      </div>
      <img className="rules-image" src={rules}></img>
    </div>
  );
}
