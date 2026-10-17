import { grabscrab } from "../index";

describe("Arrh, grabscrab!", () => {
  it("Should output a list of words that the pirate might have meant", () => {
    const tests = [
      {
        params: { anagram: "oob", dictionary: ["bob", "baobab"] },
        output: [],
      },
      {
        params: {
          anagram: "ainstuomn",
          dictionary: ["mountains", "hills", "mesa"],
        },
        output: ["mountains"],
      },
      {
        params: {
          anagram: "ortsp",
          dictionary: ["sport", "parrot", "ports", "matey"],
        },
        output: ["sport", "ports"],
      },
    ];

    for (let { params, output } of tests) {
      expect(grabscrab(params.anagram, params.dictionary)).toEqual(output);
    }
  });
});
