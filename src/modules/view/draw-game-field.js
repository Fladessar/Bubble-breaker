export const arrayOfColors = ["transparent", "yellow", "red", "purple", "green", "blue"];

export const drawCurrentBubblesPlacement = (allBubblesRows, playFieldDataArray) => {
  for (let i = 0; i < playFieldDataArray.length; i++) {
    for (let j = 0; j < playFieldDataArray[0].length; j++) {
      allBubblesRows[i].children[j].classList.remove(allBubblesRows[i].children[j].classList[0]);
      allBubblesRows[i].children[j].classList.add(arrayOfColors[playFieldDataArray[i][j]]);
    };
  };
};
