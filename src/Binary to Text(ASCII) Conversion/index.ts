export function binaryToString(binary: string) {
  const charCodes: number[] = [];

  const binaryToDecimal = (binaryString: string) =>
    binaryString
      .split("")
      .reduce(
        (prev, current, index) => prev + +current * Math.pow(2, 7 - index),
        0
      );

  for (let i = 0; i < binary.length; i += 8) {
    charCodes.push(binaryToDecimal(binary.slice(i, i + 8)));
  }

  return String.fromCharCode(...charCodes);
}

// Test
const binary = "01001011010101000100100001011000010000100101100101000101";
console.log(binaryToString(binary));
