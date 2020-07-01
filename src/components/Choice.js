import React from "react";
import "../styles/choice.css";
import Iconrock from "../images/icon-rock.svg";
import Iconpaper from "../images/icon-paper.svg";
import Iconscissors from "../images/icon-scissors.svg";

function Choice(props) {
  const cStyle = {};
  const myChoice = "scissors";
  var logo;
  switch (myChoice) {
    case "rock":
      logo = Iconrock;
      break;
    case "paper":
      logo = Iconpaper;
      break;
    case "scissors":
      logo = Iconscissors;
      break;
  }

  return (
    <div className={props.size}>
      <div id={myChoice} className={`button-circle ${myChoice}-button`}>
        <div className="button-inside">
          <img src={logo} alt={myChoice} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Choice;
