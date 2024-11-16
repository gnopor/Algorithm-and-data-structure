export function toBase64(str: string): string {
  return new Buffer(str, "ascii").toString("base64");
}
export function fromBase64(str: string): string {
  return new Buffer(str, "base64").toString("ascii");
}

// test
const str = "Le koki est bon quand ca chauf.";
console.log(fromBase64(toBase64(str)));
