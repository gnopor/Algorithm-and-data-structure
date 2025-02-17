class TestDataEmptyArray {
  static getArray(): number[] {
    return [];
  }
}

class TestDataUniqueValues {
  static getArray(): number[] {
    return [6, 6, 6];
  }

  static getExpectedResult(): number {
    return 0;
  }
}

class TestDataExactlyTwoDifferentMinimums {
  static getArray(): number[] {
    return [6, 3, 6, 3, 6];
  }

  static getExpectedResult(): number {
    return 1;
  }
}

function minimumIndex(seq: number[]) {
  if (seq.length == 0) {
    throw new Error(
      "Cannot get the minimum value index from an empty sequence"
    );
  }
  let min_idx = 0;
  for (let i = 1; i < seq.length; ++i) {
    if (seq[i] < seq[min_idx]) {
      min_idx = i;
    }
  }
  return min_idx;
}

function testWithEmptyArray() {
  try {
    const seq: number[] = TestDataEmptyArray.getArray();
    const result = minimumIndex(seq);
  } catch (e) {
    return;
  }
  throw new Error("Exception wasn't thrown as expected");
}

function testWithUniqueValues() {
  const seq: number[] = TestDataUniqueValues.getArray();
  if (seq.length < 2) {
    throw new Error("less than 2 elements in the array");
  }

  const tmp: number[] = new Array(seq.length);
  for (let i = 0; i < seq.length; ++i) {
    tmp[i] = Number(seq[i]);
  }
  if (new Set(tmp).size != 1) {
    throw new Error("not all values are unique");
  }

  const expectedResult = TestDataUniqueValues.getExpectedResult();
  const result = minimumIndex(seq);
  if (result != expectedResult) {
    throw new Error("result is different than the expected result");
  }
}

function testWithExactlyTwoDifferentMinimums() {
  const seq: number[] = TestDataExactlyTwoDifferentMinimums.getArray();
  if (seq.length < 2) {
    throw new Error("less than 2 elements in the array");
  }

  const tmp: number[] = [...seq];
  tmp.sort();
  if (!(tmp[0] == tmp[1] && (tmp.length == 2 || tmp[1] < tmp[2]))) {
    throw new Error("there are not exactly two minimums in the array");
  }

  const expectedResult: number =
    TestDataExactlyTwoDifferentMinimums.getExpectedResult();
  const result: number = minimumIndex(seq);
  if (result != expectedResult) {
    throw new Error("result is different than the expected result");
  }
}

export default function main() {
  try {
    testWithEmptyArray();
    testWithUniqueValues();
    testWithExactlyTwoDifferentMinimums();
    console.log("OK");
  } catch (error) {
    console.log(error);
  }
}
