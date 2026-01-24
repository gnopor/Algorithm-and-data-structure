export function duplicateEncode(word: string) {
  const newWord = word.toLowerCase();
  const countSort: Record<string, string> = {};
  const result = [];

  for (let char of newWord) {
    if (!countSort[char]) {
      countSort[char] = "(";
      continue;
    }
    countSort[char] = ")";
  }

  for (let char of newWord) {
    result.push(countSort[char]);
  }

  return result.join("");
}

const params: Record<string, string>[] = [
  {
    word: "din",
  },
  {
    word: "recede",
  },
  {
    word: "Success",
  },
  {
    word: "(( @",
  },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${duplicateEncode(p.word)}\n`,
  );
}
