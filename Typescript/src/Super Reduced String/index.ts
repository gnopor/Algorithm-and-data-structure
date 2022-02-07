function superReducedString(s: string): string {
  if (s.length === 1) {
    return s;
  }

  if (s.trim() === "") {
    return "Empty String";
  }

  let stringArr = s.split("");
  let arr = [stringArr[0]];
  for (let i = 1; i < stringArr.length; i++) {
    if (stringArr[i] === arr[arr.length - 1]) {
      arr.pop();
      continue;
    }
    arr.push(stringArr[i]);
  }

  console.log({ arr });
  if (arr.length === stringArr.length) {
    return s;
  }

  return superReducedString(arr.join(""));
}

// Test
// const s = "baab";
// console.log(superReducedString(s));
