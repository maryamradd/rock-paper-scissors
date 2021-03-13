import * as React from "react";
import "./styles/global.scss";
import Choice from "./components/Choice";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import RulesCard from "./components/RulesCard";
import ResultsDisplay from "./components/ResultsDisplay";


function App() {
  
    return (
      <div>
        <Header>
          <ScoreBoard></ScoreBoard>
        </Header>
        <ResultsDisplay></ResultsDisplay>
        <div>
          <button className="rules-button">RULES</button>
        </div>
        <div className="footer">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">@maryamradd</a>.
        </div>
      </div>
    );
  
}

export default App;
