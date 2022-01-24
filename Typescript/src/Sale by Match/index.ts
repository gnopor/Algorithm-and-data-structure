function sockMerchant(n: number, ar: number[]): number {
  const sockPerColor: { [key: string]: number } = {};


  for (let item of ar) {
    const color = item.toString();
    sockPerColor[color] = sockPerColor[color] ? sockPerColor[color] + 1 : 1;
  }

  const numberOfPairs = Object.values(sockPerColor).reduce((prev: number, current: number) => {
    return current < 2 ? prev : prev + (current % 2 === 0 ? current / 2 : (current - 1) / 2);

  }, 0)

  return numberOfPairs as number
}

// test
// const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// const n = ar.length;
// console.log(sockMerchant(n, ar))

module.exports = sockMerchant