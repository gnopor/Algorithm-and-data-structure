export default function permutationEquation(p: number[]): number[] {
  const permutationMap: { [key: string]: number } = {};
  const y: number[] = [];

  for (let i = 1; i <= p.length; i++) {
    permutationMap[p[i - 1]] = i;
  }

  for (let i = 1; i <= p.length; i++) {
    y.push(permutationMap[permutationMap[i]]);
  }

  return y;
}

// // test ------
// const p = [4, 3, 5, 1, 2];
// console.log(permutationEquation(p));
