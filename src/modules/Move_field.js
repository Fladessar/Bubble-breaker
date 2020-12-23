export let moveFieldDown = (numberOfBubblesInColumn, numberOfBubblesInRow, arrayOfCoordinates) => { // рухаємо бульбашки вниз після видалення щоб заповнити порожнечі
    for (let i = numberOfBubblesInColumn -1; i > 0; i--) {
      for (let j = numberOfBubblesInRow -1; j > -1; j--) {
        if (!arrayOfCoordinates[i].children[j].classList[1] && arrayOfCoordinates[i-1].children[j].classList[1]) {
          arrayOfCoordinates[i].children[j].classList.add(arrayOfCoordinates[i-1].children[j].classList[1]);
          arrayOfCoordinates[i-1].children[j].classList.remove(arrayOfCoordinates[i-1].children[j].classList[1]);
        };
      };
    };
};

export let moveFieldSideways = (numberOfBubblesInRow, numberOfBubblesInColumn, arrayOfCoordinates) => { // рухаємо бульбашки вбік після руху їх вниз
  let counter = 0;
    for (let i = numberOfBubblesInRow -1; i > 0; i--) {
      for (let j = numberOfBubblesInColumn -1; j > -1; j--) {
        if (!arrayOfCoordinates[j].children[i].classList[1]) {
          counter++;
        };
      };
      if (counter === numberOfBubblesInColumn) {
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
