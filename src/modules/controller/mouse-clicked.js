import { createNewBubbles } from '../model/index.js';
import { calculationBubblesToRemove } from '../model/collect-data-for-bubbles-removing.js';
import { numberOfBubblesInColumn, numberOfBubblesInRow } from '../model/user-sizes-of-game-field.js';
import { totalScoreHandling } from '../model/total-score-handling.js';
import { undo } from '../model/index.js';
import { changeColorOfDomElement } from '../view/change-color-of-undo-button.js';
import { getBestResult } from '../model/best-result-handling.js';
import { drawBestResult } from '../view/draw-best-result.js';

export function eventListener () {

document.getElementById('new game').addEventListener('click', () => {// при використанні кнопки new game починаємо нову ігру
    createNewBubbles();
    totalScoreHandling(0);
    changeColorOfDomElement("gray");
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

    if (numberOfBubblesInColumn > numberOfBubblesInRow) {
      biggerNumber = numberOfBubblesInColumn;
    } else { biggerNumber = numberOfBubblesInRow; }

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
    calculationBubblesToRemove((numberOfBubblesInRow - horizontalPositionOfTDTag - 1), (numberOfBubblesInColumn - verticalPositionOfTDTag - 1), biggerNumber);
  };
});

};
