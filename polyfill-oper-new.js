function Person(name, age) {
  this.name = name;
  this.age = age;
}

function nouveau(constructor, ...args) {

  const newInstance = Object.create(constructor.prototype)

  const result = constructor.apply(newInstance, args)
  
  if (result !== null && (typeof result === 'object' || typeof result === 'function') ) {
    return result;
  }
  
  return newInstance;
}

const t = nouveau(Person, "Петя", 25)

console.log('t.test: ', t);
console.log('type: ', typeof t);
console.log('t: ', t);
