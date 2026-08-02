Function.prototype.call2 = function(obj, ...args) {

    if (obj === null || obj === undefined) {
        obj = globalThis
    } else {
        obj = Object(obj)
    }    
    
    

    const symbol = Symbol('key')
    obj[symbol] = this
    const result = obj[symbol](...args)
    delete obj[symbol]

    return result
}

function f(a, b) {
  return this.x + a + b;
}

const obj = { x: 100 };

f.call2(obj, 20, 3) === 123
console.log(f.call2(obj, 20, 3));
console.log(f.call2('12345', 20, 3));


