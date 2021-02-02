import { numberOfBubblesInColumn, numberOfBubblesInRow } from '../model/user-sizes-of-game-field.js';
import { playFieldDataArray } from '../model/start.js';

export const movePlayFieldDown = () => {
  for (let a = 0; a < numberOfBubblesInRow; a++) { //рухаємо бульбашки вниз заповнюючи порожнини після видалення
    for (let i = numberOfBubblesInColumn -1; i > 0; i--) {
      for (let j = numberOfBubblesInRow -1; j >= 0; j--) {
        if (playFieldDataArray[i][j] === 0) {
          playFieldDataArray[i][j] = playFieldDataArray[i-1][j];
          playFieldDataArray[i-1][j] = 0;
        };
      };
    };
  };

  let numberOfEmptyColumns = 0;

  for (let j = 0; j < numberOfBubblesInRow; j++) { // розраховуємо чи є пусті рядки для руху елементів в бік
    if ((playFieldDataArray[numberOfBubblesInColumn - 1][j] !== 0) && (playFieldDataArray[numberOfBubblesInColumn - 1][j+1] === 0)) numberOfEmptyColumns++;
  };

  if (numberOfEmptyColumns > 0) { //якщо є пусті стовбці то рухаэмо масив в бік
    for (let a = numberOfEmptyColumns; a > 0; a--) {
      for (let i = numberOfBubblesInColumn -1; i >= 0; i--) {
        for (let j = numberOfBubblesInRow -1; j >= 0; j--) {
          if (playFieldDataArray[i][j] === 0) {
            playFieldDataArray[i][j] = playFieldDataArray[i][j-1];
            playFieldDataArray[i][j-1] = 0;
          };
        };
      };
    };
  };

};
