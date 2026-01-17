export function backwardsPrime(start: number, stop: number): number[] {
  const result: number[] = [];
  const isPrime = (num: number): boolean => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false;
    }

    return true;
  };

  const reverse = (num: number): string =>
    String(num).split("").reverse().join("");

  for (let i = start; i <= stop; i++) {
    const num1 = i;
    const num2 = reverse(num1);
    if (String(num1) == num2) continue;
    if (isPrime(num1) && isPrime(+num2)) {
      result.push(num1);
    }
  }

  return result;
}

const params: Record<string, number>[] = [
  {
    start: 70000,
    stop: 70245,
  },
  {
    start: 109500,
    stop: 109700,
  },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${backwardsPrime(p.start, p.stop)}\n`,
  );
}
