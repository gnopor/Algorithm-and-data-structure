export default function flatlandSpaceStations(n: number, c: number[]) {
  if (n === c.length) {
    return 0;
  }

  const distances = [0];

  for (let i = 0; i < n; i += 1) {
    if (c.includes(i)) {
      continue;
    }

    const nearestDistance = c.reduce(
      (prev: number, current: number): number => {
        const d = Math.abs(current - i);
        return d < prev ? d : prev;
      },
      n
    );

    distances.push(nearestDistance);
  }

  return Math.max(...distances);
}

// Test
const n = 6;
const c = [0, 1, 2, 3, 4, 5];
console.log(flatlandSpaceStations(n, c));
