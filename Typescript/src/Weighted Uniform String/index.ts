function weightedUniformStrings(s: string, queries: number[]): string[] {
  const alphabets: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  const arr = s.split("");
  const weights: Array<number> = [alphabets[arr[0]]];
  let multiply = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      multiply += 1;
    } else {
      multiply = 0;
    }

    weights.push(alphabets[arr[i]] + multiply * alphabets[arr[i]]);
  }

  return queries.map((num) => (weights.includes(num) ? "Yes" : "No"));
}

// Test
const s = "abbcccdddd";
const queris = [1, 7, 5, 4, 15];
console.log(weightedUniformStrings(s, queris));
