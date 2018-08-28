function findMinSteps(n, start, end) {
  let minSteps = 0;
  let nodePosition = start;
  let xOffset = [1, 0, -1, 0];
  let yOffset = [0, 1, 0, -1];
  let possibleMoves = 4;
  let isWall = [];
  let hasVisited = [];
  for (let i = 0; i < n; i++) {
    isWall[i] = [];
    hasVisited[i] = [];
  }
  //set the board
  isWall[1][0] = true;
  isWall[1][1] = true;
  isWall[1][3] = true;

  let node = [nodePosition, minSteps];
  let queue = [];
  queue.push(node);

  while (queue.length) {
    node = queue.shift();
    nodePosition = node[0];
    if (nodePosition[0] === end[0] && nodePosition[1] === end[1]) {
      return node[1];
    }

    hasVisited[nodePosition[0]][nodePosition[1]] = true;
    minSteps = node[1];

    for (let j = 0; j < possibleMoves; j++) {
      let nextX = nodePosition[0] + xOffset[j];
      let nextY = nodePosition[1] + yOffset[j];

      if (
        nextX < n &&
        nextX >= 0 &&
        nextY < n &&
        nextY >= 0 &&
        !isWall[nextX][nextY] &&
        !hasVisited[nextX][nextY]
      ) {
        queue.push([[nextX, nextY], minSteps + 1]);
      }
    }
  }

  return minSteps;
}

function getKnightMinStep(N, source, dest) {
  let hasVisited = [];
  let queue = [];
  let xOffset = [2, 2, -2, -2, 1, 1, -1, -1];
  let yOffset = [1, -1, 1, -1, 2, -2, 2, -2];
  let nodePosition = source;
  let nodeMinStep = 0;
  let node = [nodePosition, nodeMinStep];
  let i = 0;
  let l = xOffset.length;
  let nextX = 0;
  let nextY = 0;

  // init
  for (let j = 0; j < N; j++) {
    hasVisited[j] = [];
  }
  console.log(hasVisited);
  queue.push(node);

  while (queue.length) {
    node = queue.shift();
    nodePosition = node[0];
    nodeMinStep = node[1];
    hasVisited[nodePosition[0]][nodePosition[1]] = true;

    if (nodePosition[0] === dest[0] && nodePosition[1] === dest[1]) {
      return nodeMinStep;
    }

    console.log("going into for loop");
    for (i = 0; i < l; i++) {
      nextX = nodePosition[0] + xOffset[i];
      nextY = nodePosition[1] + yOffset[i];

      console.log(hasVisited);
      if (
        nextX >= 0 &&
        nextX < N &&
        nextY >= 0 &&
        nextY < N &&
        !hasVisited[nextX][nextY]
      ) {
        console.log("pushing node = " + node);
        queue.push([[nextX, nextY], nodeMinStep + 1]);
      }
    }
  }

  console.log(
    "**************************************return nodeMinStep = " + nodeMinStep
  );
  return nodeMinStep;
}

module.exports = { findMinSteps, getKnightMinStep };
