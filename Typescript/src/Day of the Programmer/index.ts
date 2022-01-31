export default function dayOfProgrammer(year: number): string {
  let is_leap_years = false;

  if (year === 1918) {
    return "26.09.1918";
  }

  if (year < 1918) {
    is_leap_years = year % 4 === 0;
  } else {
    is_leap_years = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }

  return `${is_leap_years ? 12 : 13}.09.${year}`;
}

// test function
// const year = 2016;
// console.log(dayOfProgrammer(year));
