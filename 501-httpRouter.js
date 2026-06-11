class HttpRouter {
  handlers = {};

  addHandler (route, method, callback) {
    if (!Object.hasOwn(this.handlers, route)) {
      this.handlers[route] = {}
    }

    if (!Object.hasOwn(this.handlers[route], method)) {
      this.handlers[route][method] = callback
      console.log(`для route ${route} добавлен метод ${method}`)
      return true
    }

    console.log(`у route ${route} метод ${method} уже существует`);
    return false;
  }

  runRequest (route, method) {
    const handler = this.handlers?.[route]?.[method];

    if (!handler) {
      return "Error 404: Not Found"
    }

    return handler();
    
  }
}

