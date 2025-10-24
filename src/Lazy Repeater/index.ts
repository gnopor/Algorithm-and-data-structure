export default function makeLooper(str: string): () => string {
  const characters: string[] = str.split("");
  let count = 0;

  return () => characters[count++ % str.length];
}

// Test

const str = "abc";

const looper = makeLooper(str);
console.log(looper());
console.log(looper());
console.log(looper());
console.log(looper());
console.log(looper());
console.log(looper());
