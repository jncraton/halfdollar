# smalldollar

A minimal jQuery-like JS library

Examples
--------

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
