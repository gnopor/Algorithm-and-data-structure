import { compare } from "../index";

describe("Simple CSS selector comparison", () => {
  it("Should return the selector with the highest weight", () => {
    const a1 = "div.big";
    const b1 = ".small";

    const a2 = "#foo div#bar.red .none";
    const b2 = "menu .item #checkout.active";

    const expectedResult1 = a1;
    const expectedResult2 = a2;

    expect(compare(a1, b1)).toBe(expectedResult1);
    expect(compare(a2, b2)).toBe(expectedResult2);
  });
});
