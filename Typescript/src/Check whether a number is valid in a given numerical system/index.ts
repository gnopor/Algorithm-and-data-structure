export function validateBase(num: string, base: number): boolean {
  const maxToBaseMap: Record<string, number> = {
    "0": 2,
    "1": 2,
    "2": 3,
    "3": 4,
    "4": 5,
    "5": 6,
    "6": 7,
    "7": 8,
    "8": 9,
    "9": 10,
    A: 11,
    B: 12,
    C: 13,
    D: 14,
    E: 15,
    F: 16,
    G: 17,
    H: 18,
    I: 19,
    J: 20,
    K: 21,
    L: 22,
    M: 23,
    N: 24,
    O: 25,
    P: 26,
    Q: 27,
    R: 28,
    S: 29,
    T: 30,
    U: 31,
    V: 32,
    W: 33,
    X: 34,
    Y: 35,
    Z: 36,
  };

  const inputMaxValue = num.split("").sort()[num.length - 1];
  const inputMaxValueBase = maxToBaseMap[inputMaxValue];

  return inputMaxValueBase <= base;
}
//  test

// const num: string = "ABC2356";
// const base: number = 9;

const num = "EG";
const base = 16;
console.log(validateBase(num, base));
