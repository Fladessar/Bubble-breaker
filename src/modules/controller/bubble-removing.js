import { drawCurrentBubblesPlacement } from '../view/draw-game-field.js';
import { movePlayFieldDown } from './move-play-field-after-bubble-removing.js';
import { totalScoreHandling } from '../model/total-score-handling.js';
import { allBubblesRows, playFieldDataArray } from '../model/start.js';

export const bubbleRemover = (coordinatesOfBubblesForRemovingX, coordinatesOfBubblesForRemovingY, playFieldDataArray) => {
  for (let i = 0; i < coordinatesOfBubblesForRemovingX.length; i++) {
    playFieldDataArray[coordinatesOfBubblesForRemovingY[i]][coordinatesOfBubblesForRemovingX[i]] = 0;
  };

  let wrapperFordrawCurrentBubblesPlacement = () => {
    drawCurrentBubblesPlacement(allBubblesRows, playFieldDataArray);
  };

  drawCurrentBubblesPlacement(allBubblesRows, playFieldDataArray);
  movePlayFieldDown();
  totalScoreHandling();
  setTimeout(wrapperFordrawCurrentBubblesPlacement, 200);
};
