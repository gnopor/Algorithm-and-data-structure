export default function strangeCounter(t: number): number {
  const initialValue = 3;

  let initialDisplayTime = 1;
  let initialDisplayValue = initialValue;

  let i = 1;
  let length = initialValue;
  while (true) {
    const nextItinialTime = initialDisplayTime + length;
    if (nextItinialTime > t) {
      break;
    }

    initialDisplayTime = nextItinialTime;
    length *= 2;
    i++;
  }

  for (let j = 1; j < i; j++) {
    initialDisplayValue *= 2;
  }

  let result = initialDisplayValue - (t - initialDisplayTime);
  return result;
}

// Test
const t = 4;

console.log(strangeCounter(21));
