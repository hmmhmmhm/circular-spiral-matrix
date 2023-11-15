const getIndex = (x: number, y: number) => {
  const radius = Math.max(Math.abs(x), Math.abs(y));
  const size = Math.abs((8 * radius * (radius - 1)) / 2);

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

  return blockIndex;
};
