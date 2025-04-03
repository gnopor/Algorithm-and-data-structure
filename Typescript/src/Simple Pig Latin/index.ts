export default function pigIt(a: string): string {
  return a
    .split(" ")
    .map((v) => (/^[a-zA-Z]+$/.test(v) ? `${v.slice(1)}${v[0]}ay` : v))
    .join(" ");
}

// test

// const a = "Hello wold !";
const a = "Pig latin is cool";
console.log(pigIt(a));
