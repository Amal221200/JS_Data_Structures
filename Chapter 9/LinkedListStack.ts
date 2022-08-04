class SingleNode {
    public value: any
    public next: null | SingleNode
    constructor(value: any) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    private head: SingleNode | null
    private tail: SingleNode | null
    private size: number
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getHead(): number {
        return this.head?.value!
    }

    getSize() {
        return this.size
    }

    prepend(value: any) {
        const node = new SingleNode(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head!
            this.head = node
        }
        this.size++
    }

    append(value: any) {
        const node = new SingleNode(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail!.next = node
            this.tail = node
        }
        this.size++
    }


    removeFromFront() {
        if (this.isEmpty()) return null
        const value = this.head?.value
        this.head = this.head?.next!
        this.size--
        return value
    }

    removeFromEnd() {
        if (this.isEmpty()) return null

        const value = this.tail?.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev?.next !== this.tail) {
                prev = prev?.next!
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty")
        } else {
            let current = this.head
            let listValues = ""

            while (current) {
                listValues += `${current.value} `
                current = current.next
            }
            console.log(listValues);
        }
    }

}


class LinkedListStack {
    private list: LinkedList
    constructor() {
        this.list = new LinkedList()
    }

    push(value: any) {
        this.list.prepend(value)
    }

    pop() {
        this.list.removeFromFront()
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    peek() {
        return this.list.getHead()
    }

    getSize() {
        return this.list.getSize()
    }

    print() {
        return this.list.print()
    }
}

const stack = new LinkedListStack()

stack.push(89)
stack.push(78)
stack.push(67)
stack.pop()
console.log(stack.peek())
console.log(stack.getSize())
stack.print()