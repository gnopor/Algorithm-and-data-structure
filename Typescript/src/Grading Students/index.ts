function gradingStudents(grades: number[]): number[] {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }
    const next_multiple_of_5: number = Math.ceil(grade / 5) * 5;
    return next_multiple_of_5 - grade < 3 ? next_multiple_of_5 : grade;
  });
}

// // test
// const grades: number[] = [84, 29, 57];
// console.log(gradingStudents(grades));

module.exports = gradingStudents;
