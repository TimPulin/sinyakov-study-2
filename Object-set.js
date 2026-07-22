Object.prototype.set = function (path, value) {
  const keyList = path.split('.')
  let prop = this;

  console.log('this: ', this);


  for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i]

    if (prop === null || prop === undefined) {
      prop = { key: {} }
    }

    if (
      typeof prop !== 'object'
    ) {
      prop = {}
    }

    if (
      !(Object.hasOwn(prop, key))
    ) {
      prop[key] = {}
    }

    if (i === keyList.length - 1) {
      prop[key] = value
    } else {
      if (!prop[key] || typeof prop[key] !== 'object') {
        prop[key] = {}
      }
      prop = prop[key]
    }
  }
  return this
};


const obj1 = {
  a: {
    b: {
      x: 1,
      y: 2
    },
  },
};

const newObj = obj1.set('a.b.y.w', 'somevalue')
console.log();

console.log('newObj: ', newObj);



// if (
//   prop === null
//   || (typeof prop !== 'object' && typeof prop !== 'function')
//   || !Object.hasOwn(prop, key)
// ) {
//   // prop[key] = Object.create(null);
// } else {
//   prop += prop[key]
// }