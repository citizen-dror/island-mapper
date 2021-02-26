// import Point from './Point';

class Island {
  constructor(key) {
    this.key = key;
    this.points = new Map();
  }

  addPoint(point) {
    this.points.set(point);
  }
}

export default Island;
