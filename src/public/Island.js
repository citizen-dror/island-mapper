import { createRandomColor } from './Utils';

class Island {
  constructor(key) {
    this.key = key;
    // this.points = [];
    this.points = new Map();
    this.color = createRandomColor();
  }

  addPoint(point) {
    // this.points.push(point);
    this.points.set(`${point.x},${point.y}`, point);
  }
}

export default Island;
