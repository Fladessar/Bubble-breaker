import { playFieldDataArray, undo } from './index.js';
import { drawCurrentBubblesPlacement } from '../view/draw-game-field.js';
import { numberOfBubblesInRow, numberOfBubblesInColumn} from './user-sizes-of-game-field.js';
import { changeColorOfDomElement } from '../view/change-color-of-undo-button.js';
import { totalScore } from './total-score-handling.js';

export let playFieldDataArrayForUndo, previousScore;

export let saveDataForUndo = () => {
  playFieldDataArrayForUndo = [];
  for (let i = 0; i < numberOfBubblesInColumn; i++) {
    playFieldDataArrayForUndo[i] = [];
    for (let j = 0; j < numberOfBubblesInRow; j++) {
      playFieldDataArrayForUndo[i].push(playFieldDataArray[i][j]);
    };
  };
  previousScore = totalScore;
  changeColorOfDomElement("white");
};
