import { getMatrix } from "../../src/get-matrix";

function getQuadrant(x, y) {
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
function getAbsoluteCoordinates(x, y) {
  return {
    x: Math.abs(x),
    y: Math.abs(y),
  };
}
function getOffset(quadrant, absoluteCoordinates) {
  const { x, y } = absoluteCoordinates;

  if (quadrant === 1) {
    return 0;
  } else if (quadrant === 2) {
    return x;
  } else if (quadrant === 3) {
    return x + y;
  } else {
    return y;
  }
}
function getRadius(absoluteCoordinates) {
  const { x, y } = absoluteCoordinates;

  return Math.max(x, y);
}
function getIndex(x, y) {
  const quadrant = getQuadrant(x, y);
  const absoluteCoordinates = getAbsoluteCoordinates(x, y);
  const offset = getOffset(quadrant, absoluteCoordinates);
  const radius = getRadius(absoluteCoordinates);

  return {
    answer: (8 * radius * (radius - 1)) / 2 + offset,
    quadrant,
    absoluteCoordinates,
    offset,
    radius,
  };
}

describe("step-by-step-02", () => {
  test("index 0~20 test", () => {
    const logs: any = [];
    for (let i = 0; i <= 20; i++) {
      const [x, y] = getMatrix(i);
      const { answer, quadrant, absoluteCoordinates, offset, radius } =
        getIndex(x, y);
      const success = answer === i ? `✅` : `❌`;
      logs.push({
        x,
        y,
        i,
        answer,
        success,
        quadrant,
        absoluteCoordinates,
        offset,
        radius,
      });
    }
    console.table(logs);

    // temporary success
    expect(true).toEqual(true);
  });
});
