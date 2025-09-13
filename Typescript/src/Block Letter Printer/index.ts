const alpha = {
  " ": ["     ", "     ", "     ", "     ", "     ", "     ", "     "],
  a: [" AAA ", "A   A", "A   A", "AAAAA", "A   A", "A   A", "A   A"],
  b: ["BBBB ", "B   B", "B   B", "BBBB ", "B   B", "B   B", "BBBB "],
  c: [" CCC ", "C   C", "C    ", "C    ", "C    ", "C   C", " CCC "],
  d: ["DDDD ", "D   D", "D   D", "D   D", "D   D", "D   D", "DDDD "],
  e: ["EEEEE", "E    ", "E    ", "EEEEE", "E    ", "E    ", "EEEEE"],
  f: ["FFFFF", "F    ", "F    ", "FFFFF", "F    ", "F    ", "F    "],
  g: [" GGG ", "G   G", "G    ", "G GGG", "G   G", "G   G", " GGG "],
  h: ["H   H", "H   H", "H   H", "HHHHH", "H   H", "H   H", "H   H"],
  i: ["IIIII", "  I  ", "  I  ", "  I  ", "  I  ", "  I  ", "IIIII"],
  j: ["JJJJJ", "    J", "    J", "    J", "    J", "    J", "JJJJ "],
  k: ["K   K", "K  K ", "K K  ", "KK   ", "K K  ", "K  K ", "K   K"],
  l: ["L    ", "L    ", "L    ", "L    ", "L    ", "L    ", "LLLLL"],
  m: ["M   M", "MM MM", "M M M", "M   M", "M   M", "M   M", "M   M"],
  n: ["N   N", "NN  N", "N   N", "N N N", "N   N", "N  NN", "N   N"],
  o: [" OOO ", "O   O", "O   O", "O   O", "O   O", "O   O", " OOO "],
  p: ["PPPP ", "P   P", "P   P", "PPPP ", "P    ", "P    ", "P    "],
  q: [" QQQ ", "Q   Q", "Q   Q", "Q   Q", "Q Q Q", "Q  QQ", " QQQQ"],
  r: ["RRRR ", "R   R", "R   R", "RRRR ", "R R  ", "R  R ", "R   R"],
  s: [" SSS ", "S   S", "S    ", " SSS ", "    S", "S   S", " SSS "],
  t: ["TTTTT", "  T  ", "  T  ", "  T  ", "  T  ", "  T  ", "  T  "],
  u: ["U   U", "U   U", "U   U", "U   U", "U   U", "U   U", " UUU "],
  v: ["V   V", "V   V", "V   V", "V   V", "V   V", " V V ", "  V  "],
  w: ["W   W", "W   W", "W   W", "W W W", "W W W", "W W W", " W W "],
  x: ["X   X", "X   X", " X X ", "  X  ", " X X ", "X   X", "X   X"],
  y: ["Y   Y", "Y   Y", " Y Y ", "  Y  ", "  Y  ", "  Y  ", "  Y  "],
  z: ["ZZZZZ", "    Z", "   Z ", "  Z  ", " Z   ", "Z    ", "ZZZZZ"],
};

export function blockPrint(input: string): string {
  const trimedString = input.toLowerCase().trim();
  if (!trimedString) return "";
  const characters = trimedString.split("");
  const layers: string[] = [];

  for (let i = 0; i < 7; i++) {
    let layer: string[] = [];
    for (let j = 0; j < characters.length; j++) {
      const c = characters[j];
      let block = (alpha as Record<string, string[]>)[c][i];
      block = j == characters.length - 1 ? block.trimEnd() : block;
      layer.push(block);
    }

    layers.push(layer.join(" "));
  }

  return layers.join("\n");
}

//  test

const input = "hello WorlD";
// const input = "ABCDEFGHIJKLM";

console.log(blockPrint(input));
