import { crack } from "../index";

describe("Crack the PIN", () => {
  it("Should return the non hashed string.", () => {
    const tests = [
      {
        params: { hash: "86aa400b65433b608a9db30070ec60cd" },
        output: "00078",
      },
      {
        params: { hash: "827ccb0eea8a706c4c34a16891f84e7b" },
        output: "12345",
      },
    ];

    for (let { params, output } of tests) {
      expect(crack(params.hash)).toBe(output);
    }
  });
});
