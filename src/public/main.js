import IslandMapper from './island-mapper';
import {drawArr2dBinary, drawMapWithColors} from './canvas-utils';

let width = 200;
let hight = 200;
let islandMapper = null;


function showSolveButton(isShow) {
  const x = document.getElementById('btnSolve');
  if (isShow) {
    x.style.visibility = 'visible';
  } else {
    x.style.visibility = 'hidden';
  }
}

const runRandomizeMap = () => {
  console.log('start runRandomizeMap');
  width = parseInt(document.getElementById('inputWidth').value, 10);
  hight = parseInt(document.getElementById('inputHight').value, 10);
  islandMapper = new IslandMapper(width, hight);
  // islandMapper.printMap();
  drawArr2dBinary('islandsCanavas', islandMapper.map2d, width, hight);
  showSolveButton(true);
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
  drawMapWithColors('islandsCanavas', islandMapper.islandsDictionary, width, hight);
  showSolveButton(false);
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
  showSolveButton(false);
};

document.getElementById('btnRandomize').addEventListener('click', runRandomizeMap, false);
document.getElementById('btnSolve').addEventListener('click', runSolveMap, false);
document.getElementById('inputWidth').addEventListener('input', validateMapSize);
document.getElementById('inputHight').addEventListener('input', validateMapSize);
document.getElementById('inputCanvasSize').addEventListener('input', changeCnavasSize);
