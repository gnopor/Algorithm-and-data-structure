function migratoryBirds(arr: number[]) {
  // get the number of each item
  const compounds: { [key: string]: number } = {};
  for (let id of arr) {
    compounds[id] = compounds[id] ? compounds[id] + 1 : 1;
  }

  // sort item by thier quantity
  const sorted_arr = Object.entries(compounds).sort((a, b) => b[1] - a[1]);
  const max_length = sorted_arr[0][1];

  // get all item that have thier quantity === max_length
  const result_arr: number[] = [];
  sorted_arr.filter((item) => {
    if (item[1] === max_length) {
      result_arr.push(+item[0]);
    }
  });

  // return the item that has the min id
  return Math.min(...result_arr);
}

// test function
// const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
// migratoryBirds(arr);

module.exports = migratoryBirds;
