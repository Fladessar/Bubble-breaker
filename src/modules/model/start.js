import './css/style.css';
import { numberOfBubblesInRow, numberOfBubblesInColumn} from './user-sizes-of-game-field.js';
import { createHtmlStructure } from '../view/create-html-structure.js';
import { drawCurrentBubblesPlacement } from '../view/draw-game-field.js';
import { eventListener } from '../view/mouse-clicked.js';
import { playFieldDataArrayForUndo, previousScore } from '../controller/undo.js';
import { setUndoButtonEnabled } from '../view/change-color-of-undo-button.js';
import { totalScore, totalScoreHandling } from './total-score-handling.js';
import { drawBestResult } from '../view/draw-best-result.js';
import { getBestResult } from '../controller/best-result-handling.js';

export { allBubblesRows, playFieldDataArray, start };

const allBubblesRows = document.getElementsByTagName('tr');
let playFieldDataArray = [];

const start = () => {
createHtmlStructure(numberOfBubblesInRow, numberOfBubblesInColumn); // створюємо загальну структуру в HTML файлі (теги, id і інше)
createNewBubbles(); // створюємо і відмальовуємо масив бульбашок
eventListener(); // чекаємо на дії користувача
drawBestResult(getBestResult()); // відмальовуємо кращий результат (рекорд очок)
};

export function createNewBubbles() { // створюємо масив бульбашок різного кольору
  for (let i = 0; i < numberOfBubblesInColumn; i++) {
    playFieldDataArray[i] = [];
    for (let j = 0; j < numberOfBubblesInRow; j++) {
      playFieldDataArray[i][j] = Math.floor(Math.random()*5) + 1;
    };
  };
  drawCurrentBubblesPlacement(); // відмальовуємо масив бульбашок
};

export const undo = () => {
  if (totalScore > 0 ){
    playFieldDataArray = [];
    for (let i = 0; i < numberOfBubblesInColumn; i++) {
      playFieldDataArray[i] = [];
      for (let j = 0; j < numberOfBubblesInRow; j++) {
        playFieldDataArray[i].push(playFieldDataArrayForUndo[i][j]);
      };
    };
    setUndoButtonEnabled("gray");
    totalScoreHandling(previousScore);
    drawCurrentBubblesPlacement();
  };
};
