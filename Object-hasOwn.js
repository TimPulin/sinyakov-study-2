function hasOwn(obj, key) {

    const hasPrototype = Object.getPrototypeOf(obj)

    if(hasPrototype !== null) {
        return Object.hasOwn(obj, key)
    } 

    return Object.keys(obj).includes(key)

}

const o1 = { a: 1 };
const o2 = Object.create(null);
o2.a = 1;

console.log(hasOwn(o1, 'a'));
console.log(hasOwn(o2, 'a'));



