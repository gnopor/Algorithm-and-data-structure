export function blowCandles(str: string): number {
  const blow = (candles: number[], count: number): number => {
    let nextIndex = Infinity;
    for (let i = 0; i < candles.length; i++) {
      if (candles[i] == 0) continue;
      nextIndex = i;
      break;
    }

    const newCandles = candles.slice(nextIndex);

    if (newCandles.length == 0) return count;

    for (let i = 0; i < 3 && i < newCandles.length; i++) {
      if (newCandles[i] == 0) continue;
      newCandles[i] -= 1;
    }

    return blow(newCandles, count + 1);
  };

  return blow(str.split("").map(Number), 0);
}

// test

const str = "2113";
// const str = "1321";
// const str = "0323456";
console.log(blowCandles(str));
