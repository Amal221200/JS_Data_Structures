class Stack {
    private items: any[]
    constructor(items?: any[]) {
        this.items = items ? items : []
    }

    push(element: any) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

let stack = new Stack();
stack.push(4)
stack.push(3)
stack.push(2)
stack.push(1)
stack.pop()
console.log(stack.print())