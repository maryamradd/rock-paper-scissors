import React from "react";
import "../styles/global.css";
import Choice from "./Choice";
import Header from "./Header";
import ScoreBoard from "./ScoreBoard";
import RulesCard from "./RulesCard";
import ResultsDisplay from "./ResultsDisplay";
class App extends React.Component {
  render() {
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
}

export default App;
