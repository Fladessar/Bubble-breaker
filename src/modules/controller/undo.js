import { playFieldDataArray, undo } from '../model/start.js';
import { drawCurrentBubblesPlacement } from '../view/draw-game-field.js';
import { numberColumns, numberRows} from '../model/user-sizes-of-game-field.js';
import { setUndoButtonEnabled } from '../view/change-color-of-undo-button.js';
import { totalScore } from '../model/total-score-handling.js';

export let playFieldDataArrayForUndo, previousScore;

export const saveDataForUndo = () => {
  playFieldDataArrayForUndo = [];
  for (let i = 0; i < numberRows; i++) {
    playFieldDataArrayForUndo[i] = [];
    for (let j = 0; j < numberColumns; j++) {
      playFieldDataArrayForUndo[i].push(playFieldDataArray[i][j]);
    };
  };
  previousScore = totalScore;
  setUndoButtonEnabled("white");
};
