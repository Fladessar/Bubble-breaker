let playFieldDataArray = [];

export const getFieldDataArray = () => playFieldDataArray;

export const setFieldDataArray = array => {
  playFieldDataArray = [];
  for (let i = 0; i < array.length; i++) {
    playFieldDataArray[i] = [];
    for (let j = 0; j < array[0].length; j++) {
      playFieldDataArray[i][j] = array[i][j];
    };
  };
};
