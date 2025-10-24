// export default function organizingContainers(container: number[][]): string {
//   const containerSize = container.length;

//   let containerQuantity = 0;
//   let quantityPertype: number[] = new Array(containerSize).fill(0);

//   for (let arr of container) {
//     for (let i = 0; i < arr.length; i++) {
//       quantityPertype[i] += arr[i];
//     }
//   }

//   for (let quantity of quantityPertype) {
//     if (quantity === 0) {
//       continue;
//     }

//     containerQuantity += Math.ceil(quantity / containerSize);
//   }

//   return containerQuantity === containerSize ? "Possible" : "Impossible";
// }

// The solution uses mathematical function specific to matrix, so not common. So I don't really know how to exploit this solution. Mine(Up) is wrong
export default function organizingContainers(container: number[][]): string {
  let sumColumns: number[] = new Array(container.length).fill(0);
  let sumRows: number[] = new Array(container.length).fill(0);

  for (let i = 0; i < container.length; i++) {
    let valueRow = 0;
    container[i].forEach((v) => (valueRow += v));
    sumRows.push(valueRow);

    let valueColumn = 0;
    for (let j = 0; j < container.length; j++) {
      valueColumn += container[j][i];
    }
    sumColumns.push(valueColumn);
  }

  sumColumns.sort((a, b) => a - b);
  sumRows.sort((a, b) => a - b);

  for (let i = 0; i < sumColumns.length; i += 1) {
    if (sumColumns[i] != sumRows[i]) return "Impossible";
  }

  return "Possible";
}

// test
const container = [
  [0, 2, 1],
  [1, 1, 1],
  [2, 0, 0],
];

console.log(organizingContainers(container));
