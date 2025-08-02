export function reverseWords(str: string): string {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// test

// const str = "This is an example!";
const str = "double spaces";
console.log(reverseWords(str));
