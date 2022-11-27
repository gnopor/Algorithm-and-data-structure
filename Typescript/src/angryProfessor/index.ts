export default function angryProfessor(k: number, a: number[]): string {
  let onTime = 0;

  for (let time of a) {
    if (time <= 0) {
      onTime += 1;
    }

    if (onTime >= k) {
      return "NO";
    }
  }

  return "YES";
}

// // test ------
// const k = 2;
// const a = [0, -1, 2, 1];
// console.log(angryProfessor(k, a));
