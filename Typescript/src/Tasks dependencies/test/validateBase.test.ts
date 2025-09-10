import { runTasks } from "../index";

describe("Tasks Dependencies - DAG(Directed Acyclic Graph)", () => {
  it("should return sorted task's execution order.", () => {
    const dependencies1 = { task3: ["task1"], task1: ["task2"] };
    const dependencies2 = { A: ["B"], B: ["C"], C: ["A"] };

    const expectedResult1 = ["task3", "task1", "task2"];
    const expectedResult2 = "Circular dependencies found.";

    expect(runTasks(dependencies1).toString()).toBe(expectedResult1.toString());
    expect(() => runTasks(dependencies2)).toThrow(expectedResult2);
  });
});
