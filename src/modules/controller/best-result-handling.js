import { drawBestResult } from '../view/draw-best-result.js';

export const saveBestResult = (totalScore) => {
  if (getBestResult() < totalScore) {
    localStorage.setItem('record', totalScore);
    drawBestResult(totalScore);
  };
};

export const getBestResult = () => {
  return localStorage.getItem('record');
};
