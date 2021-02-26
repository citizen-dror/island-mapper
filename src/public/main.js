import IslandCounter from './IslandCounter';

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
};

document.getElementById('btnCount').addEventListener('click', runCount, false);
