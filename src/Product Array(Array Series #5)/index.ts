export function productArray(nums: number[]): number[] {
  const prods: number[] = [];
  let prod: number = 1;

  for (let num of nums) {
    prod *= num;
  }

  for (let num of nums) {
    prods.push(prod / num);
  }

  return prods;
}

// test

const nums = [10, 3, 5, 6, 2];
console.log(productArray(nums));
