import Island from './island';
import Point from './point';
import Queue from './queue';
import {randoNumber} from './utils';

/*
 * mapper of 2d array with 0,1 data
 */
class IslandMapper {
  islandCount: number;
  map2d: number[][];
  length: any;
  hight: any;
  islansdMap2d: any[];
  islandsDictionary: Map<any, any>;

  constructor(width: number, hight: number) {
    this.islandCount = 0;
    this.map2d = IslandMapper.initMap(width, hight);
    // console.log(this.map);
    this.length = this.map2d[0].length;
    this.hight = this.map2d.length;
    this.islansdMap2d = IslandMapper.initIslandsMap(this.map2d);
    // const islandStrat = IslandCounter.copy2DArray(this.islandMap);
    // console.log(islandStrat);
    this.islandsDictionary = new Map();
  }

  /*
   * create new map - 2d arrray with random 0/1 data
   * @param {*} width of the map
   * @param {*} hight of the map
   */
  static initMap(width: number, hight: number) {
    const arr = [];
    for (let i = 0; i < hight; i += 1) {
      arr[i] = Array.from({ length: width }, () => randoNumber(0, 1));
    }
    return arr;
  }
  /*
   * 
   */
  static initIslandsMap(array: number[][]) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
      newArray[i] = array[i].map((x) => ((x === 1) ? -1 : 0));
    }
    return newArray;
  }

  //*
  findIslends() {
    for (let y = 0; y < this.map2d.length; y += 1) {
      for (let x = 0; x < this.map2d[y].length; x += 1) {
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
  isUnChartedLand(x: number, y: number) {
    return (this.islansdMap2d[y][x] < 0);
  }

  // isPointInSland(point, )
  doMapIsland(root: Point, island: Island) {
    let index = 0;
    const queueNewChatredLandPoints = new Queue();
    // if point is the queue its already marked as charted
    // this prevent it to be added to the queue by nighbores
    this.islansdMap2d[root.y][root.x] = island.key;
    queueNewChatredLandPoints.push(root);
    while (queueNewChatredLandPoints.getLength() && index <= 1500000) {
      index += 1;
      if (index === 200000) console.log('got 200,000 limit !!');
      if (index === 500000) console.log('got 500,000 limit !!');
      const point = queueNewChatredLandPoints.shift();
      this.addPointToIsland(point, island);
      // add neighbor land point to queue
      const neighbors = this.getNeighbors(point.x, point.y);
      neighbors.forEach((newPoint) => {
        if (this.isUnChartedLand(newPoint.x, newPoint.y)) {
          this.islansdMap2d[newPoint.y][newPoint.x] = island.key;
          queueNewChatredLandPoints.push(newPoint);
        }
      });
    }
  }

  getNeighbors(x: number, y: number) {
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
    this.islandsDictionary.set(this.islandCount, island);
    // console.log(`new island ${island.key}:`);
    return island;
  }

  addPointToIsland(point: Point, island: Island) {
    // console.log(`${island.key}: ${point.x}, ${point.y}`);
    island.addPoint(point);
    // this.islansdMap2d[point.y][point.x] = island.key;
  }

  printMap() {
    // eslint-disable-next-line no-console
    console.log(this.map2d);
  }

  printIslandMap() {
    // eslint-disable-next-line no-console
    console.log(this.islansdMap2d);
  }

  printIslandlist() {
    this.islandsDictionary.forEach((value) => {
      const { key, color, points } = value;
      console.log(`island ${key}: ${points.size}, ${color}`);
    });
    // eslint-disable-next-line no-console
    console.log(this.islansdMap2d);
  }
}

export default IslandMapper;
