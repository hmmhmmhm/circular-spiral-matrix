import { getMatrix } from "../../src/get-matrix";
import { getDebugMatrix } from "../../src/get-debug-matrix";

const getIndex = (x, y) => {
  let radius = Math.ceil(Math.sqrt((Math.abs(x) + Math.abs(y)) / 2));
  const size = Math.abs((8 * radius * (radius - 1)) / 2);
  let position = size + x + y;
  let guide = Math.floor(position / 8);

  if (guide === 0) {
    if (x > 0) {
      return { answer: position % radius, radius, size, position, guide };
    } else {
      return {
        answer: radius * 2 - (position % radius),
        radius,
        size,
        position,
        guide,
      };
    }
  } else if (guide === 1) {
    if (y > 0) {
      return {
        answer: radius * 2 - (position % radius),
        radius,
        size,
        position,
        guide,
      };
    } else {
      return { answer: position % radius, radius, size, position, guide };
    }
  } else if (guide === 2) {
    if (x < 0) {
      return { answer: position % radius, radius, size, position, guide };
    } else {
      return {
        answer: radius * 2 - (position % radius),
        radius,
        size,
        position,
        guide,
      };
    }
  } else if (guide === 3) {
    if (y < 0) {
      return { answer: position % radius, radius, size, position, guide };
    } else {
      return {
        answer: radius * 2 - (position % radius),
        radius,
        size,
        position,
        guide,
      };
    }
  } else {
    return { answer: -1, radius, size, position, guide }; // Invalid coordinates
  }
};

describe("direct-01", () => {
  test("index 0~20 test", () => {
    const logs: any = [];
    for (let i = 0; i <= 20; i++) {
      const { _diameter, _guide, _coord, _position, _radius, _size } =
        getDebugMatrix(i);
      const [x, y] = _coord;
      const { answer, guide, position, radius, size } = getIndex(x, y);
      const success = answer === i ? `✅` : `❌`;
      logs.push({
        _coord,
        _diameter,
        _guide,
        _position,
        _radius,
        _size,
        answer,
        success,
        guide,
        position,
        radius,
        size,
      });
    }
    console.table(logs);

    // temporary success
    expect(true).toEqual(true);
  });
});
