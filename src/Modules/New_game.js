import { getRecord } from './Save_record.js';

export let clearTheFieldForNewGame = (arrayOfCoordinates, numberOfBubblesInRow) => {
      for (let i = 0; i < arrayOfCoordinates.length; i++) {
        arrayOfCoordinates[i].className = ''; // видаляємо старі класи
        for (let j = 0; j < numberOfBubblesInRow; j++) {
          arrayOfCoordinates[i].children[j].className = '';
        }
      }
};

export let createColorsOfBubbles = (allBubbles, arrayOfColors) => { // розмальовуємо бульбашки
  for (let i = 0; i < allBubbles.length; i++) {
    allBubbles[i].classList.add(arrayOfColors[Math.floor(Math.random()*5)])
  };
};

export let createCoordinatesForBubbles = (arrayOfCoordinates, numberOfBubblesInRow) => {
  for (let i = 0; i < arrayOfCoordinates.length; i++) {
    arrayOfCoordinates[i].classList.add(`${i+1}`) // призначаємо номерні класи для всіх рядків
    for (let j = 0; j < numberOfBubblesInRow; j++) {
      arrayOfCoordinates[i].children[j].classList.add(`${j+1}`)
    };
  };
};

export let newGame = (arrayOfCoordinates, numberOfBubblesInRow, allBubbles, arrayOfColors, arrayOfBubblesColors) => {
  getRecord();
  document.getElementById('score').innerHTML = 0;
  document.getElementById('undo').style.color = "grey";
  clearTheFieldForNewGame(arrayOfCoordinates, numberOfBubblesInRow);
  createCoordinatesForBubbles(arrayOfCoordinates, numberOfBubblesInRow);
  createColorsOfBubbles(allBubbles, arrayOfColors);
  arrayOfBubblesColors = [];
};
