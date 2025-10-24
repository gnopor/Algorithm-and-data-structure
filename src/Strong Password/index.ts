export default function minimumNumber(n: number, password: string): number {
  const difference = 6 - n;
  let remainingCharacters = 0;

  if (!/[a-z]+/.test(password)) {
    remainingCharacters += 1;
  }
  if (!/[A-Z]+/.test(password)) {
    remainingCharacters += 1;
  }
  if (!/[0-9]+/.test(password)) {
    remainingCharacters += 1;
  }
  if (!/[!@#$%^&*()\-+]+/.test(password)) {
    remainingCharacters += 1;
  }

  if (difference >= remainingCharacters) return difference;

  return remainingCharacters;
}

// Test
const password = "AUzs-nV";
const n = password.length;

console.log(minimumNumber(n, password));
