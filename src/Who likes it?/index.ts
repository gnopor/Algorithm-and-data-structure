export const likes = (a: string[]): string => {
  const length = a.length;
  let result = "no one likes this";

  if (length == 1) {
    result = `${a[0]} likes this`;
  } else if (length == 2) {
    result = `${a[0]} and ${a[1]} like this`;
  } else if (length == 3) {
    result = `${a[0]}, ${a[1]} and ${a[2]} like this`;
  } else if (length >= 4) {
    result = `${a[0]}, ${a[1]} and ${length - 2} others like this`;
  }

  return result;
};

const params = [
  { a: [] },
  { a: ["Peter"] },
  { a: ["Jacob", "Alex"] },
  { a: ["Max", "John", "Mark"] },
  { a: ["Alex", "Jacob", "Mark", "Max"] },
];

for (let p of params) {
  console.log(`- input: ${JSON.stringify(p)} \n- ouput: ${likes(p.a)}\n`);
}
