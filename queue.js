class Queue {
    items;
    pointer;
    maxSize;

    constructor(maxSize = null) {
      this.items = []
      this.pointer = 0
      this.maxSize = maxSize
    }

    enqueue(item, callback = null) {
      if (
        this.maxSize !== null
        && this.size() >= this.maxSize
      ) {
        throw new Error('queue reach max size')
      }

      if (
        this.pointer > 1000
        && this.pointer * 2 > this.items.length
      ) {
        this.items = this.items.slice(this.pointer)
        this.pointer = 0
      }

      return this.items.push(item)
    }

    dequeue() {
      if (this.size() === 0) {
        return
      }

      const current = this.items[this.pointer]
      this.pointer++

      return current
    }

    peek() {
      if (this.size() === 0) {
        return
      }

      return this.items[this.pointer]
    }

    size() {
      return this.items.length - this.pointer
    }

    clear() {
      this.pointer = 0
      this.items = []
    }

    contains(value) {
      for (let i = this.pointer; i < this.items.length; i++) {
        if (this.items[i] === value) {
          return true
        }
      }

      return false
    }

    reverseQueue() {
      const reversed = []

      for (let i = this.items.length - 1; i >= this.pointer ; i--) {
        reversed.push(this.items[i])
      }

      this.items = reversed;
      this.pointer = 0;
    }
}










class ClientQueue {
  queue;

  constructor() {
    this.queue = new Queue()
  }

  add(client) {
    this.queue.enqueue(client)
  }

  serve() {
    const currentClient = this.queue.dequeue()

    if (currentClient === undefined) {
       console.log('Очередь пуста');
       return
    }

    console.log(`Обслуживается клиент ${currentClient}`);
    
    return currentClient
  }
}