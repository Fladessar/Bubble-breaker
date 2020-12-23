import { saveRecord, getRecord } from './Save_record.js';
import { moveFieldDown, moveFieldSideways} from './Move_field.js';

export let calculateFromLeft = (clickedBubbleElement, elementTarget, arrayOfBubblesToHandle, numberOfBubblesInRow, checkerIfABubbleMustBeAddedToAnArray) => {
  for (let i = 0; i < numberOfBubblesInRow; i++){ // розраховуємо кількість бульбашок тогож кольору зліва
    let clPS = clickedBubbleElement.previousSibling;
    if (clPS.classList && clickedBubbleElement.classList[1] === clPS.classList[1]) {
      for (let i = 0; i < arrayOfBubblesToHandle.length; i++) {
        if (arrayOfBubblesToHandle[i] === clPS)
          checkerIfABubbleMustBeAddedToAnArray = false;
      };
      if (checkerIfABubbleMustBeAddedToAnArray) {
        arrayOfBubblesToHandle.push(clPS);
        clickedBubbleElement = clPS;
      };
      checkerIfABubbleMustBeAddedToAnArray = true;
    };
  };
  clickedBubbleElement = elementTarget;
};

export let calculateFromRight = (clickedBubbleElement, elementTarget, arrayOfBubblesToHandle, numberOfBubblesInRow, checkerIfABubbleMustBeAddedToAnArray) => {
  for (let i = 0; i < numberOfBubblesInRow; i++){ // розраховуємо кількість бульбашок тогож кольору справа
    let clNS = clickedBubbleElement.nextSibling;
    if (clNS.classList && clickedBubbleElement.classList[1] === clNS.classList[1]) {
      for (let i = 0; i < arrayOfBubblesToHandle.length; i++) {
        if (arrayOfBubblesToHandle[i] === clNS)
          checkerIfABubbleMustBeAddedToAnArray = false;
      };

      if (checkerIfABubbleMustBeAddedToAnArray) {
        arrayOfBubblesToHandle.push(clNS);
        clickedBubbleElement = clNS;
      };
      checkerIfABubbleMustBeAddedToAnArray = true;
    };
  };
  clickedBubbleElement = elementTarget;
};

export let calculateFromTop = (clickedBubbleElement, elementTarget, arrayOfBubblesToHandle, numberOfBubblesInColumn, checkerIfABubbleMustBeAddedToAnArray) => {
  for (let i = 0; i < numberOfBubblesInColumn; i++){ // розраховуємо кількість бульбашок того ж кольору зверху
    if (clickedBubbleElement.parentNode.classList && !clickedBubbleElement.parentNode.classList.contains('1') && clickedBubbleElement.classList[1] === clickedBubbleElement.parentNode.previousSibling.previousSibling.children[clickedBubbleElement.classList[0] - 1].classList[1]) {
      let clPNPP = clickedBubbleElement.parentNode.previousSibling.previousSibling;
      for (let i = 0; i < arrayOfBubblesToHandle.length; i++) {
        if (arrayOfBubblesToHandle[i] === clPNPP.children[clickedBubbleElement.classList[0] - 1])
          checkerIfABubbleMustBeAddedToAnArray = false;
      };

      if (checkerIfABubbleMustBeAddedToAnArray) {
        arrayOfBubblesToHandle.push(clPNPP.children[clickedBubbleElement.classList[0] - 1]);
        clickedBubbleElement = clPNPP.children[clickedBubbleElement.classList[0] - 1];
      };
      checkerIfABubbleMustBeAddedToAnArray = true;
    };
  };
  clickedBubbleElement = elementTarget;
};

export let calculateFromBottom = (clickedBubbleElement, elementTarget, arrayOfBubblesToHandle, numberOfBubblesInColumn, checkerIfABubbleMustBeAddedToAnArray) => {
  for (let i = 0; i < numberOfBubblesInColumn; i++){ // розраховуємо кількість бульбашок того ж кольору знизу
    let clPNNN = clickedBubbleElement.parentNode.nextSibling.nextSibling;
    if (!clickedBubbleElement.parentNode.classList.contains(numberOfBubblesInColumn.toString()) && clickedBubbleElement.classList[1] === clPNNN.children[clickedBubbleElement.classList[0] - 1].classList[1]) {
      for (let i = 0; i < arrayOfBubblesToHandle.length; i++) {
        if (arrayOfBubblesToHandle[i] === clPNNN.children[clickedBubbleElement.classList[0] - 1])
          checkerIfABubbleMustBeAddedToAnArray = false;
      };

      if (checkerIfABubbleMustBeAddedToAnArray) {
        arrayOfBubblesToHandle.push(clPNNN.children[clickedBubbleElement.classList[0] - 1]);
        clickedBubbleElement = clPNNN.children[clickedBubbleElement.classList[0] - 1];
      };
      checkerIfABubbleMustBeAddedToAnArray = true;
    };
  };
};
