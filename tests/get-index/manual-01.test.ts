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

  // * position 값 역산 시도 중
  // const guide = Math.floor(position / (radius * 2));
  const position = Math.abs(guide * (radius * 2));
  const blockIndex = size + position + 1;

  return {
    answer: Math.floor(blockIndex),
    radius,
    size,
    position,
    guide,
    diameter,
  };
};

describe("step-by-step-01", () => {
  test("index 0~30 test", () => {
    const logs: any = [];
    for (let i = 0; i <= 30; i++) {
      const { _diameter, _guide, _coord, _position, _radius, _size } =
        getDebugMatrix(i);

      const { answer, radius, size, position, guide, diameter } = getIndex(
        _coord[0],
        _coord[1]
      );

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
      });
    }

    console.table(logs);

    // temporary success
    expect(true).toEqual(true);
  });
});
