export default function timeConversion(s: string): string {
  const formatString = (str: string) => (str.length < 2 ? `0${str}` : str);

  const is_pm: boolean = s.trim().substr(-2).toLocaleLowerCase() === "pm";
  let result: string[] = s.trim().split(":");
  result[2] = result[2].substr(0, 2);

  const hour: number = +result[0];
  result[0] = is_pm
    ? hour < 12
      ? `${hour + 12}`
      : `${hour}`
    : hour < 12
    ? `${hour}`
    : "00";

  return result.map((item) => formatString(item)).join(":");
}

// const time = "12:05:45AM";

// console.log(timeConversion(time));
