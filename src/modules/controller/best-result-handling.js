import { drawBestResult } from '../view/draw-best-result.js';
import { savingRecord } from '../model/total-score-handling.js';

export const saveBestResult = (totalScore) => {
  if (getBestResult() < totalScore) {
    savingRecord(totalScore);
    drawBestResult(totalScore);
  };
};

export const getBestResult = () => {
  return localStorage.getItem('record');
};
