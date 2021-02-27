import { createRandomColor } from './Utils';

const COLOR_PALLATE = new Map(
  [
    [0, 'rgb(191, 0, 255)'],
    [1, 'rgb(0, 255, 64)'],
    [2, 'rgb(255, 0, 0)'],
    [3, 'rgb(0, 255, 255)'],
    [4, 'rgb(255, 128, 0)'],
    [5, 'rgb(64, 0, 255)'],
    [6, 'rgb(255, 64, 0)'],
  ],
);

const getColorFromPallate = (key) => {
  const newKey = key % (COLOR_PALLATE.size);
  const color = COLOR_PALLATE.get(newKey);
  return color;
};

class Island {
  constructor(key) {
    this.key = key;
    this.points = [];
    this.color = getColorFromPallate(key);
  }

  addPoint(point) {
    this.points.push(point);
  }
}

export default Island;
