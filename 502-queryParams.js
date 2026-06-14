class QueryParams {
    params;

    constructor(data) {
        this.params = this._parseData(data);
    }


    append(key, value) {
      const values = this.params.get(key) ?? []
      values.push(value)
      this.params.set(key, values);
    }

    set(key, value) {
        this.params.set(key, [value])
    }

    delete(key) {
        this.params.delete(key);
    }

    get(key) {
        if(!this.params.has(key) || this.params.get(key).length === 0) {
            return null;
        }
        return this.params.get(key)[0]
    }

    getAll(key) {
        if(!this.params.has(key) || this.params.get(key).length === 0) {
            return [];
        }

        return this.params.get(key);
    }

    has(key, value=null) {
      if (!this.params.has(key)) {
        return false
      }

      if (value === null) {
        return true
      }

      return this.params.get(key).includes(value)
      
    }

    toString(){
      const list = [];
      for (const [key, value] of this.params.entries()) {
        for (const item of value) {
          list.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
        }
      }
      return list.join('&');
    }

    _parseData(data) {
      if (!data) {
        return new Map();
      }

      if (typeof data === 'string') {
        return this._parseQueryString(data);
      }

      if (typeof data === 'object') {
        return this._parseObject(data);
      }

      return new Map();

    }

    _parseObject(data) {
      const params = new Map();
      for (const [key, value] of Object.entries(data)) {
        params.set(key, [value]);
      }
      return params;
    }

    _parseQueryString(queryString='') {
        const params = new Map();
        if (queryString === '') {
            return params;
        }

        const list = queryString.split('&');

        for (const item of list) {
            if (!item.includes('=')) {
             continue;       
            }

            const index = item.indexOf('=')
            const key = item.slice(0, index);
            const value = item.slice(index + 1);

            if (!params.has(key)) {
                params.set(key, [])
            }

            params.get(key).push(value);
        }
        return params;
    }
}


const a = new QueryParams({testKey: 'testValue'});
console.log(a)

console.log(a.toString())
