export default function countingValleys(steps: number, path: string): number {
  let valleysCount = 0;
  let firstStep = "";
  let stepFromSeaLevel = 0;

  for (let step of path.split("")) {
    firstStep = firstStep || step;
    stepFromSeaLevel += step === "U" ? 1 : -1;

    if (stepFromSeaLevel === 0) {
      valleysCount = valleysCount + (firstStep === "D" ? 1 : 0);
      firstStep = "";
    }
  }

  return valleysCount;
}

// const steps = 8;
// const path = "DUDUDUDU";

// console.log(countingValleys(steps, path));
