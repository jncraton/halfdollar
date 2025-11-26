# smalldollar

[![Lint](https://github.com/jncraton/smalldollar/actions/workflows/lint.yml/badge.svg)](https://github.com/jncraton/smalldollar/actions/workflows/lint.yml)
[![Deploy](https://github.com/jncraton/smalldollar/actions/workflows/deploy.yaml/badge.svg)](https://github.com/jncraton/smalldollar/actions/workflows/deploy.yaml)

A minimal jQuery-like JS library

[smalldollar.min.js](https://jncraton.github.io/smalldollar/smalldollar.min.js)

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

smalldollar

```js
$('button').addEventListener('click' () => {
  $('#tallies').textContent += '|'
})
```
