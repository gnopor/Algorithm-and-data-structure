const toBinary = (n: number, length = 32): string[] =>
  n.toString(2).padStart(length, "0").split("").reverse();
const toDecimal = (num: string[]): number => {
  const signed_32_bit_binary_limit = Math.pow(2, 31);
  const result = parseInt(num.reverse().join(""), 2);

  return signed_32_bit_binary_limit > result
    ? result
    : result - Math.pow(2, 32);
};

// 1. Toggle a bit at a given position
export const toggleBit = (n: number, position: number): number => {
  const binary = toBinary(n);
  binary[position] = binary[position] == "0" ? "1" : "0";
  return toDecimal(binary);
};

// 2. Set a bit at a given position
export const setBit = (n: number, position: number): number => {
  const binary = toBinary(n);
  binary[position] = "1";
  return toDecimal(binary);
};

// 3. Clear a bit at a given position
export const clearBit = (n: number, position: number): number => {
  const binary = toBinary(n);
  binary[position] = "0";
  return toDecimal(binary);
};

// 4. Check if a bit at a given position is set
export const isBitSet = (n: number, position: number): boolean => {
  const binary = toBinary(n);
  return binary[position] == "1";
};

// 5. Set multiple bits using a mask
export const setMultipleBits = (n: number, mask: number): number => {
  const binary1 = toBinary(n);
  const binary2 = toBinary(mask, binary1.length);
  for (let i = 0; i < binary2.length; i++) {
    binary1[i] = [binary1[i], binary2[i]].includes("1") ? "1" : "0";
  }
  return toDecimal(binary1);
};

// 6. Clear multiple bits using a mask
export const clearMultipleBits = (n: number, mask: number): number => {
  const binary1 = toBinary(n);
  const binary2 = toBinary(mask, binary1.length).map((item) =>
    item == "1" ? "0" : "1",
  );
  for (let i = 0; i < binary2.length; i++) {
    binary1[i] = binary1[i] == binary2[i] && binary1[i] == "1" ? "1" : "0";
  }
  return toDecimal(binary1);
};

// 7. Toggle multiple bits using a mask
export const toggleMultipleBits = (n: number, mask: number): number => {
  const binary1 = toBinary(n);
  const binary2 = toBinary(mask, binary1.length);
  for (let i = 0; i < binary2.length; i++) {
    binary1[i] =
      Array.from(new Set([binary1[i], binary2[i]])).length == 2 ? "1" : "0";
  }
  return toDecimal(binary1);
};

// test
const setup = [
  { params: { n: 47242098, position: 30 }, function: toggleBit },
  { params: { n: 156430393, position: 31 }, function: setBit },
  { params: { n: 7, position: 1 }, function: clearBit },
  { params: { n: 497871808, position: 5 }, function: isBitSet },
  { params: { n: 5, mask: 3 }, function: setMultipleBits },
  { params: { n: 194161913, mask: 358874833 }, function: clearMultipleBits },
  { params: { n: 5, mask: 3 }, function: toggleMultipleBits },
];

for (let s of setup) {
  console.log(
    `- input: ${JSON.stringify(s)} \n- ouput: ${s.function(s.params.n, s.params.position || s.params.mask || 0)}\n`,
  );
}
