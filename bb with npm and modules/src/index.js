import { undo } from './Modules/Undo.js';
import { clearTheFieldForNewGame, createColorsOfBubbles } from './Modules/New game.js';
import { calculateFromLeft, calculateFromRight, calculateFromTop, calculateFromBottom } from './Modules/Remove bubbles.js';

const allBubbles = document.getElementsByTagName('td'), // зберігаємо всі бульбашки до змінної (168)
      arrayOfColors = ["yellow", "red", "purple", "green", "blue"], // всі можливі кольори для бульбашок
      arrayOfCoordinates = document.getElementsByTagName('tr'), // зберігаємо в конст всі рядки з бульбашками (14)
      numberOfBubblesInRow = 12,
      numberOfBubblesInColumn = 14;

let totalScore = 0,
    scoreForUndo = 0,
    e,
    currentElement,
    arrayOfBubblesToHandle,
    handledElementsOfArray,
    arrayOfBubblesColors = [],
    arrayOfBubblesForUndo;

function moveFieldDown() { // рухаємо бульбашки вниз після видалення щоб заповнити порожнечі
    for (let i = numberOfBubblesInColumn -1; i > 0; i--) {
      for (let j = numberOfBubblesInRow -1; j > -1; j--) {
        if (!arrayOfCoordinates[i].children[j].classList[1] && arrayOfCoordinates[i-1].children[j].classList[1]) {
          arrayOfCoordinates[i].children[j].classList.add(arrayOfCoordinates[i-1].children[j].classList[1]);
          arrayOfCoordinates[i-1].children[j].classList.remove(arrayOfCoordinates[i-1].children[j].classList[1]);
        };
      };
    };
};

function moveFieldSideways() { // рухаємо бульбашки вбік після руху їх вниз
  let counter = 0;
    for (let i = numberOfBubblesInRow -1; i > 0; i--) {
      for (let j = numberOfBubblesInColumn -1; j > -1; j--) {
        if (!arrayOfCoordinates[j].children[i].classList[1]) {
          counter++;
        };
      };
      if (counter === 14) {
         for (let y = i; y < numberOfBubblesInRow -1; y++) {
           for (let x = 0; x < numberOfBubblesInColumn; x++) {
            if (!arrayOfCoordinates[x].children[y].classList[1] && arrayOfCoordinates[x].children[y+1].classList[1]) {
              arrayOfCoordinates[x].children[y].classList.add(arrayOfCoordinates[x].children[y+1].classList[1]);
              arrayOfCoordinates[x].children[y+1].classList.remove(arrayOfCoordinates[x].children[y+1].classList[1]);
            };
          };
        };
      };
      counter = 0;
   };
};

function createCoordinatesForBubbles(arrayOfCoordinates) {
  for (let i = 0; i < arrayOfCoordinates.length; i++) {
    arrayOfCoordinates[i].classList.add(`${i+1}`) // призначаємо номерні класи для всіх рядків
    for (let j = 0; j < numberOfBubblesInRow; j++) {
      arrayOfCoordinates[i].children[j].classList.add(`${j+1}`)
    };
  };
};

function newGame() {
  totalScore = 0;
  document.getElementById('score').innerHTML = 0;
  clearTheFieldForNewGame(arrayOfCoordinates, numberOfBubblesInRow);
  createCoordinatesForBubbles(arrayOfCoordinates);
  createColorsOfBubbles(allBubbles, arrayOfColors);
  arrayOfBubblesColors = [];
};

function removeClickedBubbles(e) { //видаляємо бульбашки після кліку і їх обробки в findAllBubblesToRemove()
  let classToRemove = e.classList[1];
  totalScore += Math.round(50 * (0.2 * arrayOfBubblesToHandle.length));
  for (let i = 0; i < arrayOfBubblesToHandle.length; i++){
    arrayOfBubblesToHandle[i].classList.remove(classToRemove)
  };

  document.getElementById('score').innerHTML = totalScore;
  setTimeout(moveFieldDown, 500);
  setTimeout(moveFieldSideways, 500);

};

function findAllBubblesToRemove(e) {//розраховуємо кількість бульбашок які потрібно видалити
  currentElement = e;
  let checker = true;
  handledElementsOfArray += 1;

  calculateFromLeft(currentElement, e, arrayOfBubblesToHandle, numberOfBubblesInRow, checker);
  calculateFromRight(currentElement, e, arrayOfBubblesToHandle, numberOfBubblesInRow, checker);
  calculateFromTop(currentElement, e, arrayOfBubblesToHandle, numberOfBubblesInColumn, checker);
  calculateFromBottom(currentElement, e, arrayOfBubblesToHandle, numberOfBubblesInColumn, checker);

    if (handledElementsOfArray < arrayOfBubblesToHandle.length) {
        findAllBubblesToRemove(arrayOfBubblesToHandle[handledElementsOfArray]);
    };

  removeClickedBubbles(e);

};

createCoordinatesForBubbles(arrayOfCoordinates, numberOfBubblesInRow);
createColorsOfBubbles(allBubbles, arrayOfColors);

document.addEventListener('click', element => { // опрацьовуємо кліки по бульбашкам
  e = element.target;

    if (e.id === 'new game') // при використанні кнопки new game починаємо нову ігру
      newGame();

    if (e.id === 'undo') // при використанні кнопки undo відміняємо останній хід
      undo(numberOfBubblesInColumn, numberOfBubblesInRow, arrayOfCoordinates, scoreForUndo, arrayOfBubblesForUndo);

    if (e.parentNode.parentNode.parentNode.id === 'play field' && e.classList[1]) {
      if ((e.nextSibling.classList && e.classList[1] === e.nextSibling.classList[1]) ||
      (e.previousSibling.classList && e.classList[1] === e.previousSibling.classList[1]) ||
      (!e.parentNode.classList.contains('1') && e.classList[1] === e.parentNode.previousSibling.previousSibling.children[e.classList[0] - 1].classList[1]) ||
      (!e.parentNode.classList.contains('14') && e.classList[1] === e.parentNode.nextSibling.nextSibling.children[e.classList[0] - 1].classList[1])
      ) {
          arrayOfBubblesForUndo = [];
          scoreForUndo = totalScore;
          for (let i = 0; i < numberOfBubblesInColumn; i++) { // зберігаємо інфу для undo кнопки
            let temporaryArray = [];
            for (let j = 0; j < numberOfBubblesInRow; j++) {
              if (arrayOfCoordinates[i].children[j].classList[1]);
                temporaryArray[j] = arrayOfCoordinates[i].children[j].classList[1];
            };
            arrayOfBubblesForUndo.push(temporaryArray);
          };

          handledElementsOfArray = 0;
          arrayOfBubblesToHandle = [];
          arrayOfBubblesToHandle.push(e);
          findAllBubblesToRemove(e, currentElement, numberOfBubblesInRow, numberOfBubblesInColumn, handledElementsOfArray, arrayOfBubblesToHandle);
      };
   };
});
