import designerPdfViewer from "../index";

describe("Designer PDF Viewer", () => {
  it("Function should return the correct area", () => {
    const h = [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      7,
    ];
    const word = "zaba";

    expect(designerPdfViewer(h, word)).toBe(28);
  });
});
