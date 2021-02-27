import { createRandomColor } from './Utils';

const COLOR_PALLATE = new Map(
  [
    [0, [191, 63, 63, 255]],
    [1, [191, 127, 63, 255]],
    [2, [63, 191, 63, 255]],
    [3, [63, 63, 191, 255]],
  ],
);

const getColorFromPallate = (key) => {
  const newKey = key % (COLOR_PALLATE.size - 1);
  const color = COLOR_PALLATE.get(newKey);
  return color;
};

class Island {
  constructor(key) {
    this.key = key;
    this.points = new Map();
    this.color = getColorFromPallate(key);
  }

  addPoint(point) {
    this.points.set(point);
  }
}

export default Island;
