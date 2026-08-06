function solveMaze(maze) {
    const path = []
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ]
    let visited

    return init()

    function init() {
        const start = findStart()
        if (start) {
            visited = new Set()   
            solve(start[0], start[1], visited)
        }        

        return visited
    }

    function findStart() {
        for (let rI = 0; rI < maze.length; rI++) {
            for (let cI = 0; cI < maze[rI].length; cI++) {
                if (maze[rI][cI] === 'S') {
                    return [rI, cI]
                }
            }
        }
        return null
    }

    function solve(row, col) {
        if (!isStepValid(maze, row, col)) {
            return false
        }

        if (maze[row][col] === 'E') {
            visited.add(createKeyVisited(row, col))
            return true
        }
        
        const keyVisited = createKeyVisited(row, col)
        visited.add(keyVisited)

        for (const [rowFactor, colFactor] of directions) {
            if (solve(row + rowFactor, col + colFactor)) {
                return true
            }
        }

        visited.delete(keyVisited)

        return false
    }

    function createKeyVisited(row, col) {
        return `${row}.${col}`
    }

    function isStepValid(maze, row, col) {
        if (row < 0 || row > maze.length - 1) {
            return false
        }

        if (col < 0 || col > maze[row].length - 1) {
            return false
        }
        
        if (maze[row][col] === '#') {
            return false
        }

        if (visited.has(createKeyVisited(row, col))) {
            return false
        }

        return true
    }
}




const maze = [
  ['S', '.', '#', '.'],
  ['#', '.', '.', '.'],
  ['#', '#', '.', '#'],
  ['.', '.', '.', 'E']
]

console.log(solveMaze(maze));