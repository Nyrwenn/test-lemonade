export const calculate = (
  minA: number,
  maxA: number,
  minB: number,
  maxB: number
): number[] => {
  let interval: number[] = [];

  if (minB >= minA && minB < maxA) {
    interval.push(minB);
  } else {
    if (minA > minB && minA < maxB) {
      interval.push(minA);
    } else {
      return [0, 0];
    }
  }

  if (maxB > minA && maxB <= maxA) {
    interval.push(maxB);
  } else {
    if (maxB > maxA && minA < maxB) {
      interval.push(maxA);
    } else {
      interval.push(0);
      return [0, 0];
    }
  }
  return interval;
};
