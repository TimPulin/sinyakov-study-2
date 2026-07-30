function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    return arr
  }

  const acc = []
  for (const item of arr) {
    const result = flattenArray(item)
    if (Array.isArray(result)) {
      acc.push(...result)
    } else {
      acc.push(result)
    }

  }

  return acc
}

const arr = [
  11, [21, 22, 23, [31, 32, 33]], [24, 25]
]

console.log(flattenArray(arr));


function sum(arr) {
  if (!Array.isArray(arr)) return arr

  let acc = 0

  for (const item of arr) {
    acc += sum(item)
  }

  return acc
}

console.log('sum: ', sum([1, [2, 3], [[4], 5]]));

function max(arr) {
  if (!Array.isArray(arr)) return arr

  let acc = -Infinity

  for (const item of arr) {
    const number = max(item)

    acc = Math.max(acc, number)
  }

  return acc
}
