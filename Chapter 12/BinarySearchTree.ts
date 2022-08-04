class SingleNode {
    left: SingleNode | null
    right: SingleNode | null
    value: any
    constructor(value: any) {
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
    public root: SingleNode | null
    constructor() {
        this.root = null
    }

    insert(value: any) {
        const node = new SingleNode(value)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root!, node)
        }
    }

    private insertNode(root: SingleNode, newNode: SingleNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root: SingleNode | null, value: any): boolean {
        if (!root) {
            return false
        } else {
            if (value === root.value) {
                return true
            } else if (value < root.value) {
                // console.log(root.left)
                return this.search(root.left!, value)
            } else {
                return this.search(root.right!, value)
            }
        }
    }

    delete(value: any) {
        this.root = this.deleteNode(this.root, value)
    }

    private deleteNode(root: SingleNode | null, value: any): SingleNode | null {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.minNode(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    isEmpty() {
        return this.root === null
    }

    preOrder(root: SingleNode | null) {
        if (root) {
            console.log(root?.value)
            this.preOrder(root!.left)
            this.preOrder(root!.right)
        }
    }

    inOrder(root: SingleNode | null) {
        if (root) {
            this.inOrder(root!.left)
            console.log(root.value)
            this.inOrder(root!.right)
        }
    }

    postOrder(root: SingleNode | null) {
        if (root) {
            this.inOrder(root!.left)
            this.inOrder(root!.right)
            console.log(root.value)
        }
    }

    levelOrder() {
        const queue: (SingleNode | null)[] = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr!.value)
            if (curr?.left) {
                queue.push(curr.left)
            }
            if (curr?.right) {
                queue.push(curr.right)
            }
        }
    }

    minNode(root: SingleNode | null): any {
        if (!root?.left) {
            return root?.value
        } else {
            return this.minNode(root.left)
        }
    }

    maxNode(root: SingleNode | null): any {
        if (!root?.right) {
            return root?.value
        } else {
            return this.minNode(root.right)
        }
    }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(7)
bst.insert(3)
console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 15))
console.log(bst.search(bst.root, 25))
// console.log(bst.root)
bst.delete(3)
bst.delete(15)

console.log(bst.levelOrder())