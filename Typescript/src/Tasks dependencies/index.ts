/**
 * Solve the challenge so that all the tasks get executed.
 * All dependencies must be resolved in such a way that all a task dependencies are
 * executed before the tasks itself without causing dependency loop.
 * Example 1: tasks = ["task1","task2", "task3"]; dependencies = {"task3":["task1"], "task1":["task2"]} => task2->task1->task3 || Good: No loop
 * Example 1: tasks = ["A","B", "C"]; dependencies = {"A":["B"], "B":["C"], "C":["A"]} => A->C->B->A  || Bad: Dependencies loop
 */

// =========== GRAPH THEORY: STUDY THAT =================

// [Introduction to Directed Acyclic Graph](https://www.geeksforgeeks.org/dsa/introduction-to-directed-acyclic-graph/)

// In topological sorting, when you have multiple nodes with in-degree 0, you can pick any of them first.

// [Topological Sorting](https://www.geeksforgeeks.org/dsa/topological-sorting)

// NB: Sorting a DAG could have many good sorted result, not just one.

// =========== GRAPH THEORY =================

class Graph {
  graph: Record<string, string[]> = {};
  status: Record<string, { visited: boolean }> = {};
  stack: string[] = [];

  addNode(node: string, child?: string) {
    if (!this.graph[node]) {
      this.graph[node] = [];
      this.status[node] = { visited: false };
    }

    if (!child) return;
    this.graph[node].push(child);
    this.status[child] = { visited: false };
  }

  topologicalSort() {
    for (let node of Object.keys(this.graph)) {
      if (this.status[node].visited) continue;
      this.topologicalSortUtil(node);
    }

    return this.stack.reverse();
  }

  topologicalSortUtil(node: string) {
    this.status[node].visited = true;

    for (let child of this.graph[node]) {
      if (this.status[child].visited && !this.stack.includes(child)) {
        // A node should not be a child of another one still being processed(Visited but not in the final stack).
        throw new Error("Circular dependencies found.");
      }
      if (this.status[child].visited) continue;

      this.topologicalSortUtil(child);
    }

    this.stack.push(node);
  }
}

export function runTasks(dependencies: Record<string, string[]>): string[] {
  const graph = new Graph();

  for (let [node, childs] of Object.entries(dependencies)) {
    if (childs.length == 0) {
      graph.addNode(node);
      continue;
    }

    for (let child of childs) {
      graph.addNode(node, child);
      if (!dependencies[child]) graph.addNode(child);
    }
  }

  return graph.topologicalSort();
}
//  test

const dependencies = { task3: ["task1"], task1: ["task2"] }; // [ 'task3', 'task1', 'task2' ]

// const dependencies = { A: ["B"], B: ["C"], C: ["A"] }; // Error: Circular dependencies

// const dependencies = { 2: ["3"], 3: ["1"], 4: ["0", "1"], 5: ["0", "2"] }; // [ '5', '4', '2', '3', '1', '0' ]

// const dependencies = {
//   A: ["B", "C"],
//   B: ["C", "D", "E"],
//   C: ["F"],
//   E: ["F"],
// }; // [ 'A', 'B', 'E', 'D', 'C', 'F' ]

// const dependencies = {
//   A: ["B", "C"],
//   B: ["C", "D"],
//   C: ["D"],
//   D: ["E"],
//   E: ["F"],
//   F: [],
// }; // ['A', 'B', 'C', 'D', 'E', 'F']

// const dependencies = {
//   A: [],
//   B: ["A"],
//   C: ["B"],
//   D: ["C"],
//   E: ["D"],
//   F: ["E"],
// }; // ['F', 'E', 'D', 'C', 'B', 'A']
console.log(runTasks(dependencies));
