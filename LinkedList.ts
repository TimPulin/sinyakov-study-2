type CurrentNode<T> = LinkedNode<T> | null

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
    public next: CurrentNode<T>;
    public prev: CurrentNode<T>;

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
    head: CurrentNode<T>;

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
        this.head.prev = node
        this.head = node

        return node
    }

    remove(value: T) {
        if(this.head === null) {
            return undefined
        }

        if(this.head.value === value) {
            const result = this.head

            if(result.next) {
                result.next.prev = null
            }

            this.head = result.next

            return result
        }

        let currentNode: CurrentNode<T> = this.head

        while( currentNode !== null) {
            if(currentNode.value === value) {
                break
            }
            currentNode = currentNode.next 
        }

        if(!currentNode) {
            return undefined
        }
        
        const prev = currentNode?.prev
        const next = currentNode.next

        if(prev) {
            prev.next = next
        }
        
        if (next) {
            next.prev = prev
        }

        return currentNode
    }

    size() {
        if(this.head === null) {
            return 0;
        }

        let currentNode: CurrentNode<T> = this.head;
        let count = 0

        while(currentNode !== null) {
            currentNode = currentNode.next;
            count++;
        }

        return count;
    }

    toArray() {
        if(this.head === null) {
            return []
        }

        let currentNode: CurrentNode<T> = this.head;
        const arr = [];

        while(currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }

        return arr
    }

    get(index: number) {
        if(this.head === null) {
            return undefined
        }

        let currentNode: CurrentNode<T> = this.head;
        let currentIndex = 0;

        while(currentNode !== null) {
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
        let currentNode: CurrentNode<T> = this.head;

        while(currentNode !== null) {
            stack.push(currentNode.value)
            currentNode = currentNode.next
        }

        while(!stack.isEmpty()) {
            list.append(stack.pop())
        }

        return list
    }

    findMiddle() {
        if(this.head === null) {
            return undefined
        }
       
        let fastNode: CurrentNode<T> = this.head
        let slowNode: CurrentNode<T> = this.head

        while(
            fastNode !== null
            && fastNode.next !== null
        ) {
            fastNode = fastNode.next.next
            slowNode = slowNode?.next ?? null
        }

        return slowNode 
    }
}



