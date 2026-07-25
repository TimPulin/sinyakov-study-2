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



const arr = [1,2,3,4]

function reverse(arr) {
    const stack = new Stack()
    const reversed = []
    
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i])
    }

    while (!stack.isEmpty()) {
        reversed.push(stack.pop())
    }
    return reversed;
}