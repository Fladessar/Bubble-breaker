import { numberOfBubblesInRow, numberOfBubblesInColumn} from '../model/user-sizes-of-game-field.js';
import { allBubblesRows, playFieldDataArray} from '../model/index.js';

export const arrayOfColors = ["transparent", "yellow", "red", "purple", "green", "blue"];

export let drawCurrentBubblesPlacement = () => {
  for (let i = 0; i < numberOfBubblesInColumn; i++) {
    for (let j = 0; j < numberOfBubblesInRow; j++) {
      allBubblesRows[i].children[j].classList.remove(allBubblesRows[i].children[j].classList[0]);
      allBubblesRows[i].children[j].classList.add(arrayOfColors[playFieldDataArray[i][j]]);
    };
  };
};
