<<<<<<< HEAD
import './css/style.css';
import { undo } from './modules/Undo.js';
import { createColorsOfBubbles, createCoordinatesForBubbles, newGame} from './modules/New_game.js';
import { calculateFromLeft, calculateFromRight, calculateFromTop, calculateFromBottom } from './modules/Calculations_for_further_bubbles_removing.js';
import { saveRecord, getRecord } from './modules/Save_record.js';
import { createHtmlStructure } from './modules/Create_html_structure.js';
import { moveFieldDown, moveFieldSideways } from './modules/Move_field.js';
import { numberOfBubblesInRow, numberOfBubblesInColumn} from './modules/User_sizes_of_game_field.js';

createHtmlStructure(); // створюємо загальну структуру в HTML файлі (теги, id і інше)
=======
import { undo } from './Modules/Undo.js';
import { clearTheFieldForNewGame, createColorsOfBubbles } from './Modules/New game.js';
import { calculateFromLeft, calculateFromRight, calculateFromTop, calculateFromBottom } from './Modules/Remove bubbles.js';
import { saveRecord, getRecord } from './Modules/Save record.js';
>>>>>>> parent of f1c9904... +webpack


const allBubbles = document.getElementsByTagName('td'), // зберігаємо всі бульбашки до змінної (168)
      arrayOfColors = ["yellow", "red", "purple", "green", "blue"], // всі можливі кольори для бульбашок
      arrayOfCoordinates = document.getElementsByTagName('tr'); // зберігаємо в конст всі рядки з бульбашками (14)

let totalScore = 0,
    scoreForUndo = 0,
    elementTarget,
    clickedBubbleElement,
    arrayOfBubblesToHandle,
    handledElementsOfArray,
    arrayOfBubblesColors = [],
    arrayOfBubblesForUndo;

getRecord(); //беремо накращий результат збережений в браузері для відображення ігроку

function removeClickedBubbles (elementTarget) { //видаляємо бульбашки після кліку і їх обробки в findAllBubblesToRemove()

  let classToRemove = elementTarget.classList[1];
  totalScore += Math.round(50 * (0.2 * arrayOfBubblesToHandle.length));
  getRecord();
  saveRecord(totalScore);
  for (let i = 0; i < arrayOfBubblesToHandle.length; i++){
    arrayOfBubblesToHandle[i].classList.remove(classToRemove)
  };

  document.getElementById('score').innerHTML = totalScore;
  let wrapperFunctionForWork_moveFieldDown_InSetTimeout = () => {
    moveFieldDown(numberOfBubblesInColumn, numberOfBubblesInRow, arrayOfCoordinates);
  };
  setTimeout(wrapperFunctionForWork_moveFieldDown_InSetTimeout, 500);

  let wrapperFunctionForWork_moveFieldSideways_InSetTimeout = () => {
    moveFieldSideways(numberOfBubblesInRow, numberOfBubblesInColumn, arrayOfCoordinates);
  };
  setTimeout(wrapperFunctionForWork_moveFieldSideways_InSetTimeout, 500);

};

function findAllBubblesToRemove (elementTarget) {//розраховуємо кількість бульбашок які потрібно видалити
  clickedBubbleElement = elementTarget;
  let checkerIfABubbleMustBeAddedToAnArray = true;
  handledElementsOfArray += 1;

  calculateFromLeft(clickedBubbleElement, elementTarget, arrayOfBubblesToHandle, numberOfBubblesInRow, checkerIfABubbleMustBeAddedToAnArray);
  calculateFromRight(clickedBubbleElement, elementTarget, arrayOfBubblesToHandle, numberOfBubblesInRow, checkerIfABubbleMustBeAddedToAnArray);
  calculateFromTop(clickedBubbleElement, elementTarget, arrayOfBubblesToHandle, numberOfBubblesInColumn, checkerIfABubbleMustBeAddedToAnArray);
  calculateFromBottom(clickedBubbleElement, elementTarget, arrayOfBubblesToHandle, numberOfBubblesInColumn, checkerIfABubbleMustBeAddedToAnArray);

    if (handledElementsOfArray < arrayOfBubblesToHandle.length) {
        findAllBubblesToRemove(arrayOfBubblesToHandle[handledElementsOfArray]);
    };

  removeClickedBubbles(elementTarget, totalScore, arrayOfBubblesToHandle, numberOfBubblesInColumn, numberOfBubblesInRow, arrayOfCoordinates);

};

createCoordinatesForBubbles(arrayOfCoordinates, numberOfBubblesInRow);
createColorsOfBubbles(allBubbles, arrayOfColors);



document.addEventListener('click', element => { // опрацьовуємо кліки по ігровому полю
  elementTarget = element.target;
    if (elementTarget.id === 'new game') {// при використанні кнопки new game починаємо нову ігру
      totalScore = 0;
      scoreForUndo = 0;
      newGame(arrayOfCoordinates, numberOfBubblesInRow, allBubbles, arrayOfColors, arrayOfBubblesColors);
    };

    if (elementTarget.id === 'undo' && totalScore > 0) {// при використанні кнопки undo відміняємо останній хід
      undo(numberOfBubblesInColumn, numberOfBubblesInRow, arrayOfCoordinates, arrayOfBubblesForUndo, scoreForUndo);
      totalScore = scoreForUndo;
    };

    if (elementTarget.parentNode.parentNode.parentNode.id === 'play field' && elementTarget.classList[1]) {
      if ((elementTarget.nextSibling.classList && elementTarget.classList[1] === elementTarget.nextSibling.classList[1]) ||
      (elementTarget.previousSibling.classList && elementTarget.classList[1] === elementTarget.previousSibling.classList[1]) ||
      (!elementTarget.parentNode.classList.contains('1') && elementTarget.classList[1] === elementTarget.parentNode.previousSibling.previousSibling.children[elementTarget.classList[0] - 1].classList[1]) ||
      (!elementTarget.parentNode.classList.contains(numberOfBubblesInColumn.toString()) && elementTarget.classList[1] === elementTarget.parentNode.nextSibling.nextSibling.children[elementTarget.classList[0] - 1].classList[1])
      ) {
          arrayOfBubblesForUndo = [];
          scoreForUndo = totalScore;
          document.getElementById('undo').style.color = "white";
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
          arrayOfBubblesToHandle.push(elementTarget);
          findAllBubblesToRemove(elementTarget, clickedBubbleElement, handledElementsOfArray, arrayOfBubblesToHandle, numberOfBubblesInRow, numberOfBubblesInColumn, totalScore);
      };
   };
});
