export function findTheNotFittingElement(
  series: (boolean | number | string)[]
): boolean | number | string {
  const mapTypeToItems: Record<string, (boolean | number | string)[]> = {};
  const mapItemToCount: Record<string, number> = {};

  for (let item of series) {
    // handle type map
    const type = typeof item;
    if (!mapTypeToItems[type]) {
      mapTypeToItems[type] = [];
    }
    mapTypeToItems[type].push(item);

    // handle count map
    const key = String(item);
    if (!mapItemToCount[key]) {
      mapItemToCount[key] = 0;
    }
    mapItemToCount[key] += 1;
  }

  // handle different types
  const types = Object.keys(mapTypeToItems);
  if (types.length > 1) {
    let smallestType = types[0];
    let smallestCount = mapTypeToItems[smallestType].length;
    for (let i = 1; i < types.length; i++) {
      const type = types[i];
      const count = mapTypeToItems[type].length;
      if (count < smallestCount) {
        smallestCount = count;
        smallestType = type;
      }
    }

    return mapTypeToItems[smallestType][0];
  }

  // handle similar types
  // 1 handle strings[only string | cases > smallest set]
  if (typeof series[0] == "string") {
    const mapCases: {
      uppercase: string[];
      lowercase: string[];
      unknown: string[];
    } = {
      uppercase: [],
      lowercase: [],
      unknown: [],
    };

    for (let i = 0; i < series.length; i++) {
      const characters = String(series[i]);
      if (/[A-Z]/.test(characters)) {
        mapCases.uppercase.push(characters);
        continue;
      }
      if (/[a-z]/.test(characters)) {
        mapCases.lowercase.push(characters);
        continue;
      }

      mapCases.unknown.push(characters);
    }

    if (mapCases.unknown.length == 1) {
      return mapCases.unknown[0];
    }
    if (mapCases.uppercase.length == 1) {
      return mapCases.uppercase[0];
    }
    if (mapCases.lowercase.length == 1) {
      return mapCases.lowercase[0];
    }

    for (let [key, value] of Object.entries(mapItemToCount)) {
      if (value == 1) {
        return key;
      }
    }
  }

  // 2 handle integers[sign > modulo > smallest set]
  if (typeof series[0] == "number") {
    const mapModuloResultToItems: { even: number[]; odd: number[] } = {
      even: [],
      odd: [],
    };
    const mapSignToItems: { positives: number[]; negatives: number[] } = {
      positives: [],
      negatives: [],
    };

    for (let i = 0; i < series.length; i++) {
      const item = Number(series[i]);
      const isEven = item % 2 == 0;
      const isNegative = item < 0;

      mapModuloResultToItems[isEven ? "even" : "odd"].push(item);
      mapSignToItems[isNegative ? "negatives" : "positives"].push(item);
    }

    if (mapModuloResultToItems.even.length == 1) {
      return mapModuloResultToItems.even[0];
    }

    if (mapModuloResultToItems.odd.length == 1) {
      return mapModuloResultToItems.odd[0];
    }

    if (mapSignToItems.positives.length == 1) {
      return mapSignToItems.positives[0];
    }

    if (mapSignToItems.negatives.length == 1) {
      return mapSignToItems.negatives[0];
    }

    for (let [key, value] of Object.entries(mapItemToCount)) {
      if (value == 1) {
        return +key;
      }
    }
  }

  // 3 handle bollean(smallest set)
  let result = true;
  for (let [key, value] of Object.entries(mapItemToCount)) {
    if (value == 1) {
      result = key == "true";
      break;
    }
  }
  return result;
}

//  test
// const series = [1, 2, 2, 2, 2];
// const series = [true, true, true, false, true];
// const series = ["a", "a", "b", "a", "a", "a", "a"];
// const series = ["1", 2, "4", "6", "8"];
// const series = ["Z", "e", ".", "a", "G"];
// const series = ["Z", "L", "3", "t", "G"];
const series = ["Z", "L", "P", "t", "G"];
// const series = [8, 2, 2];

console.log(findTheNotFittingElement(series));
