const $ = q =>
  new Proxy([...document.querySelectorAll(q)], {
    /*
     * We intercept calls to the NodeList returned by querySelectorAll
     * using a Proxy:
     *
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
     *
     */
    set:
      /*
       * Sets appropriate values
       *
       * We exchange the ability to modify the Array of Elements
       * and simply pass any modification on to every child element
       */

      (target, prop, value) => target.map(el => (el[prop] = value)),
    get: (target, prop) =>
      /*
       * Gets appropriate values
       *
       * We may want access to Array properties (such as forEach), but
       * we would also like to be able to call functions on individual
       * elements (such as addEventListener).
       *
       * In addition to functions, we'd like to be able to access
       * properties (such as textContent).
       */

      // Return the property directly if it exists on the Array
      target[prop] ??
      // Return a wrapper if first child property is function
      (target[0][prop].call
        ? (...args) => target.map(el => el[prop](...args))
        : // Return the propertry from a child
          target[0][prop]),
  })
