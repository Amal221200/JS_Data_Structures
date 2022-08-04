// Adjacency Matrix
const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]

// console.log(matrix[0][1])

// Adjacency List

const list = new Map([['A', ['B']], ['B', ['A', 'C']], ['C', ['B']]])
/* OR */
const List = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B']
}