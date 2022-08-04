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

    // insert(value: number, index: number) {
    //     if (index < 0 || index > this.size) return
    //     if (index === 0) {
    //         this.prepend(value)
    //     } else {
    //         const node = new SingleNode(value)
    //         let prev = this.head!
    //         for (let i = 0; i < index - 1; i++) {
    //             prev = prev.next!
    //         }
    //         node.next = prev.next
    //         prev.next = node
    //         this.size++
    //     }
    // }

    // removeValue(value: any) {
    //     if (this.isEmpty()) return null
    //     let removeNode: SingleNode
    //     if (this.head?.value === value) {
    //         removeNode = this.head!
    //         this.head = this.head?.next!
    //         this.size--
    //         return removeNode.value
    //     } else {
    //         let prev = this.head!
    //         while (prev.next && prev.next.value !== value) {
    //             prev = prev.next
    //         }

    //         if (prev.next) {
    //             removeNode = prev.next
    //             prev.next = removeNode.next
    //             this.size--
    //             return removeNode.value
    //         }
    //     }

    //     return null
    // }

    // search(value: any) {
    //     if (this.isEmpty()) return -1
    //     let i = 0
    //     let curr = this.head
    //     while (curr) {
    //         if (curr.value === value) {
    //             return i
    //         }

    //         curr = curr.next
    //         i++
    //     }

    //     return -1
    // }

    // reverse() {
    //     let prev: null | SingleNode = null
    //     let curr = this.head
    //     while (curr) {
    //         let next = curr.next
    //         curr.next = prev
    //         prev = curr
    //         curr = next
    //     }
    //     this.head = prev
    // }

}

// const link = new LinkedList()
// link.prepend(24)
// link.prepend(23)
// link.append(25)
// link.insert(26, 1)
// link.insert(27, 3)
// link.insert(27, 5)
// link.removeFromFront()
// link.removeFromEnd()
// console.log(link.removeValue(29));
// console.log(link.search(23));
// link.reverse()
// link.print();

module.exports = LinkedList