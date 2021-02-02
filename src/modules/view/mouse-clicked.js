import { createNewBubbles, undo } from '../model/start.js';
import { calculationBubblesToRemove } from '../controller/collect-data-for-bubbles-removing.js';
import { numberOfBubblesInColumn, numberOfBubblesInRow } from '../model/user-sizes-of-game-field.js';
import { totalScoreHandling } from '../model/total-score-handling.js';
import { setUndoButtonEnabled } from './change-color-of-undo-button.js';
import { getBestResult } from '../controller/best-result-handling.js';
import { drawBestResult } from './draw-best-result.js';


export function eventListener () {

// score_box.onmousedown = (e) => {//
//   let scoreBox = document.getElementById("score_box");
//   scoreBox.style.position = "absolute";
//   scoreBox.style.zIndex = 1000;
//   scoreBox.style.left = "100px";
//   scoreBox.style.bottom = "200px";
//   // console.log(scoreBox);
//   console.log(scoreBox.style.left);
//   document.onmousemove = (e) => {
//     scoreBox.style.left = e.clientX + "px";
//     scoreBox.style.bottom = e.clientY + "px";
//     console.log(e.clientX, e.clientY);
//   };
// };
//
// score_box.onmouseup = (e) => {//
//   scoreBox.style.position = "fized";
//   scoreBox.style.zIndex = 0;
// };

  // document.getElementById('score box').addEventListener('click', () => {//
  //   let scoreBox = document.getElementById("score box");
  //   scoreBox.style.position = "absolute";
  //   scoreBox.style.zIndex = 1000;
  //   scoreBox.style.left = "100px";
  //   scoreBox.style.bottom = "200px";
  //   // console.log(scoreBox);
  //   console.log(scoreBox.style.left);
  //   });

document.getElementById('new game').addEventListener('click', () => {// при використанні кнопки new game починаємо нову ігру
    createNewBubbles();
    totalScoreHandling(0);
    setUndoButtonEnabled("gray");
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
