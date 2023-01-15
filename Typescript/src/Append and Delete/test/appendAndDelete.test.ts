import appendAndDelete from "../index";

describe("Append and Delete", () => {
  it("appendAndDelete should return if k(number of actions) is accurate or not.", () => {
    const s =
      "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
    const t =
      "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
    const k = 20;
    const expectedResult = "Yes";

    expect(appendAndDelete(s, t, k)).toBe(expectedResult);
  });
});
