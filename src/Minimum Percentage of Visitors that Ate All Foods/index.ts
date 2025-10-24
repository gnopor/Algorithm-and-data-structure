// after the first result, recursively do R = 100 - R - currentPercentage

export function minimumPercentage(foods: number[]): number {
  foods.sort();
  let result = -foods[0];
  for (let i = 1; i < foods.length; i++) {
    result = 100 + result - foods[i];
  }

  return result >= 0 ? 0 : -result;
}

// test

const foods = [65, 80, 80, 90]; // 15
// const foods = [76]; // 76
// const foods = [50, 50]; // 0
// const foods = [50, 100]; // 50
// const foods = [70, 70]; // 40
// const foods = [83, 86, 88]; // 57
// const foods = [100, 100, 100]; // 100
// const foods = [100, 85, 82, 71, 57]; // 0;
// const foods = [87, 87, 84, 79, 79, 79] // 0;
console.log(minimumPercentage(foods));
