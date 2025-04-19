export default class Vector {
  components: number[] = [];

  constructor(components: number[]) {
    this.components = components;
  }

  add(vector: Vector) {
    if (this.components.length != vector.components.length) {
      throw new Error("Vectors must have the same length.");
    }

    const newComponents: number[] = [];
    for (let i = 0; i < vector.components.length; i++) {
      newComponents.push(this.components[i] + vector.components[i]);
    }

    return new Vector(newComponents);
  }

  subtract(vector: Vector) {
    if (this.components.length != vector.components.length) {
      throw new Error("Vectors must have the same length.");
    }

    const newComponents: number[] = [];
    for (let i = 0; i < vector.components.length; i++) {
      newComponents.push(this.components[i] - vector.components[i]);
    }
    return new Vector(newComponents);
  }

  dot(vector: Vector) {
    if (this.components.length != vector.components.length) {
      throw new Error("Vectors must have the same length.");
    }

    let result: number = 0;
    for (let i = 0; i < vector.components.length; i++) {
      result += this.components[i] * vector.components[i];
    }

    return result;
  }

  norm() {
    let result: number = 0;

    for (let point of this.components) {
      result += point * point;
    }

    return Math.sqrt(result);
  }

  toString() {
    return `(${this.components.join(",")})`;
  }

  equals(vector: Vector) {
    return this.toString() === vector.toString();
  }
}

// test
const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.norm());
