Object.prototype.set = function (path, value) {
  let prop = this;

  for (const key of path.split('.')) {
    console.log('prop: ', prop);

    if (
      prop === null
      || (typeof prop !== 'object' && typeof prop !== 'function')
      || !Object.hasOwn(prop, key)
    ) {
      prop = Object.create(null);
    }

    prop = value;
  }
};


const obj1 = {
  a: {
    b: {
      x: 1,
    },
  },
};

console.log('test');


console.log(obj1.set('a, b, x, z, w', 'somevalue'));

