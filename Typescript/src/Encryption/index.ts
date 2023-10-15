export default function encryption(s: string): string {
  const characters = s.split(" ").join("");
  const l = characters.length;
  let rows = Math.floor(Math.sqrt(l));
  const columns = Math.ceil(Math.sqrt(l));
  if (rows * columns < l) rows += 1;

  const arr: string[] = [];
  for (let i = 0; i < rows; i++) {
    arr.push(characters.slice(i * columns, i * columns + columns));
  }

  let result = "";
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (!arr[j][i]) break;
      result += arr[j][i];
    }
    if (i != columns - 1) result += " ";
  }

  return result;
}

// Test
const s = "feedthedog";
console.log(encryption(s));
