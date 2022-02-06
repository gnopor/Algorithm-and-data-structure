//  With help of the discussion tab
// handle each case directly

export default function stockmax(prices: number[]): number {
  let profit = 0;
  let maxPrice = prices[prices.length - 1];

  for (let i = prices.length - 2; i >= 0; i--) {
    if (prices[i] <= maxPrice) {
      profit += maxPrice - prices[i];
    }

    if (prices[i] > maxPrice) {
      maxPrice = prices[i];
    }
  }

  return profit;
}

// // Test
// const prices = [1, 3, 1, 2];
// console.log(stockmax(prices));
