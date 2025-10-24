export default function maximumToys(prices: number[], k: number): number {
  let toysCount = 0;
  let totalPrice = 0;

  prices.sort((a, b) => a - b);
  for (let price of prices) {
    totalPrice += price;

    if (totalPrice > k) {
      return toysCount;
    }

    toysCount += 1;
  }

  return toysCount;
}

// test
const prices = [1, 2, 3, 4];
const k = 7;
console.log(maximumToys(prices, k));
