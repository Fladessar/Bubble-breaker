import { drawCurrentBubblesPlacement } from '../view/draw-game-field.js';
import { movePlayFieldDown } from './move-play-field-after-bubble-removing.js';
import { handlingTotalScore } from '../model/total-score-handling.js';
import { playFieldDataArray } from '../model/data-array-handling.js';
import { allBubblesRows } from '../view/create-html-structure.js';

export const bubbleRemover = (coordinatesOfBubblesForRemovingX, coordinatesOfBubblesForRemovingY, playFieldDataArray) => {
  for (let i = 0; i < coordinatesOfBubblesForRemovingX.length; i++) {
    playFieldDataArray[coordinatesOfBubblesForRemovingY[i]][coordinatesOfBubblesForRemovingX[i]] = 0;
  };

  let wrapperFordrawCurrentBubblesPlacement = () => {
    drawCurrentBubblesPlacement(allBubblesRows, playFieldDataArray);
  };

  drawCurrentBubblesPlacement(allBubblesRows, playFieldDataArray);
  movePlayFieldDown();
  handlingTotalScore();
  setTimeout(wrapperFordrawCurrentBubblesPlacement, 200);
};
