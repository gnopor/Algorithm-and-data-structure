export default function birthdayCakeCandles(candles: number[]): number {
  let amount = 0;
  const max = Math.max.apply(null, candles);
  candles.forEach((num) => num === max && amount++);
  return amount;
}

// const arr = [3, 2, 1, 3];
// console.log(birthdayCakeCandles(arr));
