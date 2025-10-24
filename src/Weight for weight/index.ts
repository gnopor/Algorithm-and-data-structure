export default function orderWeight(strng: string): string {
  const weights = strng.split(/ +/g);
  const weightOfWeights: { weight: number; sum: number }[] = [];

  for (const weight of weights) {
    weightOfWeights.push({
      weight: +weight,
      sum: weight.split("").reduce((prev, current) => prev + +current, 0),
    });
  }

  weightOfWeights
    .sort((a, b) => a.sum - b.sum)
    .sort((a, b) =>
      a.sum == b.sum ? String(a.weight).localeCompare(String(b.weight)) : 0
    );

  return weightOfWeights.map((item) => item.weight || "").join(" ");
}

// Test

// const strng = "56 65 74 100 99 68 86 180 90";
// const strng = "103 123 4444 99 2000";
// const strng = "2000 10003 1234000 44444444 9999 11 11 22 123";
const strng = "0";
console.log(orderWeight(strng));
