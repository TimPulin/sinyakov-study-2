function wordSearch(matrix, word) {
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ]
    let visited;
    
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            visited = new Set()

            if (dfs(r, c, 0)) {
                return true
            }
        }
    }

    return false

    function dfs(row, col, charIndex) {
        const visitedKey = `${row}.${col}`;

        if (
            matrix[row][col] === word[charIndex]
        ) {

            if (charIndex === word.length - 1) {
                return true
            }

            visited.add(visitedKey)
            let result = false

            for (const [rowFactor, colFactor] of directions) {
                if (isStepValid(row + rowFactor, col + colFactor)) {
                    if (dfs(row + rowFactor, col + colFactor, charIndex + 1)) {
                        return true
                    }
                }                
            }
            visited.delete(visitedKey)
        } 

        return false
    }

    function isStepValid(r, c) {
        if (
            c > matrix[0].length - 1
            || r > matrix.length - 1
            || c < 0
            || r < 0
            || visited.has(`${r}.${c}`)
        ) {
            return false
        }
        return true
    }
}

const m = [
 ['A','B','C','E'],
 ['S','F','C','S'],
 ['A','D','E','E']
]

console.log(wordSearch(m, 'ASFDEE'));
