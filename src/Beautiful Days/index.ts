export default function beautifulDays(i: number, j: number, k: number): number {
  let numBeautifulDays = 0;

  const reverse = (n: number) => +String(n).split("").reverse().join("");

  for (let d = i; d <= j; d++) {
    let difference = d - reverse(d);

    if (difference < 0) {
      difference = -difference;
    }

    if (difference % k !== 0) continue;

    numBeautifulDays++;
  }

  return numBeautifulDays;
}

// Test
// beautifulDays(20, 23, 6);
