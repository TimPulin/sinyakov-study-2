
function permutations(arr) {
  const result = []

  function inner(current, available) {
    if (available.length === 0) {
        result.push([...current])
        return
    }

    for (let i=0; i<available.length; i++) {
        current.push(available[i])
        inner(current, available.toSpliced(i, 1))
        current.pop()
    }


  }


  inner([], arr)

  return result

}

console.log(permutations([1,2,3]));


function combinations(arr, k) {
  const result = []

  function inner(current, cI, options ) {
    if (current.length === k) {
      result.push([...current])
      return
    }

    for (let i = cI; i < options.length; i++) {
      current.push(options[i])
      inner(current, i+1, options)
      current.pop()
    }
  }

  inner([], 0, arr)

  return result
}

console.log(combinations([1,2,3,4], 2));

function generateBinary(n) {
  const result = []

  function inner(current) {
    if (current.length === n) {
      result.push(current)
      return
    }

    for (const number of [0, 1]) {
      inner(`${current}${number}`)
    }
  }

  inner('')
  return result
}

console.log('generateBinary', generateBinary(3));

function dfs(tree) {
  const result = []

  function inner(path, tree) {
    const currentPath = `${path}${tree.value}`

    result.push(currentPath)
    if (tree.children.length === 0) {
      return
    }

    for (const branch of tree.children) {
      inner(currentPath, branch)
    }
  }

  inner('', tree)
  return result
}

const tree = {
  value: "A",
  children: [
    {
      value: "B",
      children: [
        {
          value: "D",
          children: []
        },
        {
          value: "E",
          children: []
        }
      ]
    },
    {
      value: "C",
      children: []
    }
  ]
}

console.log(dfs(tree));
