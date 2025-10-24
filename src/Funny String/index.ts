export default function funnyString(s: string): string {
  const ordinalValues = s.split("").map((letter) => letter.charCodeAt(0));
  const simpleDifference: number[] = [];
  const reverseDifference: number[] = [];

  for (let i = 0; i < ordinalValues.length - 1; i++) {
    const j = ordinalValues.length - 1 - i;
    simpleDifference.push(Math.abs(ordinalValues[i] - ordinalValues[i + 1]));
    reverseDifference.push(Math.abs(ordinalValues[j] - ordinalValues[j - 1]));
  }

  return simpleDifference.join() === reverseDifference.join()
    ? "Funny"
    : "Not Funny";
}

// Test
const s = "bcxz";
console.log(funnyString(s));
