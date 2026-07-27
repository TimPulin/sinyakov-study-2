Function.prototype.pipe = function (fn) {

  return (...args) => {
    return fn(this(...args));
  }
}

const double = x => x * 2;
const cube = x => x ** 3;
const inc = x => x + 1;

const foo2 = inc.pipe(cube).pipe(double).pipe(inc);

console.log(foo2(2)); // 54

