class BrowserHistory {
    currentIndex;
    history = [];

    constructor(url) {
        this.history.push(url);
        this.currentIndex = 0;
    }

    visit(url) {
        if (this.currentIndex !== this.history.length - 1) {
            this.history = this.history.slice(0, this.currentIndex + 1);
        }
        
        this.history.push(url);
        this.currentIndex = this.history.length -1;  
        return this.#currentUrl;        
    }

    back() {
        if (this.currentIndex > 0) {
            this._decreaseIndex();
            return this.#currentUrl;
        }

        return null;
    }

    forward() {
        if (this.currentIndex < this.history.length - 1) {
            this._increaseIndex();
            return this.#currentUrl;
        }

        return null;
    }

    get #currentUrl() {
        return this.history[this.currentIndex];
    }

    _increaseIndex() {
        this.currentIndex++;
    }

    _decreaseIndex() {
        this.currentIndex--;
    }
}

const history = new BrowserHistory("A");

// A; visit B; visit C; visit D; back; back; visit E, visit F; back; back
console.log('visit(B) ', history.visit('B'));
console.log('history.currentIndex ', history.currentIndex)

console.log('visit(C) ', history.visit('C'));
console.log('history.currentIndex ', history.currentIndex)

console.log('visit(D) ', history.visit('D'));
console.log('history.currentIndex ', history.currentIndex)

console.log('back() ', history.back()); // C
console.log('history.currentIndex ', history.currentIndex)

console.log('back() ', history.back()); // B
console.log('history.currentIndex ', history.currentIndex)

console.log('visit(E) ', history.visit('E'));
console.log('history.currentIndex ', history.currentIndex)

console.log('visit(F) ', history.visit('F'));
console.log('history.currentIndex ', history.currentIndex)

console.log('back() ', history.back()); // E
console.log('history.currentIndex ', history.currentIndex)

console.log('back() ', history.back()); // B
console.log('history.currentIndex ', history.currentIndex)
