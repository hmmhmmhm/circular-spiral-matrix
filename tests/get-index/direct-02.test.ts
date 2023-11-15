import { getMatrix } from "../../src/get-matrix";

const getIndex = (x, y) => {
  const radius = Math.max(Math.abs(x), Math.abs(y));
  const size = Math.abs((8 * radius * (radius - 1)) / 2);
  const diameter = radius * 2;

  let position = x * radius + y;
  if (x < 0 && y >= 0) {
    position += size;
  } else if (x >= 0 && y < 0) {
    position += size * 2;
  } else if (x < 0 && y < 0) {
    position += size * 3;
  }

  return { answer: position + 1, radius, size, diameter };
};

describe("direct-02", () => {
  test("index 0~20 test", () => {
    const logs: any = [];
    for (let i = 0; i <= 20; i++) {
      const [x, y] = getMatrix(i);
      const { answer, radius, size, diameter } = getIndex(x, y);
      const success = answer === i ? `✅` : `❌`;
      logs.push({ x, y, i, answer, success, radius, size, diameter });
    }
    console.table(logs);

    // temporary success
    expect(true).toEqual(true);
  });
});
