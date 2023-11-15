import { getMatrix } from "../square/get-matrix";

export const getTempMatrix = (): {
  x: number;
  y: number;
  r: number;
}[] => {
  const getSpiral = (r: number) => {
    const result = [];
    for (let i = 0; i < (r * 2 + 1) * (r * 2 + 1); i++) {
      const [x, y] = getMatrix(i); // 계산 함수
      const position = Math.sqrt(x * x + y * y); // 계산 함수에 내장되야할 수식
      if (Math.ceil(position) === r)
        // 계산 함수에 내장되야할 검증
        result.push({ x, y, r });
    }
    return result;
  };

  // 식의 정답 대조를 위해 정답을 하나하나 직접 계산합니다.
  const spiral = [
    ...getSpiral(0),
    ...getSpiral(1),
    ...getSpiral(2),
    ...getSpiral(3),
    ...getSpiral(4),
    ...getSpiral(5),
    ...getSpiral(6),
    ...getSpiral(7),
    ...getSpiral(8),
    ...getSpiral(9),
    ...getSpiral(10),
    ...getSpiral(11),
    ...getSpiral(12),
    ...getSpiral(13),
  ];

  return spiral;
};
