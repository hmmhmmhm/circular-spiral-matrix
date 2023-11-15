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
