import IslandCounter from './IslandCounter';

const runCount = () => {
  const start = new Date().getTime();
  const islandCounter = new IslandCounter(50, 20);
  islandCounter.printMap();
  const count = islandCounter.findIslends();
  islandCounter.printIslandMap();
  const timeDiff = new Date().getTime() - start;
  console.log('count: ', count);
  console.log('time:', timeDiff);
};

runCount();
