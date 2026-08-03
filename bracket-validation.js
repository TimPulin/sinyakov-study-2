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

const str1 = '(()())'
const str2 = '({[]})'

const closingBrackets = [')', '}', ']']

const openingBrackets = ['(', '{', '[']
const bracketMap = {
    ']': '[',
    ')': '(',
    '}': '{'
}

function bracketValidation(str) {
    const stack = new Stack();

    for (const current of str) {
        if (openingBrackets.includes(current)) {
            stack.push(current)
        } else if (bracketMap[current] === stack.peek() ) {
            stack.pop()
        } else {
            return false
        }
    }

    return stack.isEmpty()
}

for (str of [ '((()))', '(()())', '(())()', '()(())', '()()()' ]) {
  const valid1 = bracketValidation(str)
  console.log(valid1);
}


