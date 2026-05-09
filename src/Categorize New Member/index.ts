export function openOrSenior(data: number[][]): string[] {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open",
  );
}

const params = [
  {
    data: [
      [45, 12],
      [55, 21],
      [19, -2],
      [104, 20],
    ],
  },
  {
    data: [
      [3, 12],
      [55, 1],
      [91, -2],
      [53, 23],
    ],
  },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${openOrSenior(p.data)}\n`,
  );
}
