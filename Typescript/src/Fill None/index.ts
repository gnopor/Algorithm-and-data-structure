// Fill method:
//   -1: backwards
//    0: nearest
//    1: forwards

export default function fill(
  arr: Array<number | undefined>,
  method = 0
): Array<number | undefined> {
  if (arr.length < 2) return arr;

  const backwards = (list: (number | undefined)[]): (number | undefined)[] => {
    const result = [...list];

    for (let i = result.length - 1; i >= 0; i--) {
      if (typeof list[i] == "number") continue;
      result[i] = result[i + 1];
    }

    return result;
  };
  const nearest = (list: (number | undefined)[]): (number | undefined)[] => {
    const result = new Array<number | undefined>(list.length).fill(undefined);

    let nullCount = 0;
    for (let i = 0; i < list.length; i++) {
      if (typeof list[i] == "number") {
        result[i] = list[i];
        continue;
      }
      const prev = list[i - 1];
      const next = list[i + 1];
      if (typeof prev != "undefined" && typeof next != "undefined") {
        result[i] = prev < next ? prev : next;
        continue;
      }
      if (typeof prev == "undefined" && typeof next != "undefined") {
        result[i] = next;
        continue;
      }
      if (typeof prev != "undefined" && typeof next == "undefined") {
        result[i] = prev;
        continue;
      }
      nullCount += 1;
      result[i] = undefined;
    }

    return nullCount > 0 ? nearest(result) : result;
  };

  const forwards = (list: (number | undefined)[]): (number | undefined)[] => {
    const result = [...list];

    for (let i = 0; i < result.length; i++) {
      if (typeof result[i] == "number") continue;

      result[i] = result[i - 1];
    }

    return result;
  };

  const methods: Record<
    string,
    (list: (number | undefined)[]) => (number | undefined)[]
  > = {
    "-1": backwards,
    0: nearest,
    1: forwards,
  };

  return methods[String(method)](arr);
}

// Test
// const arr = [undefined, 1, undefined, undefined, undefined, 2, undefined];
// const arr = [4, 5, undefined, undefined, undefined, 2, undefined, 2];
const arr = [3, 3, undefined, 1, 1, undefined, undefined, 9, undefined];
const method = 0;

console.log(fill(arr, method));
