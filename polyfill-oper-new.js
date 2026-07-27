function Person(name, age) {
  this.name = name;
  this.age = age;
}

function nouveau(constructor, ...args) {

  const newInstance = Object.create(constructor)

  const result = constructor.apply(this, args)

  return typeof result === 'object' ? result : newInstance
}

const t = nouveau(Person, "Петя", 25)

console.log('t.test: ', t);
console.log('type: ', typeof t);
console.log('t: ', t);
