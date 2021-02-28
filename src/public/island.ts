
import Point from './point';
import {createRandomColor} from './utils';

class Island {
  key: number;

  points: Map<any, any>;

  color: string;

  constructor(key:number) {
    this.key = key;
    // this.points = [];
    this.points = new Map();
    this.color = createRandomColor();
  }

  addPoint(point:Point) {
    // this.points.push(point);
    this.points.set(`${point.x},${point.y}`, point);
  }
}

export default Island;
