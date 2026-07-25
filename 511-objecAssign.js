function objectAssign(target, ...source) {
    if (typeof target !== 'object' || target === null ) {
        throw new Error('target must be object');
    }

    if (source.some((item) => typeof item !== 'object' || item === null)) {
        throw new Error('source must be object');
    }

    for (const item of source) {
        const props = Object.getOwnPropertyDescriptors(item);
        Object.defineProperties(target, props);
    }

    return target;

}

const obj1 = {
    x: 1,
    y: 2,
    get sum() {
        return this.x + this.y;
    },
    set incY(increment) {
        this.y += increment;
    }
}

const obj2 = {
    z: 5,
    r: 0,
}

const obj = objectAssign(obj2, obj1);


console.log(obj);
console.log(obj === obj2);
obj.incY = 4;
console.log(obj.sum)
console.log(obj.y)


function test() {
    return true;
}
Object.assign(obj, test)
console.log(obj);

