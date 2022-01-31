export default function bonAppetit(bill: number[], k: number, b: number): void {
  const b_actual =
    bill.reduce(
      (prev_value, current_value, index) =>
        (index === k ? 0 : current_value) + prev_value,
      0
    ) / 2;
  console.log(b_actual === b ? "Bon Appetit" : b - b_actual);
}

// // test
// const bill = [3, 10, 2, 9];
// const k = 1;
// const b = 12;
// bonAppetit(bill, k, b);
