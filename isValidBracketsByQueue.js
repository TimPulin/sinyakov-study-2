class Queue {
    items;
    pointer;

    constructor() {
        this.items = []
        this.pointer = 0
    }

    enqueue(item) {
        return this.items.push(item)
    }

    dequeue() {
        const item = this.items[this.pointer]
        this.pointer++
        return item
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.items.length - this.pointer
    }
}

class Stack {
    items;

    constructor() {
        this.items = []
    }

    push(item)  {
        return this.items.push(item)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }
}


const bracketOpen = ['(', '[', '{']
const bracketClose = [')', ']', '}']
const bracketCloseMap = {
    ')': '(', 
    ']': '[', 
    '}': '{'
}

function isValidBrackets(str) {
    const queue = new Queue()
    const stack = new Stack()

    for(const char of str) {
        if (bracketOpen.includes(char)) {
            stack.push(char)
        } else if (bracketClose.includes(char)) {
            queue.push(char)
        }
    }

    while(!queue.isEmpty()) {

        if(stack.isEmpty()) {
            return false
        }

        const closeBracketCurrent = queue.dequeue()
        const openBracketCurrent = stack.pop()

        if(openBracketCurrent !== bracketCloseMap[closeBracketCurrent]) {
            return false
        }
    }

    return stack.isEmpty() 
}