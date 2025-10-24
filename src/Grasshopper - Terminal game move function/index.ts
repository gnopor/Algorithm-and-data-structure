export function move(pos: number, roll: number): number {
  return pos + 2 * roll;
}

//  test
const pos = 3;
const roll = 6;
console.log(move(pos, roll));
