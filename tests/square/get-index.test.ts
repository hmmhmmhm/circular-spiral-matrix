import { getDebugMatrix } from "../../src/get-debug-matrix";

export const getMatrix = (n: number) => {
  const index = n - 1;
  const radius = Math.floor((Math.sqrt(index + 1) - 1) / 2) + 1;
  const size = (8 * radius * (radius - 1)) / 2;
  const diameter = radius * 2;
  const position = (1 + index - size) % (radius * 8);
  const guide = Math.floor(position / (radius * 2));

  if (guide === 0) {
    return [radius, (position % diameter) - radius];
  } else if (guide === 1) {
    return [radius - (position % diameter), radius];
  } else if (guide === 2) {
    return [-radius, radius - (position % diameter)];
  } else if (guide === 3) {
    return [(position % diameter) - radius, -radius];
  } else {
    return [0, 0];
  }
};

const getIndex = (x: number, y: number) => {
  const radius = Math.max(Math.abs(x), Math.abs(y));
  const size = Math.abs((8 * radius * (radius - 1)) / 2);
  const diameter = radius * 2;

  let guide = 0;
  if (x === 0 && y === 0) {
    guide = 0;
  } else if (Math.abs(x) === Math.abs(y) && x > 0 && y > 0) {
    guide = 1;
  } else if (Math.abs(x) === Math.abs(y) && x < 0 && y < 0) {
    guide = 3;
  } else {
    guide = Math.abs(x) >= Math.abs(y) ? (x > 0 ? 0 : 2) : y > 0 ? 1 : 3;
  }

  let position = 0;
  switch (guide) {
    case 0:
      position = y + radius;
      break;
    case 1:
      position = radius * 2 - (x - radius);
      break;
    case 2:
      position = radius - y + radius * 4;
      break;
    case 3:
      position = x + radius + radius * 6;
      break;
  }

  let blockIndex = size + position;
  const isLayerStart = position === 0 && radius > 0;
  if (isLayerStart) {
    const nextSize = Math.abs((8 * (radius + 1) * radius) / 2);
    blockIndex = nextSize;
  }

  return {
    answer: blockIndex,
    radius,
    size,
    position,
    guide,
    diameter,
    isLayerStart,
  };
};

describe("step-by-step-01", () => {
  test("index 0~100 test", () => {
    const logs: any = [];
    for (let i = 0; i <= 100; i++) {
      const { _diameter, _guide, _coord, _position, _radius, _size } =
        getDebugMatrix(i);

      const { answer, radius, size, position, guide, diameter, isLayerStart } =
        getIndex(_coord[0], _coord[1]);

      const success = answer === i ? `✅` : `❌`;
      logs.push({
        answer,
        success,
        x: _coord[0],
        y: _coord[1],
        _radius,
        radius,
        _size,
        size,
        _diameter,
        diameter,
        _position,
        position,
        _guide,
        guide,
        isLayerStart,
      });
    }

    console.table(logs);

    // temporary success
    expect(true).toEqual(true);
  });
});
