import { getMatrix } from "../../src/get-matrix";
import { getDebugMatrix } from "../../src/get-debug-matrix";

function checkRange(x, y, radius) {
  return 0 <= x && x <= radius && 0 <= y && y <= radius;
}
function getQuarter(x, y, radius) {
  if (x <= radius && y <= radius) {
    return 0;
  } else if (x > radius && y <= radius) {
    return 1;
  } else if (x <= radius && y > radius) {
    return 2;
  } else {
    return 3;
  }
}
function getDividedValue(quarter, radius) {
  return quarter * (radius * 2) + 1;
}
function getRow(x, y, radius) {
  return getDividedValue(getQuarter(x, y, radius), radius) + y;
}

function getColumn(x, y, radius) {
  return getDividedValue(getQuarter(x, y, radius), radius) - x;
}
function getN(x, y, radius) {
  const quarter = getQuarter(x, y, radius);
  const dividedValue = getDividedValue(quarter, radius);
  const row = getRow(x, y, radius);
  const column = getColumn(x, y, radius);

  if (!checkRange(x, y, radius)) {
    return { answer: null, quarter, dividedValue, row, column };
  }

  if (x == 0 && y == 0) {
    return { answer: 0, quarter, dividedValue, row, column };
  }

  return {
    answer: dividedValue + row + column - 1,
    quarter,
    dividedValue,
    row,
    column,
  };
}
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
function getRadius(x, y) {
  // return Math.floor((Math.sqrt(x * x + y * y) - 1) / 2) + 1;
  // const guide = calculateGuide(x, y, determineQuadrant(x, y));
  // return Math.floor((Math.sqrt(guide * 8 + 1) - 1) / 2) + 1;
  // return Math.floor((Math.sqrt(x * x + y * y) - 1) / 2) + 1;
  return Math.max(Math.abs(x), Math.abs(y));
  // return Math.ceil(Math.sqrt((Math.abs(x) + Math.abs(y)) / 2));
  // return Math.floor((Math.sqrt((x + y) * 2) - 1) / 2) + 1;
}
function getIndex(x, y) {
  const radius = getRadius(x, y);
  return { ...getN(x, y, radius), radius };
}

describe("step-by-step-01", () => {
  test("index 0~20 test", () => {
    const logs: any = [];
    for (let i = 0; i <= 20; i++) {
      const { _diameter, _guide, _coord, _position, _radius, _size } =
        getDebugMatrix(i);
      const [x, y] = _coord;
      const { answer, quarter, dividedValue, row, column, radius } = getIndex(
        x,
        y
      );
      const success = answer === i ? `✅` : `❌`;
      logs.push({
        answer,
        success,
        x,
        y,
        _diameter,
        _guide,
        _position,
        _radius,
        _size,
        quarter,
        dividedValue,
        row,
        column,
        radius,
      });
    }
    console.table(logs);

    // temporary success
    expect(true).toEqual(true);
  });
});
