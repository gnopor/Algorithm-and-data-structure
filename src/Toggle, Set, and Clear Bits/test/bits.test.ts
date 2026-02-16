import {
  toggleBit,
  setBit,
  clearBit,
  isBitSet,
  setMultipleBits,
  clearMultipleBits,
  toggleMultipleBits,
} from "../index";

describe("Toggle, Set, and Clear Bits (Bit Manipulation Basics)", () => {
  it("Should perform the bitwise operations", () => {
    const setup = [
      { params: { n: 5, position: 1 }, output: 7, function: toggleBit },
      {
        params: { n: 156430393, position: 31 },
        output: -1991053255,
        function: setBit,
      },
      { params: { n: 7, position: 1 }, output: 5, function: clearBit },
      {
        params: { n: 497871808, position: 5 },
        output: false,
        function: isBitSet,
      },
      { params: { n: 5, mask: 3 }, output: 7, function: setMultipleBits },
      {
        params: { n: 7, mask: 2 },
        output: 5,
        function: clearMultipleBits,
      },
      { params: { n: 5, mask: 3 }, output: 6, function: toggleMultipleBits },
    ];

    for (let { params, output, function: f } of setup) {
      expect(f(params.n, params.position || params.mask || 0)).toBe(output);
    }
  });
});
