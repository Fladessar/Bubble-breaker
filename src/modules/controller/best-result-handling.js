import { drawBestResult } from '../view/draw-best-result.js';
import { savingRecord } from './total-score-handling.js';
import { getBestResult } from '../model/total-score.js';

export const saveBestResult = (totalScore) => {
  if (getBestResult() < totalScore) {
    savingRecord(totalScore);
    drawBestResult(totalScore);
  };
};
