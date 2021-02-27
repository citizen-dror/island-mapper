import IslandMapper from './IslandMapper';
import { covertArray2dTO1d } from './Utils';
import Island from './Island';

let width = 200;
let hight = 200;
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
    ctx.fillStyle = 'rgb(0, 0, 0)';
    for (let y = 0; y < array2D.length; y += 1) {
      for (let x = 0; x < array2D[y].length; x += 1) {
        if (array2D[y][x] === 1) {
          ctx.fillRect(x * rectWidth, y * rectHight, rectWidth, rectHight);
        }
      }
    }
  }
};

const drawSolvedMap = (islandsMap, mapWidth, mapHight) => {
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
  width = parseInt(document.getElementById('inputWidth').value, 10);
  hight = parseInt(document.getElementById('inputHight').value, 10);
  console.log('width:', width);
  islandMapper = new IslandMapper(width, hight);
  // islandMapper.printMap();
  drawRandomMap(islandMapper.map2d, width, hight);
};

const runSolveMap = () => {
  console.log('start count');
  const start = new Date().getTime();
  // islandMapper.printMap();
  const count = islandMapper.findIslends();
  // islandMapper.printIslandMap();
  const timeDiff = new Date().getTime() - start;
  // islandMapper.printIslandlist();
  console.log('Island count: ', count);
  console.log('Time (ms): ', timeDiff);
  // const dataToDrow = covertArray2dTO1d(islandMapper.islansdMap2d);
  // draw(n, m, dataToDrow, islandMapper.islandsDictionary);
  drawSolvedMap(islandMapper.islandsDictionary, width, hight);
};

const validateMapSize = (e) => {
  const number = e.target.value;
  if (number > 1200) {
    e.target.value = 1200;
  }
  if (number < 1) {
    e.target.value = 1;
  }
};

const changeCnavasSize = (e) => {
  let number = e.target.value;
  if (number > 1000) {
    e.target.value = 1000;
    number = 1000;
  }
  if (number < 100) {
    e.target.value = 100;
    number = 100;
  }
  const canvas = document.getElementById('islandsCanavas');
  canvas.width = number;
  canvas.height = number;
};

document.getElementById('btnRandomize').addEventListener('click', runRandomizeMap, false);
document.getElementById('btnSolve').addEventListener('click', runSolveMap, false);
document.getElementById('inputWidth').addEventListener('input', validateMapSize);
document.getElementById('inputHight').addEventListener('input', validateMapSize);
document.getElementById('inputCanvasSize').addEventListener('input', changeCnavasSize);
