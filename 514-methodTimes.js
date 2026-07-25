Number.prototype.times = function(callback) {
    for (let i = 0; i < this.valueOf(); i++) {
        callback(i)
    }
}
5..times()
const digit = 3;
digit.times(console.log)



