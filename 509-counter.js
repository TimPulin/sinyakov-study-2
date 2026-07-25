function createCounter() {
    let _count = 0;
    return {
        get count() {
            return _count++;
        }
    }
}


const c = createCounter();
console.log(c.count);

console.log(c.count);

console.log(c.count);

console.log(c.count);


