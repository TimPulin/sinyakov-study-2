function Tuple(...args) {
    if (!(this instanceof Tuple)) {
        return new Tuple(...args);
    }

    this.list = Object.freeze(Array.from(args));
}

Tuple.prototype.equals = function(other) {
    if (!(other instanceof Tuple)) {
        return false;
    }

    if (this.list.length !== other.list.length) {
        return false;
    }

    for (let index = 0; index < this.list.length; index++) {
        if (!Object.is(this.list[index], other.list[index])) {
            return false;
        }
    }

    return true;
}


Object.defineProperty(Tuple, "list", {
    value: [...args],
    writable: false,
    enumerable: false,
    configurable: false
});


const t = Tuple(1, 2, 3);
console.log(t);
const t2 = Tuple(1, 2, 3);
t2.list[1] = 'dddd';



