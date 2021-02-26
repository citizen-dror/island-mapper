class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  isNeighbor(otherPoint) {
    return (
      (Math.abs(this.x - otherPoint.x) <= 1)
            && (Math.abs(this.y - otherPoint.y) <= 1)
    );
  }

  getNeighbors() {
    const res = [];
    if (this.x > 0) {
      res.push(new Point(this.x - 1, this.y));
    }
    return res;
  }
}

export default Point;
