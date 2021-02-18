import { coordinatesOfBubblesForRemovingX } from '../controller/collect-data-for-bubbles-removing.js';
import { drawScore } from '../view/draw-score.js';
import { saveBestResult } from '../controller/best-result-handling.js';
import { savingTotalScore, gettingTotalScore} from '../model/total-score.js';

export const handlingTotalScore = (value) => {
  let temporaryScore = gettingTotalScore() + Math.round(10 * (coordinatesOfBubblesForRemovingX.length * coordinatesOfBubblesForRemovingX.length));

  if (value === 0) { //якщо handlingTotalScore визвана із 0 обнуляєм totalScore
    temporaryScore = 0;
  } else if (value && (value > 0)) { //якщо handlingTotalScore визвана із не нульовим значенням оновлюємо totalScore
    temporaryScore = value;
  };
  savingTotalScore(temporaryScore);
  saveBestResult(temporaryScore);
  drawScore(temporaryScore);
};

export const savingRecord = (temporaryScore) => {
  localStorage.setItem('record', temporaryScore);
};
