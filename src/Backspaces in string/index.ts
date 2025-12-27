export function cleanString(s: string): string {
  if (s.length == 0) return "";

  const result: string[] = [];

  for (let char of s.split("")) {
    char != "#" ? result.push(char) : result.pop();
  }

  return result.join("");
}

// test
const params = [
  { s: "abc#d##c" },
  { s: "abc##d######" },
  { s: "#######" },
  { s: "" },
];

for (let p of params) {
  console.log(`- input: ${JSON.stringify(p)} \n- ouput: ${cleanString(p.s)}\n`);
}
