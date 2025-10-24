export default function balancedSums(arr: number[]): string {
  if (arr.length == 1) return "YES";

  const leftToRightCount: number[] = [];
  const rightToLeftCount: number[] = [];
  const leftToRightMap: Record<string, number> = { 0: -1 };
  const rightToLeftMap: Record<string, number> = { 0: arr.length };

  for (let i = 0; i < arr.length; i++) {
    const j = arr.length - i - 1;

    const left = (leftToRightCount[leftToRightCount.length - 1] || 0) + arr[i];
    const right = (rightToLeftCount[rightToLeftCount.length - 1] || 0) + arr[j];

    leftToRightCount.push(left);
    rightToLeftCount.push(right);

    leftToRightMap[left] = i;
    rightToLeftMap[right] = j;
  }

  for (const [key, value] of Object.entries(leftToRightMap)) {
    if (rightToLeftMap[key] == undefined) continue;
    if (value + 2 != rightToLeftMap[key]) continue;

    return "YES";
  }

  return "NO";
}

// test
const arr = [0, 0, 2, 0];
console.log(balancedSums(arr));
