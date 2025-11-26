const $ = q => new Proxy(document.querySelectorAll(q), {
  get(target, prop) {
    if (prop in target) {
      return target[prop]
    }

    return (...args) => target.forEach(el => {
      el[prop](...args)
    })
  },
  set(target, prop, value, receiver) {
    if (prop in target) {
      return Reflect.set(target, prop, value, receiver)
    }

    target.forEach(el => {
      el[prop] = value
    })
    return true
  }
})
