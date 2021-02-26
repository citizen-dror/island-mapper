import Island from './Island';
import Point from './Point';

function randoNumber(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class IslandCounter {
  constructor(hight, length) {
    this.islandCount = 0;

    // this.map = [
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
          // const point = new Point(x, y);
          const island = this.addNewIsland(x, y);
          this.doMapIsland(x, y, island);
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
  doMapIsland(x, y, island) {
    const neighbors = this.getNeighbors(x, y);
    // console.log(neighbors);
    neighbors.forEach((point) => {
      if (this.isUnChartedLand(point.x, point.y)) {
        this.addPointToIsland(point.x, point.y, island);
        // recursive call!!
        this.doMapIsland(point.x, point.y, island);
      }
    });
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

  addNewIsland(x, y) {
    this.islandCount += 1;
    const island = new Island(this.islandCount);
    // console.log(`new island ${island.key}:`);
    this.addPointToIsland(x, y, island);
    return island;
  }

  addPointToIsland(x, y, island) {
    // console.log(`${island.key}: ${x}, ${y}`);
    const point = new Point(x, y);
    island.addPoint(point);
    this.islandMap[y][x] = island.key;
  }
}

export default IslandCounter;
