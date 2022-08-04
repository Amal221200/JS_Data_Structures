class SingleNode {
    public value: any
    public next: SingleNode | null
    public prev: SingleNode | null
    constructor(value: any) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    private head: SingleNode | null
    private tail: SingleNode | null
    private size: number
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(value: any) {
        const node = new SingleNode(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head!.prev = node
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
            node.prev = this.tail
            this.tail!.next = node
            this.tail = node
        }

        this.size++
    }

    removeFromFront() {
        if (this.isEmpty()) return null
        const value = this.head?.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head?.next!
            this.head.prev = null
        }
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
            this.tail = this.tail?.prev!
            this.tail.next = null
        }
        this.size--
        return value
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head
            let listValues = ""
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }

    printReverse() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.tail
            let listValues = ""
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.prev
            }
            console.log(listValues)
        }
    }
}

const dList = new DoublyLinkedList()
dList.prepend(23)
dList.prepend(24)
dList.prepend(25)
dList.append(26)
console.log(dList.removeFromFront())
console.log(dList.removeFromEnd())
dList.print()
dList.printReverse()