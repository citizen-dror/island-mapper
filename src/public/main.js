import IslandCounter from './IslandCounter';

const draw = () => {
  const canvas = document.getElementById('islandsCanavas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
  }
};

const runCount = () => {
  console.log('start count');
  const start = new Date().getTime();
  const islandCounter = new IslandCounter(100, 100);
  islandCounter.printMap();
  const count = islandCounter.findIslends();
  islandCounter.printIslandMap();
  const timeDiff = new Date().getTime() - start;
  console.log('count: ', count);
  console.log('time:', timeDiff);
  draw();
};

document.getElementById('btnCount').addEventListener('click', runCount, false);
