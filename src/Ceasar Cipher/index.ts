export default function caesarCipher(s: string, k: number): string {
  const alphabetMap: Record<string, number> = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  const upperCaseAlphabetMap: Record<string, number> = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25,
  };

  const alphabet = Object.keys(alphabetMap);
  const upperCaseAlphabet = Object.keys(upperCaseAlphabetMap);

  let result = "";
  for (let character of s) {
    const isUpperCase = upperCaseAlphabetMap[character] != undefined;

    const index = isUpperCase
      ? upperCaseAlphabetMap[character]
      : alphabetMap[character];
    const newIndex = (index + k) % alphabet.length;
    const encryptedCharacter =
      (isUpperCase ? upperCaseAlphabet[newIndex] : alphabet[newIndex]) ||
      character;

    result += encryptedCharacter;
  }

  return result;
}

// Test
const s = "Always-Look-on-the-Bright-Side-of-Life";
const k = 5;
console.log(caesarCipher(s, k));
