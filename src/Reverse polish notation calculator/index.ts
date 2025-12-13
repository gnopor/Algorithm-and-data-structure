export function calc(expr: string): number {
  if (!expr.trim()) return 0;

  const computeResult = (expressions: string[]): number => {
    if (expressions.length == 1) return +expressions[0];
    const result: string[] = [];
    const signs: Record<string, (x: number, y: number) => string> = {
      "+": (x, y) => String(x + y),
      "-": (x, y) => String(x - y),
      "*": (x, y) => String(x * y),
      "/": (x, y) => String(x / y),
    };

    for (let i = 2; i < expressions.length; i++) {
      const currentExpression = expressions[i];
      const expression1 = +expressions[i - 2];
      const expression2 = +expressions[i - 1];
      if (
        !(
          typeof +expression1 == "number" &&
          typeof +expression2 == "number" &&
          currentExpression in signs
        )
      ) {
        continue;
      }

      const sliceLimit = i - 2 < 0 ? 0 : i - 2;
      result.push(...expressions.slice(0, sliceLimit));
      result.push(signs[currentExpression](expression1, expression2));
      result.push(...expressions.slice(i + 1));

      break;
    }

    return computeResult(result);
  };
  return computeResult(expr.split(" "));
}

// test
// const expr = "5 1 2 + 4 * + 3 -";
const expr = "3.3";
console.log(calc(expr));
