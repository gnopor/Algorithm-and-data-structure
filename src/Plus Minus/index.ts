export default function plusMinus(arr: number[]): void {
  let positive: number = 0;
  let negative: number = 0;
  let zero: number = 0;
  const lenght = arr.length;

  const formatValue = (num: number): string => {
    const decimal = 6;
    let num_array: string[] = num.toString().split(".");

    let result = "";
    if (!num_array[1]) {
      result = `${num}.${"0".repeat(decimal)}`;
    } else {
      if (num_array[1].length > decimal) {
        result = num.toString().slice(0, -(num_array[1].length - decimal));
      } else {
        result = `${num_array[0]}.${num_array[1]}${"0".repeat(
          decimal - num_array[1].length
        )}`;
      }
    }

    return result;
  };

  for (let i = 0; i < lenght; i++) {
    let item = arr[i];
    if (item > 0) {
      positive++;
    } else if (item < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log(formatValue(positive / lenght));
  console.log(formatValue(negative / lenght));
  console.log(formatValue(zero / lenght));
}

// const arr = [-4, 3, -9, 0, 4, 1];
// plusMinus(arr);
