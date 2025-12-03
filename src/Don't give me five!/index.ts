export function dontGiveMeFive(start: number, end: number): number {
  let result = 0;

  for (let i = start; i <= end; i++) {
    if (i.toString().includes("5")) continue;

    result += 1;
  }

  return result;
}

// Test
const start = 4;
const end = 17;
console.log(dontGiveMeFive(start, end));
