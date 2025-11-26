const $ = q =>
  new Proxy(document.querySelectorAll(q), {
    get(target, prop) {
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
    set(target, prop, value) {
      [...target].forEach(el => {
        el[prop] = value
      })
    },
  })
