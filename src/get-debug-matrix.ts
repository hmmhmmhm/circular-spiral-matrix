export const getDebugMatrix = (n: number) => {
  const index = n - 1;
  const _radius = Math.floor((Math.sqrt(index + 1) - 1) / 2) + 1;
  const _size = (8 * _radius * (_radius - 1)) / 2;
  const _diameter = _radius * 2;
  const _position = (1 + index - _size) % (_radius * 8);
  const _guide = Math.floor(_position / (_radius * 2));

  if (_guide === 0) {
    return {
      _coord: [_radius, (_position % _diameter) - _radius],
      _radius,
      _size,
      _diameter,
      _position,
      _guide,
    };
  } else if (_guide === 1) {
    return {
      _coord: [_radius - (_position % _diameter), _radius],
      _radius,
      _size,
      _diameter,
      _position,
      _guide,
    };
  } else if (_guide === 2) {
    return {
      _coord: [-_radius, _radius - (_position % _diameter)],
      _radius,
      _size,
      _diameter,
      _position,
      _guide,
    };
  } else if (_guide === 3) {
    return {
      _coord: [(_position % _diameter) - _radius, -_radius],
      _radius,
      _size,
      _diameter,
      _position,
      _guide,
    };
  } else {
    return { _coord: [0, 0], _radius, _size, _diameter, _position, _guide };
  }
};
