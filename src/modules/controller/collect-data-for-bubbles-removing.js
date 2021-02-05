import { playFieldDataArray } from '../model/start.js';
import { numberColumns, numberRows} from '../model/user-sizes-of-game-field.js';
import { arrayOfColors } from '../view/draw-game-field.js';
import { bubbleRemover } from './bubble-removing.js';
import { saveDataForUndo } from './undo.js';

export { coordinatesOfBubblesForRemovingX };

let coordinatesOfBubblesForRemovingX = [],
    coordinatesOfBubblesForRemovingY = [],
    checker;

function creationArrayOfBubblesToRemove(hP, vP) {
  let checkerIfTheCurrentBubbleAlreadyInArrayToRemove = false;
  for (let i = 0; i < coordinatesOfBubblesForRemovingX.length; i++) {
    if ((coordinatesOfBubblesForRemovingX[i] === hP) && (coordinatesOfBubblesForRemovingY[i] === vP))
      checkerIfTheCurrentBubbleAlreadyInArrayToRemove = true;
  };

  if (!checkerIfTheCurrentBubbleAlreadyInArrayToRemove) {
    coordinatesOfBubblesForRemovingX.push(hP);
    coordinatesOfBubblesForRemovingY.push(vP);
  };
};

function calculateIfThereAreMoreBubblesToRemove(hP, vP, biggerNumber) { //перевіряємо чи є бульбашки поблизу (з 4рьох боків) для видалення

  checker = coordinatesOfBubblesForRemovingX.length;
    if ((hP+1 < numberColumns) && (playFieldDataArray[vP][hP] === playFieldDataArray[vP][hP+1])) {
      creationArrayOfBubblesToRemove(hP+1, vP);
    };

    if ((hP-1 >= 0) && (playFieldDataArray[vP][hP] === playFieldDataArray[vP][hP-1])) {
      creationArrayOfBubblesToRemove(hP-1, vP);
    };

    if ((vP-1 >= 0) && (playFieldDataArray[vP][hP] === playFieldDataArray[vP-1][hP])) {
      creationArrayOfBubblesToRemove(hP, vP-1);
    };

    if ((vP+1 < numberRows) && (playFieldDataArray[vP][hP] === playFieldDataArray[vP+1][hP])) {
      creationArrayOfBubblesToRemove(hP, vP+1);
    };

    if (checker < coordinatesOfBubblesForRemovingX.length) {
        for (let i = 1; i < coordinatesOfBubblesForRemovingX.length; i++)
         calculateIfThereAreMoreBubblesToRemove(coordinatesOfBubblesForRemovingX[i], coordinatesOfBubblesForRemovingY[i]);
    };
};

export const calculationBubblesToRemove = (horizontalPositionOfTDTag, verticalPositionOfTDTag, biggerNumber) => {
  let hP = horizontalPositionOfTDTag,
      vP = verticalPositionOfTDTag;

  coordinatesOfBubblesForRemovingX = [];
  coordinatesOfBubblesForRemovingY = [];

  if (playFieldDataArray[vP][hP] !== 0) { // якщо клікнута пуста бульбашка то не обробляєм клік далі
    //перевіряємо чи є хоча б 2 бульбашки одного кольору для видалення
    if (((hP+1 < numberColumns) && (playFieldDataArray[vP][hP] === playFieldDataArray[vP][hP+1])) ||
    ((hP-1 >= 0) && (playFieldDataArray[vP][hP] === playFieldDataArray[vP][hP-1])) ||
    ((vP-1 >= 0) && (playFieldDataArray[vP][hP] === playFieldDataArray[vP-1][hP])) ||
    ((vP+1 < numberRows) && (playFieldDataArray[vP][hP] === playFieldDataArray[vP+1][hP]))) {
      coordinatesOfBubblesForRemovingX.push(hP);
      coordinatesOfBubblesForRemovingY.push(vP);

      saveDataForUndo();
      calculateIfThereAreMoreBubblesToRemove(hP, vP, biggerNumber);
      bubbleRemover(coordinatesOfBubblesForRemovingX, coordinatesOfBubblesForRemovingY, playFieldDataArray);
    };
  };
};
