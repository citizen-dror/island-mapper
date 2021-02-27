import Island from './Island';
import Point from './Point';
import Queue from './Queue';

function randoNumber(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class IslandCounter {
  constructor(hight, length) {
    this.islandCount = 0;

    // this.map = [
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // ];

    // this.map = [
    //   [0, 1, 0, 0],
    //   [0, 1, 0, 0],
    //   [0, 0, 0, 1],
    // ];

    this.map = IslandCounter.initMap(hight, length);
    // console.log(this.map);
    this.length = this.map[0].length;
    this.hight = this.map.length;
    this.islandMap = IslandCounter.initIslandMap(this.map);
    // const islandStrat = IslandCounter.copy2DArray(this.islandMap);
    // console.log(islandStrat);
    this.islandList = new Map();
  }

  static initMap(hight, length) {
    const arr = [];
    for (let i = 0; i < hight; i += 1) {
      arr[i] = Array.from({ length }, () => randoNumber(0, 1));
    }
    return arr;
  }

  static copy2DArray(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
      newArray[i] = array[i].slice();
    }
    return newArray;
  }

  static initIslandMap(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
      newArray[i] = array[i].map((x) => ((x === 1) ? -1 : 0));
    }
    return newArray;
  }

  printMap() {
    // eslint-disable-next-line no-console
    console.log(this.map);
  }

  printIslandMap() {
    // eslint-disable-next-line no-console
    console.log(this.islandMap);
  }

  //*
  findIslends() {
    for (let y = 0; y < this.map.length; y += 1) {
      for (let x = 0; x < this.map[y].length; x += 1) {
        if (this.isUnChartedLand(x, y)) {
          // this.islandMap[y][x] = 2;
          const island = this.addNewIsland();
          const point = new Point(x, y);
          this.doMapIsland(point, island);
          // console.log(`point (${x}, ${y})`);
        }
      }
    }
    return this.islandCount;
  }

  // if val ===-1 - uncharted land
  // if 0 = sea,
  // if val > 0  -mapped Land
  isUnChartedLand(x, y) {
    return (this.islandMap[y][x] < 0);
  }

  // isPointInSland(point, )
  doMapIsland(root, island) {
    let index = 0;
    const queueNewPoints = new Queue(root);
    while (queueNewPoints.getLength() && index < 1000) {
      index += 1;
      const point = queueNewPoints.shift();
      this.addPointToIsland(point, island);
      // add neighbor land point to queue
      const neighbors = this.getNeighbors(point.x, point.y);
      neighbors.forEach((newPoint) => {
        if (this.isUnChartedLand(newPoint.x, newPoint.y)) {
          queueNewPoints.push(newPoint);
        }
      });
    }
  }

  getNeighbors(x, y) {
    const neighbors = [];
    if (x > 0) {
      if (y > 0) neighbors.push(new Point(x - 1, y - 1));
      neighbors.push(new Point(x - 1, y));
      if (y + 1 < this.hight) neighbors.push(new Point(x - 1, y + 1));
    }
    if (y > 0) neighbors.push(new Point(x, y - 1));
    if (y + 1 < this.hight) neighbors.push(new Point(x, y + 1));
    if (x + 1 < this.length) {
      if (y > 0) neighbors.push(new Point(x + 1, y - 1));
      neighbors.push(new Point(x + 1, y));
      if (y + 1 < this.hight) neighbors.push(new Point(x + 1, y + 1));
    }
    return neighbors;
  }

  addNewIsland() {
    this.islandCount += 1;
    const island = new Island(this.islandCount);
    // console.log(`new island ${island.key}:`);
    return island;
  }

  addPointToIsland(point, island) {
    // console.log(`${island.key}: ${point.x}, ${point.y}`);
    island.addPoint(point);
    this.islandMap[point.y][point.x] = island.key;
  }
}

export default IslandCounter;
