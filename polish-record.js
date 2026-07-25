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

const actionMap = {
    '-': (a, b) => a - b ,
    '+': (a, b) => a + b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
}

function polishRecord(str) {
    const stack = new Stack();

    for (const el of str) {
      if (el in actionMap) {
        const b = stack.pop()
        const a = stack.pop()
        stack.push(actionMap[el](a, b))
      } else {
        stack.push(Number(el))
      }
    }

    return stack.size() === 1 ? stack.pop() : undefined
}