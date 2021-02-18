import { getFieldDataArray } from '../model/data-array.js';
import { numberColumns, numberRows} from '../model/user-sizes-of-game-field.js';
import { bubbleRemover } from './bubble-removing.js';
import { saveDataForUndo } from './undo.js';

export { coordinatesOfBubblesForRemovingX };

let coordinatesOfBubblesForRemovingX = [],
    coordinatesOfBubblesForRemovingY = [],
    checkerCoordinatesOfBubblesForRemovingX;

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

  checkerCoordinatesOfBubblesForRemovingX = coordinatesOfBubblesForRemovingX.length;
    if ((hP+1 < numberColumns) && (getFieldDataArray()[vP][hP] === getFieldDataArray()[vP][hP+1])) {
      creationArrayOfBubblesToRemove(hP+1, vP);
    };

    if ((hP-1 >= 0) && (getFieldDataArray()[vP][hP] === getFieldDataArray()[vP][hP-1])) {
      creationArrayOfBubblesToRemove(hP-1, vP);
    };

    if ((vP-1 >= 0) && (getFieldDataArray()[vP][hP] === getFieldDataArray()[vP-1][hP])) {
      creationArrayOfBubblesToRemove(hP, vP-1);
    };

    if ((vP+1 < numberRows) && (getFieldDataArray()[vP][hP] === getFieldDataArray()[vP+1][hP])) {
      creationArrayOfBubblesToRemove(hP, vP+1);
    };

    if (checkerCoordinatesOfBubblesForRemovingX < coordinatesOfBubblesForRemovingX.length) {
        for (let i = 1; i < coordinatesOfBubblesForRemovingX.length; i++)
         calculateIfThereAreMoreBubblesToRemove(coordinatesOfBubblesForRemovingX[i], coordinatesOfBubblesForRemovingY[i]);
    };
};

export const calculationBubblesToRemove = (horizontalPositionOfTDTag, verticalPositionOfTDTag, biggerNumber) => {
  let hP = horizontalPositionOfTDTag,
      vP = verticalPositionOfTDTag;

  coordinatesOfBubblesForRemovingX = [];
  coordinatesOfBubblesForRemovingY = [];
  if (getFieldDataArray()[vP][hP] !== 0) { // якщо клікнута пуста бульбашка то не обробляєм клік далі
    //перевіряємо чи є хоча б 2 бульбашки одного кольору для видалення
    if (((hP+1 < numberColumns) && (getFieldDataArray()[vP][hP] === getFieldDataArray()[vP][hP+1])) ||
    ((hP-1 >= 0) && (getFieldDataArray()[vP][hP] === getFieldDataArray()[vP][hP-1])) ||
    ((vP-1 >= 0) && (getFieldDataArray()[vP][hP] === getFieldDataArray()[vP-1][hP])) ||
    ((vP+1 < numberRows) && (getFieldDataArray()[vP][hP] === getFieldDataArray()[vP+1][hP]))) {
      coordinatesOfBubblesForRemovingX.push(hP);
      coordinatesOfBubblesForRemovingY.push(vP);

      saveDataForUndo();
      calculateIfThereAreMoreBubblesToRemove(hP, vP, biggerNumber);
      bubbleRemover(coordinatesOfBubblesForRemovingX, coordinatesOfBubblesForRemovingY, getFieldDataArray());
    };
  };
};
