// const { test } = require('./test');
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

function undo() {
  for (let i = 0; i < numberOfBubblesInColumn; i++) { // видаляємо поточні класи з кольорами
    for (let j = 0; j < numberOfBubblesInRow; j++) {
      arrayOfCoordinates[i].children[j].classList.remove(arrayOfCoordinates[i].children[j].classList[1]);
    };
  };

  for (let i = 0; i < numberOfBubblesInColumn; i++) { // повертаємо збережені класи з кольорами
    for (let j = 0; j < numberOfBubblesInRow; j++) {
      if (arrayOfBubblesForUndo[i][j]) {
        arrayOfCoordinates[i].children[j].classList.add(arrayOfBubblesForUndo[i][j]);
      };
    };
  };
  // console.log(scoreForUndo);
  document.getElementById('score').innerHTML = scoreForUndo;
};

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

function clearTheFieldForNewGame(arrayOfCoordinates) {
      for (let i = 0; i < arrayOfCoordinates.length; i++) {
        arrayOfCoordinates[i].className = ''; // видаляємо старі класи
        for (let j = 0; j < numberOfBubblesInRow; j++) {
          arrayOfCoordinates[i].children[j].className = '';
        }
      }
};

function createCoordinatesForBubbles(arrayOfCoordinates) {
  for (let i = 0; i < arrayOfCoordinates.length; i++) {
    arrayOfCoordinates[i].classList.add(`${i+1}`) // призначаємо номерні класи для всіх рядків
    for (let j = 0; j < numberOfBubblesInRow; j++) {
      arrayOfCoordinates[i].children[j].classList.add(`${j+1}`)
    }
  }

};

function createColorsOfBubbles(allBubbles) { // розмальовуємо бульбашки
  for (let i = 0; i < allBubbles.length; i++) {
    allBubbles[i].classList.add(arrayOfColors[Math.floor(Math.random()*5)])
  }
};

function newGame() {
  totalScore = 0;
  document.getElementById('score').innerHTML = 0;
  clearTheFieldForNewGame(arrayOfCoordinates);
  createCoordinatesForBubbles(arrayOfCoordinates);
  createColorsOfBubbles(allBubbles);
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

  for (let i = 0; i < numberOfBubblesInRow; i++){ // розраховуємо кількість бульбашок тогож кольору зліва
    if (currentElement.previousSibling.classList && currentElement.classList[1] === currentElement.previousSibling.classList[1]) {
      for (let i = 0; i < arrayOfBubblesToHandle.length; i++) {
        if (arrayOfBubblesToHandle[i] === currentElement.previousSibling)
          checker = false;
      };

      if (checker) {
        arrayOfBubblesToHandle.push(currentElement.previousSibling);
        currentElement = currentElement.previousSibling;
      };
      checker = true;
    };
  };
  currentElement = e;

  for (let i = 0; i < numberOfBubblesInRow; i++){ // розраховуємо кількість бульбашок тогож кольору справа
    if (currentElement.nextSibling.classList && currentElement.classList[1] === currentElement.nextSibling.classList[1]) {
      for (let i = 0; i < arrayOfBubblesToHandle.length; i++) {
        if (arrayOfBubblesToHandle[i] === currentElement.nextSibling)
          checker = false;
      };

      if (checker) {
        arrayOfBubblesToHandle.push(currentElement.nextSibling);
        currentElement = currentElement.nextSibling;
      };
      checker = true;
    };
  };
  currentElement = e;

  for (let i = 0; i < numberOfBubblesInColumn; i++){ // розраховуємо кількість бульбашок того ж кольору зверху
    if (currentElement.parentNode.classList && !currentElement.parentNode.classList.contains('1') && currentElement.classList[1] === currentElement.parentNode.previousSibling.previousSibling.children[currentElement.classList[0] - 1].classList[1]) {
      for (let i = 0; i < arrayOfBubblesToHandle.length; i++) {
        if (arrayOfBubblesToHandle[i] === currentElement.parentNode.previousSibling.previousSibling.children[currentElement.classList[0] - 1])
          checker = false;
      };

      if (checker) {
        arrayOfBubblesToHandle.push(currentElement.parentNode.previousSibling.previousSibling.children[currentElement.classList[0] - 1]);
        currentElement = currentElement.parentNode.previousSibling.previousSibling.children[currentElement.classList[0] - 1];
      };
      checker = true;
    };
  };
  currentElement = e;

  for (let i = 0; i < numberOfBubblesInColumn; i++){ // розраховуємо кількість бульбашок того ж кольору знизу
    if (!currentElement.parentNode.classList.contains('14') && currentElement.classList[1] === currentElement.parentNode.nextSibling.nextSibling.children[currentElement.classList[0] - 1].classList[1]) {
      for (let i = 0; i < arrayOfBubblesToHandle.length; i++) {
        if (arrayOfBubblesToHandle[i] === currentElement.parentNode.nextSibling.nextSibling.children[currentElement.classList[0] - 1])
          checker = false;
      };

      if (checker) {
        arrayOfBubblesToHandle.push(currentElement.parentNode.nextSibling.nextSibling.children[currentElement.classList[0] - 1]);
        currentElement = currentElement.parentNode.nextSibling.nextSibling.children[currentElement.classList[0] - 1];
      };
      checker = true;
    };
  };

    if (handledElementsOfArray < arrayOfBubblesToHandle.length) {
        findAllBubblesToRemove(arrayOfBubblesToHandle[handledElementsOfArray]);
    };

  removeClickedBubbles(e);

};

createCoordinatesForBubbles(arrayOfCoordinates);
createColorsOfBubbles(allBubbles);

document.addEventListener('click', element => { // опрацьовуємо кліки по бульбашкам
  e = element.target;

    if (e.id === 'new game') // при використанні кнопки new game починаємо нову ігру
      newGame();

    if (e.id === 'undo') // при використанні кнопки new game починаємо нову ігру
      undo();

    if (e.parentNode.parentNode.parentNode.id === 'play field' && e.classList[1]) {
      arrayOfBubblesForUndo = [];
      if ((e.nextSibling.classList && e.classList[1] === e.nextSibling.classList[1]) ||
      (e.previousSibling.classList && e.classList[1] === e.previousSibling.classList[1]) ||
      (!e.parentNode.classList.contains('1') && e.classList[1] === e.parentNode.previousSibling.previousSibling.children[e.classList[0] - 1].classList[1]) ||
      (!e.parentNode.classList.contains('14') && e.classList[1] === e.parentNode.nextSibling.nextSibling.children[e.classList[0] - 1].classList[1])
      ) {
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
          findAllBubblesToRemove(e);
      };
   };
});
