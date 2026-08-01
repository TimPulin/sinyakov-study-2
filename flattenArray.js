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

function count(arr) {
  let counter = 0;

  for(const item of arr) {
    if(!Array.isArray(item)) {
      counter++
    } else {
      counter += count(item)
    }
  }

  return counter
}

console.log('count: ', count([1,[2,[3,[4]]]]));

function firstEven(arr) {
  if(!Array.isArray(arr)) return arr

  for(const item of arr) {
    const result = firstEven(item)
    if(result % 2 === 0) {
      return result
    }
  }

  return null
}

console.log('firstEven: ', firstEven([1,[2,5],[7,[10]]]));
console.log('firstEven([1, 3, [5, [8]]]): ', firstEven([1, 3, [5, [8]]]));
 
console.log('firstEven([[1], [3]])      : ', firstEven([[1], [3]])      );
 
console.log('firstEven([2, [4, 6]])     : ', firstEven([2, [4, 6]])     );
 
console.log('firstEven([])              : ', firstEven([])              );
 

function createPath(obj) {
  
  let paths = []

  if(isObject(obj)) {
    for(const key in obj) {
      if(isObject(obj[key])) {
        const result = createPath(obj[key])
        if(result.length > 0) {
          for(const item of createPath(obj[key])) {
            paths.push(`${key}.${item}`)
          }
        } else {
          paths.push(key)
        }  

      } else {
        paths.push(key)
      }
    }
  }

  return paths
}

const isObject = (item) => {
  return item !== null && typeof item === 'object'
}

let obj1 = {
  a:1,
  b:{
      c:2,
      d:{
          e:3
      }
  }
}

console.log(createPath(obj1));
console.log(createPath({
  a: 1,
  b: 2,
  c: 3
}));
console.log(createPath({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
}));
console.log(createPath({
  a: {
    b: {
      c: {
        d: {
          e: 1
        }
      }
    }
  }
}));
console.log(createPath({
  user: {
    name: "Tom",
    address: {
      city: "London",
      zip: 12345
    }
  },
  settings: {
    theme: "dark",
    language: "en"
  }
}));

console.log(createPath({}))
console.log(createPath({
  a: {}
}))

console.log(createPath({
  a: {},
  b: {
    c: {}
  },
  d: 1
}))

console.log(createPath({
  id: 1,
  profile: {
    name: "Alex",
    contacts: {
      email: "a@mail.com",
      phone: "123"
    },
    active: true
  },
  score: 100
}));


function backtracking(arr) {
  const result = []

  function inner(index, current) {
    if (index === arr.length) {
      result.push([...current])
      return
    }

    inner(index+1, current)

    current.push(arr[index])
    inner(index+1, current)
    current.pop()
  }

  inner(0, [])

  return result
}

console.log(backtracking([1,2,3]));

