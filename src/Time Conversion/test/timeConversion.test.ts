import timeConversion from "../index";

describe("Time Conversion", () => {
  it("Time conversion with correct data", () => {
    const times = [
      ["01:00:00AM", "01:00:00"],
      ["12:00:00AM", "00:00:00"],
      ["01:00:00PM", "13:00:00"],
      ["12:00:00PM", "12:00:00"],
    ];

    for (let time of times) {
      expect(timeConversion(time[0])).toBe(time[1]);
    }
  });
});
