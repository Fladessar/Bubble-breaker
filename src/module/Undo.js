export let undo = (numberOfBubblesInColumn, numberOfBubblesInRow, arrayOfCoordinates, arrayOfBubblesForUndo, scoreForUndo) => {
  for (let i = 0; i < numberOfBubblesInColumn; i++) { // видаляємо поточні класи з кольорами
    for (let j = 0; j < numberOfBubblesInRow; j++) {
      let classlist = arrayOfCoordinates[i].children[j].classList;
      classlist.remove(classlist[1]);
      if (arrayOfBubblesForUndo[i][j]) {
        classlist.add(arrayOfBubblesForUndo[i][j]);
      };
    };
  };
  document.getElementById('score').innerHTML = scoreForUndo;
  document.getElementById('undo').style.color = "grey";
};
