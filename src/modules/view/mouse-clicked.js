import { createNewBubbles, undo } from '../model/data-array-handling.js';
import { calculationBubblesToRemove } from '../controller/collect-data-for-bubbles-removing.js';
import { numberRows, numberColumns } from '../model/user-sizes-of-game-field.js';
import { handlingTotalScore } from '../model/total-score-handling.js';
import { setUndoButtonEnabled } from './change-color-of-undo-button.js';
import { getBestResult } from '../controller/best-result-handling.js';
import { drawBestResult } from './draw-best-result.js';


export function listenIfMouseClicked () {

  document.getElementById('new game').addEventListener('click', () => {// при використанні кнопки new game починаємо нову ігру
    createNewBubbles();
    handlingTotalScore(0);
    setUndoButtonEnabled(false);
    drawBestResult(getBestResult());
  });

  document.getElementById('undo').addEventListener('click', () => {//
    undo();
  });

  document.getElementById('play field').addEventListener('click', (element) => {// обробляємо клік по ігровому полю
    let et = element.target,
        et2 = element.target.parentNode;

    if ((et.tagName === "TD")) { // якщо був клікнутий td тег, то знаходимо його координати і передаємо іх в model
      let verticalPositionOfTDTag = 0,
          horizontalPositionOfTDTag = 0,
          biggerNumber;

      if (numberRows > numberColumns) {
        biggerNumber = numberRows;
      } else { biggerNumber = numberColumns; }

      for (let i = 0; i < biggerNumber; i++) {
        if (et.nextSibling.tagName === "TD") {
          horizontalPositionOfTDTag++;
          et = et.nextSibling;
        };

        if ((et2.nextSibling.nextSibling) && (et2.nextSibling.nextSibling.tagName === "TR")) {
          verticalPositionOfTDTag++;
          et2 = et2.nextSibling.nextSibling;
        };
      };
      calculationBubblesToRemove((numberColumns - horizontalPositionOfTDTag - 1), (numberRows - verticalPositionOfTDTag - 1), biggerNumber);
    };
  });

};
