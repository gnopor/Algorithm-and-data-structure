export function validParentheses(parenStr: string): boolean {
  const characters = parenStr.split("");
  const openningPair = "(";
  const closingPair = ")";

  if (characters.length == 0) return true;
  if (
    characters[0] != openningPair ||
    characters[characters.length - 1] != closingPair
  ) {
    return false;
  }

  const stack: string[] = [];
  for (let char of characters) {
    if (char == openningPair) {
      stack.push(char);
      continue;
    }

    if (stack.length == 0 || stack[stack.length - 1] != openningPair) {
      return false;
    }

    stack.pop();
  }

  return stack.length == 0;
}

// Test
const parenStr = "(())((()())())";
console.log(validParentheses(parenStr));
