Object.prototype.set = function (path, value) {
  const keyList = path.split('.')
  let prop = this;

  for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i];

    if (i === keyList.length - 1) {
      prop[key] = value
      return
    }

    if (
      !Object.hasOwn(prop, key)
      || prop[key] === null
      || (typeof prop[key] !== 'object' && typeof prop[key] !== 'function')
    ) {
      prop[key] = {}
    }

    prop = prop[key]
  }
}