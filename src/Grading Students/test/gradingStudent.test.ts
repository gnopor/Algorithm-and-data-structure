import gradingStudents from "../index";

describe("Grading Students", () => {
  it("gradingStudents with correct data", () => {
    const input_grade = [84, 29, 57];
    const output_grade = [85, 29, 57];
    expect(gradingStudents(input_grade).join()).toBe(output_grade.join());
  });
});
