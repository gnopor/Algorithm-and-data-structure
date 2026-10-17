export function grabscrab(anagram: string, dictionary: string[]): string[] {
  const sort = (key: string) => key.split("").sort().join("");
  const sortedKey = sort(anagram);
  const result: string[] = [];

  for (let entry of dictionary) {
    if (sortedKey === sort(entry)) {
      result.push(entry);
    }
  }

  return result;
}

const params = [
  { anagram: "trisf", dictionary: ["first"] },
  { anagram: "oob", dictionary: ["bob", "baobab"] },
  { anagram: "ainstuomn", dictionary: ["mountains", "hills", "mesa"] },
  { anagram: "oolp", dictionary: ["donkey", "pool", "horse", "loop"] },
  { anagram: "ortsp", dictionary: ["sport", "parrot", "ports", "matey"] },
  { anagram: "ourf", dictionary: ["one", "two", "three"] },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${grabscrab(p.anagram, p.dictionary)}\n`,
  );
}
