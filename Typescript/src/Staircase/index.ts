function staircase(n: number): string | void {
  let result = "";
  for (let i = 1; i <= n; i++) {
    const string = `${" ".repeat(n - i)}${"#".repeat(i)}\n`;
    result += string;
  }
  console.log(result);
  return result;
}

module.exports = staircase;
