import { createHash } from "crypto";

export function crack(hash: string): string {
  const charactersOrderMap: Record<string, string> = {
    "0": "1",
    "1": "2",
    "2": "3",
    "3": "4",
    "4": "5",
    "5": "6",
    "6": "7",
    "7": "8",
    "8": "9",
    "9": "0",
  };

  let result = "00000";
  const maxCount = Math.pow(
    result.length,
    Object.keys(charactersOrderMap).length
  );

  const md5 = (text: string) => createHash("md5").update(text).digest("hex");
  const increment = (text: string): string => {
    const newResult = text.split("");

    for (let i = newResult.length - 1; i >= 0; i--) {
      const char = newResult[i];
      newResult[i] = charactersOrderMap[char];
      if (char == "9") continue;

      break;
    }

    return newResult.join("");
  };

  for (let i = 0; i <= maxCount; i++) {
    const current = increment(result);
    if (md5(current) == hash) return current;
    result = current;
  }

  return "";
}

const params = [
  { hash: "86aa400b65433b608a9db30070ec60cd" },
  { hash: "827ccb0eea8a706c4c34a16891f84e7b" },
];

for (let p of params) {
  console.log(`- input: ${JSON.stringify(p)} \n- ouput: ${crack(p.hash)}\n`);
}
