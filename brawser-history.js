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


class BrowserHistory  {
    main
    backlog

    constructor() {
        this.main = new Stack()
        this.backlog = new Stack()
    }
    
    visit(url) {
        this.main.push(url)
        if (!this.backlog.isEmpty()) {
            this.backlog.clear()
        }

        return url
    }

    back() {
        if (this.main.size() > 1) {
            const current = this.main.pop()
            this.backlog.push(current)

            return current
        }
    }

    forward() {
        if (!this.backlog.isEmpty()) {
            const current = this.backlog.pop()
            this.main.push(current)

            return current
        }
    }

    current() {
        return this.main.peek()
    }
}