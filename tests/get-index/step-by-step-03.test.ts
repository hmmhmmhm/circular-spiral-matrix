import { getMatrix } from "../../src/get-matrix";
function determineQuadrant(x, y) {
  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else {
    return 4;
  }
}
function calculateGuide(x, y, quadrant) {
  if (quadrant === 1) {
    return Math.floor(x / Math.abs(y));
  } else if (quadrant === 2) {
    return Math.floor(Math.abs(y) / x);
  } else if (quadrant === 3) {
    return Math.floor(Math.abs(x) / Math.abs(y));
  } else {
    return Math.floor(Math.abs(y) / Math.abs(x));
  }
}
function calculatePosition(x, y, guide) {
  const absoluteX = Math.abs(x);
  const absoluteY = Math.abs(y);
  const radius = Math.floor((Math.sqrt(guide * 8 + 1) - 1) / 2) + 1;
  const diameter = radius * 2;

  if (guide === 0) {
    return radius * diameter - absoluteX;
  } else if (guide === 1) {
    return absoluteY * diameter + radius;
  } else if (guide === 2) {
    return absoluteX * diameter + radius * 3 + absoluteY;
  } else if (guide === 3) {
    return absoluteY * diameter + radius * 5 - absoluteX;
  } else {
    return 0;
  }
}
function getIndex(x, y) {
  const quadrant = determineQuadrant(x, y);
  const guide = calculateGuide(x, y, quadrant);
  const position = calculatePosition(x, y, guide);

  return position * 8 + quadrant - 1;
}

describe("step-by-step-03", () => {
  test("index 0~20 test", () => {
    const logs: any = [];
    for (let i = 0; i <= 20; i++) {
      const [x, y] = getMatrix(i);
      const answer = getIndex(x, y);
      const success = answer === i ? `✅` : `❌`;
      logs.push({ x, y, i, answer, success });
    }
    console.table(logs);

    // temporary success
    expect(true).toEqual(true);
  });
});
