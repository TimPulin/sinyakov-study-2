Array.prototype.map2 = function (callback, thisArg) {
  const arr = Array(this.length);

  for (let i = 0; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      arr[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  return arr;
}

const a = Array(5);
a[2] = 2;
const b = a.map2(x => x * 2);
console.log(0 in b); // false

const obj = {
  x: 5,
  fn(num) {
    return num * this.x
  }
};
const arr = [1, 2, 3, 4]
const result = arr.map2(obj.fn, obj);
// const result = arr.map2((x) => x * 2);

console.log('result ', result);
