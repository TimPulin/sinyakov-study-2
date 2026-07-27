class Stack<T> {
    private items: Array<T>;

    constructor() {
        this.items = []
    }

    push(value: T) {
        return this.items.push(value)
    }

    pop() {
        if(this.isEmpty()) {
            return undefined
        }

        return this.items.pop()
    }

    isEmpty() {
        return this.items.length === 0;
    }

}

class LinkedNode<T> {
    private _value: T;
    public next: LinkedNode<T> | null;
    public prev: LinkedNode<T> | null;

    constructor(value: T) {
        this._value = value;
        this.next = null;
        this.prev = null;
    }

    get value() {
        return this._value
    }
}


class LinkedList<T> {
    head: LinkedNode<T> | null;

    constructor() {
        this.head = null
    }

    append(value: T) {
        const node = new LinkedNode(value)

        if(this.head === null) {
            this.head = node;
            return this.head
        }

        let currentNode = this.head

        while(currentNode.next !== null) {
            currentNode = currentNode.next
        }

        currentNode.next = node
        node.prev = currentNode

        return node
    }

    prepend(value: T) {
        const node = new LinkedNode(value)

        if(this.head === null) {
            this.head = node
            return node
        }

        node.next = this.head
        node.prev = null
        this.head = node

        return node
    }

    remove(value: T) {
        if(this.head === null) {
            return undefined
        }

        let currentNode = this.head

        while(
            currentNode.next !== null
            && currentNode.next.value !== value

        ) {
            currentNode = currentNode.next
        }

        
        if(currentNode.next !== null) {
            const next = currentNode.next.next   
            currentNode.next = next
            if (next !== null) {
                next.prev = currentNode.next
            }
        }
    }

    size() {
        if(this.head === null) {
            return 0;
        }

        let currentNode = this.head;
        let count = 0

        while(currentNode.next !== null) {
            currentNode = currentNode.next;
            count++;
        }

        return count;
    }

    toArray() {
        if(this.head === null) {
            return []
        }

        let currentNode = this.head;
        const arr = [];

        while(currentNode.next !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }

        return arr
    }

    get(index: number) {
        if(this.head === null) {
            return undefined
        }

        let currentNode = this.head;
        let currentIndex = 0;

        while(currentNode.next !== null) {
            if(index === currentIndex) {
                return currentNode;
            }

            currentNode = currentNode.next
            currentIndex++
        }

        return undefined
    }

    reverse() {

        const list = new LinkedList();

        if(this.head === null) {
            return list
        }

        const stack = new Stack<T>();
        let currentNode = this.head;

        while(currentNode.next !== null) {
            stack.push(currentNode.value)
            currentNode = currentNode.next
        }

        while(!stack.isEmpty()) {
            const value = stack.pop()
            if(!value) {
                list.append(value)
            }
        }

        return list
    }

    findMiddle() {
        if(this.head === null) {
            return undefined
        }

        
        let fastNode = this.head
        let slowNode = this.head

        while(
            fastNode.next !== null
            && fastNode.next.next !== null
            && slowNode.next !== null
        ) {
            fastNode = fastNode.next.next
            slowNode = slowNode.next
        }

        return fastNode
    }
}



