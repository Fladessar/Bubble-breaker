import { drawCurrentBubblesPlacement } from '../view/draw-game-field.js';
import { movePlayFieldDown } from './move-play-field-after-bubble-removing.js';
import { totalScoreHandling } from '../model/total-score-handling.js';

export const bubbleRemover = (coordinatesOfBubblesForRemovingX, coordinatesOfBubblesForRemovingY, playFieldDataArray) => {
  for (let i = 0; i < coordinatesOfBubblesForRemovingX.length; i++) {
    playFieldDataArray[coordinatesOfBubblesForRemovingY[i]][coordinatesOfBubblesForRemovingX[i]] = 0;
  };
  drawCurrentBubblesPlacement();
  movePlayFieldDown();
  totalScoreHandling();
  setTimeout(drawCurrentBubblesPlacement, 200);
};
