export const arrayOfColors = ["transparent", "yellow", "red", "purple", "green", "blue"];

export const drawCurrentBubblesPlacement = (allBubblesRows, playFieldDataArray) => {
  for (let i = 0; i < playFieldDataArray.length; i++) {
    for (let j = 0; j < playFieldDataArray[0].length; j++) {
      let acc = allBubblesRows[i].children[j].classList;
      acc.remove(acc[0]);
      acc.add(arrayOfColors[playFieldDataArray[i][j]]);
    };
  };
};
