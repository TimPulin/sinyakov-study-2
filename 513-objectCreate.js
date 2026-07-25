function objectCreate(prototype) {
  
  if (typeof prototype !== 'object') {
    throw new TypeError("TypeError: Object prototype may only be an Object or null")
  }

  if (prototype === null) {
    const obj = {};
    obj.__proto__ = null;
    return obj;
  }

  function F() {};
  F.prototype = prototype;

  return new F;
}
