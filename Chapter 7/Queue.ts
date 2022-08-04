class Queue {
    private items: any[]
    constructor(items?: any[]) {
        this.items = items ? items : []
    }

    enqueue(element: any) {
        this.items.push(element)
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        return !this.isEmpty() ? this.items[0] : null
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

// let arr = [0, 1, 2, 3]

let queue = new Queue();
queue.enqueue(4)
queue.enqueue(3)
queue.enqueue(2)
queue.enqueue(5)
queue.dequeue()
console.log(queue)