export default function flippingBits(n: number): number {
  let base2 = n.toString(2).padStart(32, "0");
  base2 = base2.replace(/1/g, "2");
  base2 = base2.replace(/0/g, "1");
  base2 = base2.replace(/2/g, "0");

  return parseInt(base2, 2);
}

// test
const n = 9;
console.log(flippingBits(n));
