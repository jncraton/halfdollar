const $ = q =>
  new Proxy([...document.querySelectorAll(q)], {
    /*
     * We intercept calls to the NodeList returned by querySelectorAll
     * using a Proxy:
     *
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
     *
     * `set` is simple
     *
     * We exchange the ability to modify the Array of Elements
     * and simply pass any modification on to every child element
     */
    set: (target, prop, value) => target.map(el => (el[prop] = value)),
    /*
     * `get` is more complicated
     *
     * We may want access to Array properties (such as forEach), but
     * we would also like to be able to call functions on individual
     * elements (such as addEventListener).
     *
     * In addition to functions, we'd like to be able to access
     * properties (such as textContent).
     */
    get: (target, prop) => {
      // Return the property directly if it exists on the Array
      if (prop in target) {
        return target[prop]
      }

      // Return a wrapper function when we have multiple children
      if (target[1]) {
        return (...args) => target.map(el => el[prop](...args))
      }

      // Return the propertry from a child when we only have one
      return target[0][prop]
    },
  })
