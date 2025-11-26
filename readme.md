# halfdollar

[![Lint](https://github.com/jncraton/halfdollar/actions/workflows/lint.yml/badge.svg)](https://github.com/jncraton/halfdollar/actions/workflows/lint.yml)
[![Deploy](https://github.com/jncraton/halfdollar/actions/workflows/deploy.yaml/badge.svg)](https://github.com/jncraton/halfdollar/actions/workflows/deploy.yaml)

A minimal jQuery-like JS library

[halfdollar.min.js](https://jncraton.github.io/halfdollar/halfdollar.min.js)

This is similar in principle to tools such as [cash](https://github.com/fabiospampinato/cash), but it sticks much closer to vanilla JavaScript.

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
