import { coordinatesOfBubblesForRemovingX } from '../controller/collect-data-for-bubbles-removing.js';
import { drawScore } from '../view/draw-score.js';
import { saveBestResult } from '../controller/best-result-handling.js';

export let totalScore = 0;

export const totalScoreHandling = (value) => {
  totalScore += Math.round(10 * (coordinatesOfBubblesForRemovingX.length * coordinatesOfBubblesForRemovingX.length));

  if (value === 0) { //якщо totalScoreHandling визвана із 0 обнуляєм totalScore
    totalScore = 0;
  } else if (value && (value > 0)) { //якщо totalScoreHandling визвана із не нульовим значенням оновлюємо totalScore
    totalScore = value;
  };
  saveBestResult(totalScore);
  drawScore(totalScore);
};
