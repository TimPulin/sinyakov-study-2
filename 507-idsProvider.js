const ID_STATUS = {
  free: 'free',
  used: 'used'
}

class IdsProvider {
  #ids = [ID_STATUS.free];
  
  generateId() {
    const freeIndex = this.#ids.findIndex((item) => item === ID_STATUS.free);

    this.#ids[freeIndex] = ID_STATUS.used;

    if (freeIndex === this.#ids.length - 1) {
      this.#ids.push(ID_STATUS.free);
    }

    return freeIndex;
  }

  revokeId(index) {
    if (
      Number.isInteger(index)
      || index < 0
      || index > this.#ids.length - 1
    ) {
      return;
    }

    this.#ids[index] = ID_STATUS.free;
  }
}