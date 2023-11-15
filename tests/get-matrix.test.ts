import { getMatrix } from "../src/get-matrix";
describe("getMatrix", () => {
  test("index 0 is [0,0]", () => {
    expect(getMatrix(0)).toEqual([0, 0]);
  });
});
