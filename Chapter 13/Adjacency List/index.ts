class Graph {
    adjacencyList: { [props: string]: Set<number | string> }
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex: any) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1: any, vertex2: any) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }

        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    print() {
        console.log(this.adjacencyList)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`)
        }
    }

    hasEdge(vertex1: string | number, vertex2: string | number) {
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1: string | number, vertex2: string | number) {
        if (this.hasEdge(vertex1, vertex2)) {
            this.adjacencyList[vertex1].delete(vertex2)
            this.adjacencyList[vertex2].delete(vertex1)
        }
    }

    removeVertex(vertex: any) {
        if (!this.adjacencyList[vertex]) return

        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    printEdges(vertex: any) {
        let val = ""
        this.adjacencyList[vertex].forEach(edge => {
            val += `${edge} `
        })
        console.log(val)
    }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

// graph.print()
// graph.display()
// graph.printEdges('B')
// console.log(graph.hasEdge('A', 'C'));
graph.removeVertex('C')
graph.display()