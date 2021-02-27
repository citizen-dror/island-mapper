import { getColorFromPallate } from './Utils';

class Island {
  constructor(key) {
    this.key = key;
    // this.points = [];
    this.points = new Map();
    this.color = getColorFromPallate(key);
  }

  addPoint(point) {
    // this.points.push(point);
    this.points.set(`${point.x},${point.y}`, point);
  }
}

export default Island;
