class Stack {
    items;
    constructor() {
        this.items = []
    }

    push(value) {
      return this.items.push(value)
    }

    pop(value) {
      return this.items.pop()
    }

    peek() {
      return this.items[this.items.length - 1]
    }

    size() {
      return this.items.length
    }

    clear() {
      this.items = []
    }

    isEmpty() {
      return this.items.length === 0 
    }
}


function deleteDoublesInRow(str) {
    const stack = new Stack();

    for (const char of str) {
        if (char === stack.peek()) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    let cleared = ''
    while (!stack.isEmpty()) {
        cleared = stack.pop() + cleared
    }

    return cleared
}