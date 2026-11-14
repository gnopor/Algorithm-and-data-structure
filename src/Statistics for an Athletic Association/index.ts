export function stat(input: string): string {
  if (!input) return "";

  const timeToSeconds = (runner_time: string): number => {
    return runner_time
      .split("|")
      .reduce((prev, current, i) => prev + +current * Math.pow(60, 2 - i), 0);
  };
  const secondsToTime = (seconds: number): string => {
    const hh = Math.floor(seconds / 3600);
    const mm = Math.floor((seconds - hh * 3600) / 60);
    const ss = Math.floor(seconds - hh * 3600 - mm * 60);
    return `${String(hh).padStart(2, "0")}|${String(mm).padStart(2, "0")}|${String(ss).padStart(2, "0")}`;
  };
  const getRange = (seconds: number[]): number => {
    const newList = [...seconds].sort((a, b) => a - b);

    return Math.abs(newList[0] - newList[newList.length - 1]);
  };
  const getAverage = (seconds: number[]): number => {
    return (
      seconds.reduce((prev, current) => prev + current, 0) / seconds.length
    );
  };
  const getMedian = (seconds: number[]): number => {
    const newList = [...seconds].sort((a, b) => a - b);
    const middle = Math.floor(newList.length / 2);

    if (newList.length % 2 != 0) {
      return newList[middle];
    }

    return (newList[middle - 1] + newList[middle]) / 2;
  };

  const seconds = input.split(",").map((v) => timeToSeconds(v.trim()));
  const range = secondsToTime(getRange(seconds));
  const average = secondsToTime(getAverage(seconds));
  const median = secondsToTime(getMedian(seconds));

  return `Range: ${range} Average: ${average} Median: ${median}`;
}

const params = [
  { input: "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17" },
  { input: "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41" },
  { input: "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17" },
];

for (let p of params) {
  console.log(`- input: ${JSON.stringify(p)} \n- output: ${stat(p.input)}\n`);
}
