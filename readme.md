# halfdollar

[![Lint](https://github.com/jncraton/halfdollar/actions/workflows/lint.yml/badge.svg)](https://github.com/jncraton/halfdollar/actions/workflows/lint.yml)
[![Deploy](https://github.com/jncraton/halfdollar/actions/workflows/deploy.yaml/badge.svg)](https://github.com/jncraton/halfdollar/actions/workflows/deploy.yaml)

A minimal jQuery-like JS library

[halfdollar.min.js](https://jncraton.github.io/halfdollar/halfdollar.min.js)

This is somewhat similar to tools such as [cash](https://github.com/fabiospampinato/cash), but it sticks much closer to vanilla JavaScript.

Like jQuery, the `$` function here acts as a factory for creating references to DOM nodes. Unlike jQuery, we directly return an `Array` of DOM elements. We override the behavior of setting properties on the `Array` as follows:

1. Get the property if it exists on the array
2. Otherwise, if the array has at least two elements, return a
   wrapper calling the property on each array item
3. Otherwise, return that attribute of the first array element

The methods that can be used on the elements returned by the factory function are the same methods that can be used with native `Element` objects. The functions will simply be applied to all elements in the collection.

## Examples

VanillaJS

```js
const buttons = document.querySelectorAll('button')
const counter = document.querySelector('#tallies')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    tallies.textContent += '|'
  })
})
```

halfdollar

```js
$('button').addEventListener('click' () => {
  $('#tallies').textContent += '|'
})
```
