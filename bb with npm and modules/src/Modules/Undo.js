export let undo = (numberOfBubblesInColumn, numberOfBubblesInRow, arrayOfCoordinates, scoreForUndo, arrayOfBubblesForUndo) => {
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
  document.getElementById('score').innerHTML = scoreForUndo;
};
