function gradingStudents(grades) {
  return grades.map(function (grade) {
    if (grade < 38) {
      return grade;
    }
    var next_multiple_of_5 = Math.ceil(grade / 5) * 5;
    return next_multiple_of_5 - grade < 3 ? next_multiple_of_5 : grade;
  });
}
// // test
// const grades: number[] = [84, 29, 57];
// console.log(gradingStudents(grades));
module.exports = gradingStudents;
