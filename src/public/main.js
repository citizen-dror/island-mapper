import IslandMapper from './IslandMapper';
import { covertArray2dTO1d } from './Utils';
import Island from './Island';

const width = 200;
const hight = 200;
let islandMapper = null;

/* const draw1 = (n, m, array2D, islandsDictionary) => {
  console.log('draw');
  const canvas = document.getElementById('islandsCanavas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(n, m);

    // Iterate through every pixel
    for (let i = 0; i < imageData.data.length; i += 4) {
      const inputIdnex = Math.floor(i / 4);
      const islandKey = array2D[inputIdnex];
      if (islandKey > 0) {
        // Modify pixel data
        const { color } = islandsDictionary.get(islandKey);
        console.log(color);
        const {
          r, g, b, a,
        } = color;
        imageData.data[i + 0] = r; // R value
        imageData.data[i + 1] = 0; // G value
        imageData.data[i + 2] = b; // B value
        imageData.data[i + 3] = 255; // A value
      }
    }
    // Draw image data to the canvas
    ctx.putImageData(imageData, 0, 0);
  }
}; */

const drawRandomMap = (array2D, mapWidth, mapHight) => {
  const canvas = document.getElementById('islandsCanavas');
  const rectWidth = (canvas.width / mapWidth);
  const rectHight = (canvas.height / mapHight);
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(191, 0, 255)';
    console.log ('test data')
    console.log (array2D);
    for (let y = 0; y < array2D.length; y += 1) {
      for (let x = 0; x < array2D[y].length; x += 1) {
        if (array2D[y][x] === 1) {
          ctx.fillRect(x * rectWidth, y * rectHight, rectWidth, rectHight);
        }
      }
    }
  }
};

const draw = (islandsMap, mapWidth, mapHight) => {
  const canvas = document.getElementById('islandsCanavas');
  const rectWidth = (canvas.width / mapWidth);
  const rectHight = (canvas.height / mapHight);
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    islandsMap.forEach((value) => {
      const { color, points } = value;
      ctx.fillStyle = color;
      points.forEach((point) => {
        ctx.fillRect(point.x * rectWidth, point.y * rectHight, rectWidth, rectHight);
      });
    });
  }
};

const runRandomizeMap = () => {
  console.log('start runRandomizeMap');
  islandMapper = new IslandMapper(width, hight);
  islandMapper.printMap();
  drawRandomMap(islandMapper.map2d, width, hight);
};

const runCount = () => {
  console.log('start count');
  const start = new Date().getTime();
  // const islandMapper = new IslandMapper(width, hight);
  islandMapper.printMap();
  const count = islandMapper.findIslends();
  islandMapper.printIslandMap();
  const timeDiff = new Date().getTime() - start;
  console.log('count: ', count);
  console.log('time:', timeDiff);
  islandMapper.printIslandlist();
  // const dataToDrow = covertArray2dTO1d(islandMapper.islansdMap2d);
  // draw(n, m, dataToDrow, islandMapper.islandsDictionary);
  draw(islandMapper.islandsDictionary, width, hight);
};


document.getElementById('btnRandomize').addEventListener('click', runRandomizeMap, false);
document.getElementById('btnCount').addEventListener('click', runCount, false);
