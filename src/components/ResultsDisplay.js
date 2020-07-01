import React from "react";
import Choice from "./Choice";
import "../styles/results-display.css";

export default function ResultsDisplay() {
  const cStyle = {width: "120px", height: "120px"};

  return (
    <div className="containter">
      <div id="col-player" className="column">
        <h4 className="player-title">YOU PICKED</h4>
        <Choice size="big-size"></Choice>
      </div>
      <div className="column again">
        <h1>YOU WIN</h1>
        <button className="again-button">PLAY AGAIN</button>
      </div>
      <div id="col-comp" className="column">
        <h4 className="player-title">THE HOUSE PICKED</h4>

        <Choice size="big-size"></Choice>
      </div>
    </div>
  );
}
