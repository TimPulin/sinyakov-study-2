function groupBy(iterable, cb) {
  if (
    iterable === null 
    || typeof iterable[Symbol.iterator] !== 'function'
  ) {
    throw new Error('iterable is not iterable');
  }

  const result = Object.create(null);

  let index = 0;
  for (const item of iterable) {
    const key = String(cb(item, index++));
    (result[key] ??= []).push(item)
  }

  return result;
}

