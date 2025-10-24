import encryption from "../index";

describe("Encryption", () => {
  it("Should return the correct encrypted version of the test", () => {
    const s =
      "if man was meant to stay on the ground god would have given us roots";
    const expectedResult =
      "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau";

    expect(encryption(s)).toBe(expectedResult);
  });
});
