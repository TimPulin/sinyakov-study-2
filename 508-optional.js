const TOKEN = 'sectret_token';
let emptyOptional = null;

class Optional {
  value;

  constructor(token, value) {
    if (token !== TOKEN) {
      throw new Error('Класс Optional нельзя создать через new');
    }
    this.value = value;
  }

  filter(predicate) {
    if (this.#isEmpty) {
      return Optional.empty();
    }

    const result = predicate(this.value);

    if (!result) {
      return Optional.empty();
    }
    return this;
  }

  get() {
    if (this.#isEmpty) {
      throw new Error('NoSuchElementException')
    }

    return this.value
  }

  flatMap(mapper) {
    if (this.#isEmpty){
      return Optional.empty();
    }

    const result = mapper(this.value);

    if (!(result instanceof Optional)) {
      throw new Error('mapper must return Optional')
    }

    return result;
  }

  ifPresent(consumer) {
    if (!this.#isEmpty) {
      consumer(this.value);
    }
  }

  isPresent() {
    return !this.#isEmpty
  }

  map(mapper) {
    if (this.#isEmpty) {
      return Optional.empty();
    }

    const result = mapper(this.value);

    if (result === null || result === undefined) {
      return Optional.empty();
    }

    return new Optional(TOKEN, result);
  }

  equals(obj) {

    if (!(obj instanceof Optional)) {
      return false;
    }

    if (obj.#isEmpty !== this.#isEmpty)  {
      return false;
    }

    if (this.#isEmpty) {
      return true;
    }
    return Object.is(obj.get(), this.value);
  }

  orElse(other) {
    return this.#isEmpty ? other : this.value;
  }

  orElseGet(supplier) {
    return this.#isEmpty ? supplier() : this.value;    
  }

  orElseThrow(exceptionSupplier) {
    if (this.#isEmpty) {
      const exception = exceptionSupplier();
      throw exception;
    }

    return this.value;
  }

  toString() {
    if (this.#isEmpty) {
      return "Optional.empty";
    }

    return `Optional[${this.value}]`;
  }



  static empty() {
    if (!emptyOptional) {
      emptyOptional = new Optional(TOKEN, null);
    } 
    return emptyOptional;
  }

  static of(value) {
    if(
      value === null
      || value === undefined
    ) {
      throw new Error(`value must be not undifined or null`)
    }
    return new Optional(TOKEN, value);
  }

  static ofNullable(value) {
    if(
      value === null
      || value === undefined
    ) {
      return this.empty();
    }    

    return new Optional(TOKEN, value);
  }

  get #isEmpty() {
    return this.value === null;
  }
}


