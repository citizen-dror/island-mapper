function randoNumber(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createRandomColor() {
  const color = [
    randoNumber(0, 255), // R value
    randoNumber(0, 255), // G value
    randoNumber(0, 255), // B value
    randoNumber(0, 255), // A value
  ];

  return color;
}

const copy2DArray = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray[i] = array[i].slice();
  }
  return newArray;
};

const covertArray2dTO1d = (array2D) => {
  let newArr = [];
  for (let i = 0; i < array2D.length; i += 1) {
    newArr = newArr.concat(array2D[i]);
  }
  return newArr;
};

export {
  createRandomColor,
  randoNumber,
  copy2DArray,
  covertArray2dTO1d,
};
