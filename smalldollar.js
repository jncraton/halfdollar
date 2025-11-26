const $ = q =>
  new Proxy(document.querySelectorAll(q), {
    set: (target, prop, value) => target.map(el => (el[prop] = value)),
    get: (target, prop) => {
      if (prop in target) {
        return target[prop]
      }

      if (target.length == 1) {
        return target[0][prop]
      }

      return (...args) =>
        target.forEach(el => {
          el[prop](...args)
        })
    },
  })
