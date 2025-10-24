export default function solve(s: string): number {
  const vowels: Record<string, boolean> = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let maxCount = 0;
  let count = 0;

  for (const character of s) {
    if (vowels[character]) {
      count += 1;
      continue;
    }

    if (count > maxCount) maxCount = count;
    count = 0;
  }

  return maxCount || count;
}

// Test

const s = "iiihoovaeaaaoougjyaw";
console.log(solve(s));
