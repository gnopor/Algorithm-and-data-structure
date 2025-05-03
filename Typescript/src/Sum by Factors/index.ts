// https://byjus.com/maths/how-to-find-prime-numbers/

export function sumOfDivided(lst: number[]): number[][] {
  // base primes up to 50
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  const isPrime = (num: number) => {
    if (num <= primes[primes.length - 1]) return primes.includes(num);

    // for big numbers
    const strNum = num.toString();

    // step 1: check last digit
    const lastDigit = +strNum.slice(-1);
    if ([0, 2, 4, 5, 6, 8].includes(lastDigit)) return false;

    // step 2: check sum
    let sum = 0;
    for (let digit of strNum) {
      sum += +digit;
    }
    if (sum % 3 == 0) return false;

    // step 3: check integers below square root
    const sqrt = Math.sqrt(num);
    for (let p of primes) {
      if (p > sqrt) break;
      if (num % p == 0) return false;
    }

    primes.push(num);
    return true;
  };

  const countSort: Record<string, number> = {};

  lst.sort((a, b) => Math.abs(b) - Math.abs(a));
  const max = Math.abs(lst[0]);

  for (let i = 2; i <= max; i++) {
    if (!isPrime(i)) continue;
    for (let item of lst) {
      if (item % i != 0) continue;
      if (!countSort[i]) {
        countSort[i] = 0;
      }

      countSort[i] += item;
    }
  }

  const result: number[][] = [];
  for (let [key, value] of Object.entries(countSort)) {
    result.push([+key, value]);
  }
  return result;
}

// test
// const I = [12, 15];
// const I = [775, 128, 501, -854, 856, -891, 580, 33, 338, 856, 637, 925, 525];
// const I = [-29804, -4209, -28265, -72769, -31744];
// const I = [977, 929, 327, 202, 659, -780, 464, 187, 882, 464, -709];
const I = [
  881, -903, -432, 162, -58, 113, -919, 358, -589, 316, 44, 588, -415, 525,
];
console.log(sumOfDivided(I));
