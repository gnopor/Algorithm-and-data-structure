export default function solve(
  meal_cost: number,
  tip_percent: number,
  tax_percent: number
): void {
  const tipValue = (meal_cost / 100) * tip_percent;
  const taxValue = (meal_cost / 100) * tax_percent;
  console.log(Math.round(meal_cost + tipValue + taxValue));
}

// Test

const mealCost = 12.0;
const tipPercent = 20;
const taxPercent = 8;

solve(mealCost, tipPercent, taxPercent);
