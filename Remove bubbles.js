export let calculateFromLeft = (currentElement, e, arrayOfBubblesToHandle, numberOfBubblesInRow, checker) => {
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
};

export let calculateFromRight = (currentElement, e, arrayOfBubblesToHandle, numberOfBubblesInRow, checker) => {
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
};

export let calculateFromTop = (currentElement, e, arrayOfBubblesToHandle, numberOfBubblesInColumn, checker) => {
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
};

export let calculateFromBottom = (currentElement, e, arrayOfBubblesToHandle, numberOfBubblesInColumn, checker) => {
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
};
