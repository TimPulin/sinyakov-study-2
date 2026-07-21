Object.prototype.get = function (path) {

  let value = this;

  for (const key of path.split('.')) {

    if (
      value === null
      || (
        typeof value !== 'object'
        && typeof value !== 'function'
      )
      || !Object.hasOwn(value, key)

    ) {
      return undefined
    }

    value = value[key]
  }

  return value;
};

const obj = {
  b: {
    x: 1,
  },
  a: {
    m: {
      n: {
        y: 8,
        w: {
          z: 9
        }
      },
    },
  },
};

obj.get('a.m.n')
console.log(obj);
