export function inArray(a1: string[], a2: string[]): string[] {
  const arrayString = a2.join(",");
  const result: string[] = [];

  for (let item of a1) {
    if (new RegExp(item).test(arrayString)) {
      result.push(item);
    }
  }

  return result.sort();
}

const params: Record<string, string[]>[] = [
  {
    a1: ["arp", "live", "strong"],
    a2: ["lively", "alive", "harp", "sharp", "armstrong"],
  },
  {
    a1: ["tarp", "mice", "bull"],
    a2: ["lively", "alive", "harp", "sharp", "armstrong"],
  },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${inArray(p.a1, p.a2)}\n`
  );
}
