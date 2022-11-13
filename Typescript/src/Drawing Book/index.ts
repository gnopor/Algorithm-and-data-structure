export default function pageCount(n: number, p: number) {
  const numPages = Math.floor(n / 2);
  let frontCount = 0;
  let backCount = 0;

  for (let i = 0; i <= numPages; i++) {
    if (i * 2 <= p && i * 2 + 1 >= p) {
      break;
    }
    frontCount += 1;
  }

  if (frontCount === 0) return 0;

  for (let i = numPages; i >= 0; i--) {
    if (i * 2 <= p && i * 2 + 1 >= p) {
      break;
    }
    backCount += 1;
  }

  return frontCount > backCount ? backCount : frontCount;
}

// // test
// const n = 5;
// const p = 4;

// console.log(pageCount(n, p));
