import almostSorted from "../index";

describe("Almost Sorted", () => {
  it("Should log the if and what operation are used to sort array.", () => {
    console.log = jest.fn();
    const arr = [1, 5, 4, 3, 2, 6];
    const expectedOutput1 = "yes";
    const expectedOutput2 = "reverse 2 5";
    almostSorted(arr);

    expect((console.log as any).mock.calls[0][0]).toBe(expectedOutput1);
    expect((console.log as any).mock.calls[1][0]).toBe(expectedOutput2);
  });
});
