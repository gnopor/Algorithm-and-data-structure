export default function ipsBetween(start: string, end: string): number {
  const [s1, s2, s3, s4] = start.split(".").map((v) => +v);
  const [e1, e2, e3, e4] = end.split(".").map((v) => +v);

  const startCountFromZero =
    s1 * Math.pow(256, 3) +
    s2 * Math.pow(256, 2) +
    s3 * Math.pow(256, 1) +
    s4 * Math.pow(256, 0);

  const endCountFromZero =
    e1 * Math.pow(256, 3) +
    e2 * Math.pow(256, 2) +
    e3 * Math.pow(256, 1) +
    e4 * Math.pow(256, 0);

  return endCountFromZero - startCountFromZero;
}

// Test

// const start = "10.0.0.0";
// const end = "10.0.0.50";
// const start = "10.0.0.0";
// const end = "10.0.1.0";
const start = "20.0.0.10";
const end = "20.0.1.0";
console.log(ipsBetween(start, end));
