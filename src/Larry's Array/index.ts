export default function larrysArray(A: number[]): string {
  let arr = A;
  let updated = false;

  if (!(arr.includes(1) && arr.includes(2) && arr.includes(3))) {
    return "NO";
  }

  // find the value '1'
  while (arr[0] !== 1) {
    updated = true;
    let a: number, b: number, c: number;
    if (arr[1] === 1) {
      a = arr[1];
      b = arr[2];
      c = arr[0];
      arr[0] = a;
      arr[1] = b;
      arr[2] = c;
      continue;
    }

    const index = arr.findIndex((item) => item === 1);
    a = arr[index - 1];
    b = arr[index];
    c = arr[index - 2];
    arr[index - 2] = a;
    arr[index - 1] = b;
    arr[index] = c;
  }

  // build index map
  const numberMap = arr.reduce(
    (prev: { [key: number]: number }, current, i) => {
      prev[current] = i;
      return prev;
    },
    {}
  );

  // find others part
  const swipeOnce = (i: number) => {
    let a = arr[i];
    let b = arr[i + 1];
    let c = arr[i - 1];
    arr[i - 1] = a;
    arr[i] = b;
    arr[i + 1] = c;
    numberMap[a] = i - 1;
    numberMap[b] = i;
    numberMap[c] = i + 1;
  };

  const swipeTwice = (i: number) => {
    let a = arr[i];
    let b = arr[i - 2];
    let c = arr[i - 1];
    arr[i - 2] = a;
    arr[i - 1] = b;
    arr[i] = c;
    numberMap[a] = i - 2;
    numberMap[b] = i - 1;
    numberMap[c] = i;
  };

  for (let i = 0; i < arr.length - 3; i++) {
    if (!numberMap[arr[i] + 1]) {
      return "NO";
    }

    while (arr[i + 1] !== arr[i] + 1) {
      updated = true;
      numberMap[arr[i] + 1] - i === 2
        ? swipeOnce(numberMap[arr[i] + 1])
        : swipeTwice(numberMap[arr[i] + 1]);
    }
  }

  return updated &&
    arr[arr.length - 3] < arr[arr.length - 2] &&
    arr[arr.length - 2] < arr[arr.length - 1]
    ? "YES"
    : "NO";
}

// // Test
// const A = [1, 2, 3, 5, 4];
// console.log(larrysArray(A));
