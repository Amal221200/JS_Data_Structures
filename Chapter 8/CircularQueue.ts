class CircularQueue {
    private items: any[]
    private capacity: number
    private currentLength: number
    private front: number
    private rear: number
    constructor(capacity: number) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.front = -1
        this.rear = -1
    }

    enqueue(element: any) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength = this.currentLength + 1
            if (this.front === -1) {
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            const item = this.items[this.front]
            this.items[this.front] = null
            this.front = (this.front + 1) % this.capacity
            this.currentLength = this.currentLength - 1
            if (this.isEmpty()) {
                this.front = -1
                this.rear = -1
            }
            return item
        } else {
            return null
        }
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0
    }

    peek() {
        return !this.isEmpty() ? this.items[this.front] : null
    }

    size() {
        return this.items.length
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
        } else {
            let str = ''
            for (let i = this.front; i == this.rear; (i + 1) % this.capacity) {
                str += this.items[i] + ' '
            }
            console.log(str)
        }
    }
}

let cqueue = new CircularQueue(5)


