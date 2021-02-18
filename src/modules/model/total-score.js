let totalScore = 0;

export const savingTotalScore = value => totalScore = value,
             gettingTotalScore = () => totalScore,
             savingRecord = value => localStorage.setItem('record', value),
             getBestResult = () => localStorage.getItem('record');
