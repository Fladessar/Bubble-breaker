import { drawBestResult } from '../view/draw-best-result.js';

export let saveBestResult = (totalScore) => {
  if (getBestResult() < totalScore) {
    localStorage.setItem('record', totalScore);
    drawBestResult(totalScore);
  };
};

export let getBestResult = () => {
  return localStorage.getItem('record');
};
