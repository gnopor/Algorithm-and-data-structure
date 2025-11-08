export class Kata {
  static getCount(str: string): number {
    let result: number = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) continue;
      result += 1;
    }

    return result;
  }
}
// Test
// const str = "yomama";
const str = "abracadabra";
console.log(Kata.getCount(str));
