// import '../../css/style.css';
import { numberColumns, numberRows} from './user-sizes-of-game-field.js';
import { allBubblesRows } from '../view/create-html-structure.js';
import { drawCurrentBubblesPlacement } from '../view/draw-game-field.js';
import { playFieldDataArrayForUndo, previousScore } from '../controller/undo.js';
import { setUndoButtonEnabled } from '../view/change-color-of-undo-button.js';
import { totalScore, handlingTotalScore } from './total-score-handling.js';

export { playFieldDataArray };

let playFieldDataArray = [];

export function createNewBubbles() { // створюємо масив бульбашок різного кольору
  for (let i = 0; i < numberRows; i++) {
    playFieldDataArray[i] = [];
    for (let j = 0; j < numberColumns; j++) {
      playFieldDataArray[i][j] = Math.floor(Math.random()*5) + 1;
    };
  };
  drawCurrentBubblesPlacement(allBubblesRows, playFieldDataArray); // відмальовуємо масив бульбашок
};

export const undo = () => {
  if (totalScore > 0 ){
    playFieldDataArray = [];
    for (let i = 0; i < numberRows; i++) {
      playFieldDataArray[i] = [];
      for (let j = 0; j < numberColumns; j++) {
        playFieldDataArray[i].push(playFieldDataArrayForUndo[i][j]);
      };
    };

    setUndoButtonEnabled(false);
    handlingTotalScore(previousScore);
    drawCurrentBubblesPlacement(allBubblesRows, playFieldDataArray);
  };
};
