import '../../css/style.css';
import { numberColumns, numberRows} from '../model/user-sizes-of-game-field.js';
import { listenIfMouseClicked } from '../view/mouse-clicked.js';
import { drawBestResult } from '../view/draw-best-result.js';
import { getBestResult } from '../controller/best-result-handling.js';
import { createGameField } from '../view/create-html-structure.js';
import { createNewBubbles } from '../model/data-array-handling.js';

export const start = () => {
  createGameField(numberColumns, numberRows); // створюємо загальну структуру в HTML файлі (теги, id і інше)
  createNewBubbles(); // створюємо і відмальовуємо масив бульбашок
  listenIfMouseClicked(); // чекаємо на дії користувача
  drawBestResult(getBestResult()); // відмальовуємо кращий результат (рекорд очок)
};
