import { numberRows, numberColumns } from '../model/user-sizes-of-game-field.js';
import { getFieldDataArray } from '../model/data-array.js';

export const movePlayFieldDown = () => {
  for (let a = 0; a < numberColumns; a++) { //рухаємо бульбашки вниз заповнюючи порожнини після видалення
    for (let i = numberRows -1; i > 0; i--) {
      for (let j = numberColumns -1; j >= 0; j--) {
        if (getFieldDataArray()[i][j] === 0) {
          getFieldDataArray()[i][j] = getFieldDataArray()[i-1][j];
          getFieldDataArray()[i-1][j] = 0;
        };
      };
    };
  };

    for (let b = numberColumns-1; b >= 0; b--) { //якщо є пусті стовбці то рухаэмо масив в бік
      for (let a = numberColumns-1; a >= 0; a--) { //якщо є пусті стовбці то рухаэмо масив в бік
        if (getFieldDataArray()[numberRows - 1][a] === 0) {
          for (let i = numberRows -1; i >= 0 ; i--) {
            for (let j = a; j > 0; j--) {
              if (getFieldDataArray()[i][j] === 0) {
                getFieldDataArray()[i][j] = getFieldDataArray()[i][j-1];
                getFieldDataArray()[i][j-1] = 0;
              };
           };
          };
        };
      };
    };

};
