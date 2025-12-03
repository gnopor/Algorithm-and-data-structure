export default function biggerIsGreater(w: string): string {
  let result = "no answer";

  const splitedWord = w.split("");

  if (splitedWord[w.length - 1] > splitedWord[w.length - 2]) {
    const last = splitedWord[w.length - 1];
    splitedWord[w.length - 1] = splitedWord[w.length - 2];
    splitedWord[w.length - 2] = last;
    return splitedWord.join("");
  }

  for (let i = splitedWord.length - 1; i >= 0; i = i - 1) {
    //   find the middle man
    if (i === 0) {
      return result;
    }

    if (splitedWord[i] <= splitedWord[i - 1]) {
      continue;
    }

    // sort the substring in front
    const middleMan = splitedWord[i - 1];
    const subString = splitedWord.splice(i).sort();

    //   swipe characters
    let sufixPart: Array<string> = [];
    for (let j = 0; j < subString.length; j++) {
      if (subString[j] > middleMan) {
        const newStarter = subString[j];
        subString[j] = middleMan;
        sufixPart = [newStarter, ...subString.sort()];
        break;
      }
    }

    //  merge result
    result = splitedWord
      .slice(0, splitedWord.length - 1)
      .concat(sufixPart)
      .join("");

    break;
  }

  return result;
}

// Test
// const w = "dcbb";
// console.log(biggerIsGreater(w));
