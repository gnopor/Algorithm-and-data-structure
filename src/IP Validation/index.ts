export function isValidIP(str: string): boolean {
  const isIPSchema = /^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/.test(str);
  if (!isIPSchema) return false;

  for (let item of str.split(".")) {
    if (+item > 255) return false;
    if (item.length > 1 && item[0] == "0") return false;
  }

  return true;
}

// test
const inputs = [
  { str: "1.2.3.4" },
  { str: "123.45.67.89" },
  { str: "1.2.3" },
  { str: "1.2.3.4.5" },
  { str: "1e0.1e1.1e2.2e2" },
  { str: "123.405.067.089" },
];

for (let input of inputs) {
  console.log(
    `- input: ${JSON.stringify(input)} \n- ouput: ${isValidIP(input.str)}\n`
  );
}
