function taumBday(b, w, bc, wc, z) {
  const bB = BigInt(b);
  const wB = BigInt(w);
  const bcB = BigInt(bc);
  const wcB = BigInt(wc);
  const zB = BigInt(z);

  let result;
  if (bcB > wcB + zB) {
    result = (bB + wB) * wcB + bB * zB;
  } else if (wcB > bcB + zB) {
    result = (bB + wB) * bcB + wB * zB;
  } else {
    result = bB * bcB + wB * wcB;
  }

  return result;
}

const b = 905844164;
const w = 493785831;
const bc = 81651073;
const wc = 116752762;
const z = 136082804;

console.log(taumBday(b, w, bc, wc, z));
