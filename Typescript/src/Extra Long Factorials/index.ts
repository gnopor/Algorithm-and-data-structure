function extraLongFactorials(n: number): void {
  const factorial = (num: bigint | number): bigint => {
    const newNum = BigInt(num);

    return newNum === BigInt(0)
      ? BigInt(1)
      : newNum * factorial(newNum - BigInt(1));
  };

  console.log(factorial(n).toString());
}

// Test

const n = 25;
extraLongFactorials(n);

module.exports = extraLongFactorials;
