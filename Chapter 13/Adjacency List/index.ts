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
graph.printEdges('A')