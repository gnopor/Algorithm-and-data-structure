class Stack {
  item;

  constructor() {
    this.top = -1;
    this.item = {};
  }

  get peek() {
    return this.item[this.top];
  }

  push(value) {
    this.top += 1;
    this.item[this.top] = value;
  }
}

describe("My stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.item).toEqual({});
  });

  it("can push to the top", () => {
    stack.push("t");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("t");
  });

  // it.todo("can pop off");
});
