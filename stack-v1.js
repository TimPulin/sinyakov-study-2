class Stack {
    items;
    min;
    constructor() {
        this.items = []
        this.min = []
    }

    push(value) {
      if (
        this.min.length === 0
        || value <= this.min[this.min.length - 1]) {
        this.min.push(value)
      }

      return this.items.push(value)
    }

    pop() {
      if (this.isEmpty()) {
        return undefined
      }

      const temp = this.items.pop()

      if ( temp === this.getMin()) {
        this.min.pop()
      }

      return temp
    }

    peek() {
      return this.items[this.items.length - 1]
    }

    size() {
      return this.items.length
    }

    clear() {
      this.items = []
      this.min = []
    }

    isEmpty() {
      return this.items.length === 0 
    }

    getMin() {
      return this.min[this.min.length - 1]
    }
}