class Queue {
    private items: { [prop: number]: any }
    private front: number
    private rear: number
    constructor() {
        this.items = {}
        this.front = 0
        this.rear = 0
    }

    enqueue(element: any) {
        this.items[this.rear] = element
        this.rear++
    }

    dequeue() {
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty() {
        return this.items[this.front] - this.items[this.rear] === 0
    }

    peek() {
        return !this.isEmpty() ? this.items[0] : null
    }

    size() {
        return this.rear - this.front
    }

    print() {
        console.log(this.items)
    }
}

const queue = new Queue()

queue.enqueue(2)
console.log(queue)
console.log(queue.size())
queue.print()