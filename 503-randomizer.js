class Randomizer {
  start;
  end;
  usedNumbers = new Set();
  poolSize = 0;
  pool = [];
  remaining = 0;

  constructor(a, b, ...rest) {
    const {start, end} = this._normalizeConstructorArgs(a, b, rest);
    this._validate(start, end);
    this.start = start;
    this.end = end;
        
    this.poolSize = this.end - this.start + 1;
    this.pool = this._createNumbersRange();
    this.remaining = this.pool.length;
  }

  next() {
    let value = this._random();

    while (this.usedNumbers.has(value)) {
      if (this.usedNumbers.size >= (this.poolSize)) {
        throw new Error('Random number pool exhausted');
      }
      value = this._random()
    }

    this.usedNumbers.add(value);
    return value;
  }

  fastNext() {
    if (this.pool.length === 0) {
      throw new Error('Random number pool exhausted');
    }

    const index = Math.floor(Math.random() * this.pool.length);
    return this.pool.splice(index, 1)[0];
  }

  fisherYatesNext() {
    if (this.isExhausted) {
      throw new Error('Random number pool exhausted')
    }

    const selectedIndex = Math.floor(Math.random() * this.remaining);
    const value = this.pool[selectedIndex];
    
    this.remaining--;

    this.pool[selectedIndex] = this.pool[this.remaining];
    this.pool[this.remaining] = value;

    return value;
  }

  get isExhausted() {
    return this.remaining === 0;
  }

  _createNumbersRange() {
    return Array.from({length: this.poolSize}, (_, i) => i + this.start)
  }

  _random() {
    return Math.floor(Math.random() * (this.poolSize)) + this.start;
  }

  _normalizeConstructorArgs(a, b, rest) {
    if (rest.length > 0) {
      throw new Error('to many args');
    }

    if (a === undefined && b === undefined) {
      throw new Error('there are no arguments');
    }

    return b === undefined ? {start: 0, end: a} : {start: a, end: b};
  }
  
  _validate(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end))  {
      throw new Error('arguments must be integer')
    }

    if (start > end) {
      throw new Error('second arg must be greater first arg')
    }    

  }  
}

function benchmark(functName) {
  const results = {};

  const cycles = 1_000;
  const iStart = 1;
  const IEnd = 1_000_000;
  const randomizer = new Randomizer(iStart, IEnd);
  

  for (let i = 0; i <= cycles; i++) {
    const timeStart = performance.now();
    for (let i = iStart; i >= IEnd; i++) {
      randomizer[functName]();
    }
    results[i] = performance.now() - timeStart
  }

  const average = Object.values(results)
    .values()
    .reduce((total, current) => total + current, 0) / Object.keys(results).length;

  console.log(average);
}

benchmark('next');
benchmark('fastNext');
benchmark('fisherYatesNext');


