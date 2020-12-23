import { numberOfBubblesInRow, numberOfBubblesInColumn} from './User_sizes_of_game_field.js';
let cellsForPlayField, aRowForPlayField, rowsAndCellsForPlayField;

cellsForPlayField = '<td></td>';
aRowForPlayField = '';
rowsAndCellsForPlayField = '';

for (let j = 1; j < numberOfBubblesInRow; j++) { //створюємо комірки відповідно до numberOfBubblesInRow змінної
      cellsForPlayField += '<td></td>';
    };

aRowForPlayField = '<tr>\n' + cellsForPlayField + '\n</tr>\n';
rowsAndCellsForPlayField = aRowForPlayField;

for (let j = 1; j < numberOfBubblesInColumn; j++) { //створюємо рядки відповідно до numberOfBubblesInColumn змінної
      rowsAndCellsForPlayField += aRowForPlayField;
    };

export let createHtmlStructure = () => { //створюємо структуру головної сторінки і додаємо у неї ігрове поле

  const div = document.createElement('div');
  div.innerHTML = `<div height="560" width="480" align="center" style="padding-top:10px">
                    <span class="shadows" style="display: inline-block; padding:20px; font-size:18px; margin-bottom:20px; border-radius: 10px; color:white; background-color: #333333;">
                      <div style="padding-bottom:5px; color:grey">
                        <span>Best result: </span><span id="record">0</span>
                      </div>
                      <span>Total score: </span><span id="score">0</span>
                    </span>
                      <table id="play field">${rowsAndCellsForPlayField}
                        </table>
                      <div class="new game shadows" id="new game" style="display: inline-block; vertical-align:middle; align:left; padding:20px; font-size:18px; margin-top:20px; border-radius: 50%; color:white; background-color: #333333;">
                        New<br>Game
                      </div>
                      <div class="shadows" id="undo" style="display: inline-block; color:grey; align:right; padding:40px; vertical-align:middle; font-size:18px; margin-left:120px; margin-top:20px; border-radius: 10px; background-color: #333333;">
                        Undo
                        <br>
                      </div>
                  </div>`;
  document.querySelector('body').appendChild(div);
}
