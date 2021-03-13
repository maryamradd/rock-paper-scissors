import React from "react";
import "../styles/choice.scss";
import Iconrock from "../images/icon-rock.svg";
import Iconpaper from "../images/icon-paper.svg";
import Iconscissors from "../images/icon-scissors.svg";

export interface Props {
  choice: string;
  size: string;
  choiceIcon?: any;
/*   enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void; */
}


function Choice({choice, size, choiceIcon=Iconscissors} :Props) {
  const cStyle = {};
  /* const myChoice = "scissors";
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
  } */

  return (
    <div className={size}>
      <div id={choice} className={`button-circle ${choice}-button`}>
        <div className="button-inside">
          <img src={choiceIcon} alt={choice} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Choice;
