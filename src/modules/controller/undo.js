import { getFieldDataArray } from '../model/data-array.js';
import { numberColumns, numberRows} from '../model/user-sizes-of-game-field.js';
import { setUndoButtonEnabled } from '../view/change-color-of-undo-button.js';
import { gettingTotalScore} from '../model/total-score.js';

export let playFieldDataArrayForUndo, previousScore;

export const saveDataForUndo = () => {
  playFieldDataArrayForUndo = [];
  for (let i = 0; i < numberRows; i++) {
    playFieldDataArrayForUndo[i] = [];
    for (let j = 0; j < numberColumns; j++) {
      playFieldDataArrayForUndo[i].push(getFieldDataArray()[i][j]);
    };
  };
  previousScore = gettingTotalScore();
  setUndoButtonEnabled(true);
};
