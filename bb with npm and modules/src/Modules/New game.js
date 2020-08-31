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
