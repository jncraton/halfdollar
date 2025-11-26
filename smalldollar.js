const proxy = {
  get(target, prop) {
    if (!(prop in target)) {
      console.warn(`Attempted to read undefined property "${prop}"`)
      return undefined
    }
    return target[prop]
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
}

const $ = q => new Proxy(document.querySelectorAll(q), proxy)
