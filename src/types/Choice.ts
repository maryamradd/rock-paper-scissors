import Iconrock from '../images/icon-rock.svg';
import Iconpaper from '../images/icon-paper.svg';
import Iconscissors from '../images/icon-scissors.svg';

export type ChoiceType = {
  id: number;
  name: string;
  icon: string;
};

export const Rock: ChoiceType = {
  id: 1,
  name: 'rock',
  icon: Iconrock,
};

export const Paper: ChoiceType = {
  id: 2,
  name: 'paper',
  icon: Iconpaper,
};

export const Scissors: ChoiceType = {
  id: 3,
  name: 'scissors',
  icon: Iconscissors,
};

export const setChoice = (choice: ChoiceType, choiceId: number): ChoiceType => {
  if (choiceId === 0) {
    choice = Rock;
  } else if (choiceId === 1) {
    choice = Paper;
  } else {
    choice = Scissors;
  }

  return choice;
};
