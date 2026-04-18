export function solution(str: string, ending: string): boolean {
  return str.slice(str.length - ending.length) == ending;
}

const params = [
  { str: "abc", ending: "bc" },
  { str: "abc", ending: "d" },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${solution(p.str, p.ending)}\n`,
  );
}
