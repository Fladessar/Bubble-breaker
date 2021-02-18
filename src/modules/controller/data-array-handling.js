// import '../../css/style.css';
import { numberColumns, numberRows} from '../model/user-sizes-of-game-field.js';
import { allBubblesRows } from '../view/create-html-structure.js';
import { drawCurrentBubblesPlacement } from '../view/draw-game-field.js';
import { playFieldDataArrayForUndo, previousScore } from '../controller/undo.js';
import { setUndoButtonEnabled } from '../view/change-color-of-undo-button.js';
import { handlingTotalScore } from '../controller/total-score-handling.js';
import { gettingTotalScore } from '../model/total-score.js';
import { getFieldDataArray, setFieldDataArray } from '../model/data-array.js';


let temporaryArray = [];

export function createNewBubbles() { // створюємо масив бульбашок різного кольору
  for (let i = 0; i < numberRows; i++) {
    temporaryArray[i] = [];
    for (let j = 0; j < numberColumns; j++) {
      temporaryArray[i][j] = Math.floor(Math.random()*5) + 1;
    };
  };
  setFieldDataArray(temporaryArray);
  drawCurrentBubblesPlacement(allBubblesRows, getFieldDataArray()); // відмальовуємо масив бульбашок
};

export const undo = () => {
  if (gettingTotalScore() > 0 ) {
    setFieldDataArray(playFieldDataArrayForUndo);

    setUndoButtonEnabled(false);
    handlingTotalScore(previousScore);
    drawCurrentBubblesPlacement(allBubblesRows, getFieldDataArray());
  };
};
