export default function jimOrders(orders: number[][]): number[] {
  const serveTimeOrder: number[] = [];

  const countSort: Record<string, number[]> = {};
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    const deliveryTime = order[0] + order[1];
    if (!countSort[deliveryTime]) {
      countSort[deliveryTime] = [];
    }

    countSort[deliveryTime].push(i + 1);
  }

  for (let value of Object.values(countSort)) {
    serveTimeOrder.push(...value);
  }

  return serveTimeOrder;
}

// test
const orders = [
  [8, 3],
  [5, 6],
  [6, 2],
  [2, 3],
  [4, 3],
];
console.log(jimOrders(orders));
