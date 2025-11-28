# halfdollar

[![Lint](https://github.com/jncraton/halfdollar/actions/workflows/lint.yml/badge.svg)](https://github.com/jncraton/halfdollar/actions/workflows/lint.yml)
[![Deploy](https://github.com/jncraton/halfdollar/actions/workflows/deploy.yaml/badge.svg)](https://github.com/jncraton/halfdollar/actions/workflows/deploy.yaml)

A minimal jQuery-like JS library

[halfdollar.min.js](https://jncraton.github.io/halfdollar/halfdollar.min.js)

This is somewhat similar to tools such as [cash](https://github.com/fabiospampinato/cash), but it sticks much closer to vanilla JavaScript.

Like jQuery, the `$` function here acts as a factory for creating references to DOM nodes.

## Examples

Vanilla JavaScript

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

## API

The following methods will pass through to every selected Element object:

```js
after()
animate()
append()
attachShadow()
before()
checkVisibility()
closest()
computedStyleMap()
getAnimations()
getAttribute()
getAttributeNames()
getAttributeNode()
getAttributeNodeNS()
getAttributeNS()
getBoundingClientRect()
getClientRects()
getElementsByClassName()
getElementsByTagName()
getElementsByTagNameNS()
getHTML()
hasAttribute()
hasAttributeNS()
hasAttributes()
hasPointerCapture()
insertAdjacentElement()
insertAdjacentHTML()
insertAdjacentText()
matches()
moveBefore()
prepend()
querySelector()
querySelectorAll()
releasePointerCapture()
remove()
removeAttribute()
removeAttributeNode()
removeAttributeNS()
replaceChildren()
replaceWith()
requestFullscreen()
requestPointerLock()
scroll()
scrollBy()
scrollIntoView()
scrollTo()
setAttribute()
setAttributeNode()
setAttributeNodeNS()
setAttributeNS()
setHTMLUnsafe()
setPointerCapture()
toggleAttribute()
```

The following properties will be set for all selected Element objects and read from the first selected Element:

```js
ariaActiveDescendantElement
ariaAtomic
ariaAutoComplete
ariaBrailleLabel
ariaBrailleRoleDescription
ariaBusy
ariaChecked
ariaColCount
ariaColIndex
ariaColIndexText
ariaColSpan
ariaControlsElements
ariaCurrent
ariaDescribedByElements
ariaDescription
ariaDetailsElements
ariaDisabled
ariaErrorMessageElements
ariaExpanded
ariaFlowToElements
ariaHasPopup
ariaHidden
ariaInvalid
ariaKeyShortcuts
ariaLabel
ariaLabelledByElements
ariaLevel
ariaLive
ariaModal
ariaMultiLine
ariaMultiSelectable
ariaOrientation
ariaOwnsElements
ariaPlaceholder
ariaPosInSet
ariaPressed
ariaReadOnly
ariaRequired
ariaRoleDescription
ariaRowCount
ariaRowIndex
ariaRowIndexText
ariaRowSpan
ariaSelected
ariaSetSize
ariaSort
ariaValueMax
ariaValueMin
ariaValueNow
ariaValueText
assignedSlot
attributes
childElementCount
children
classList
className
clientHeight
clientLeft
clientTop
clientWidth
currentCSSZoom
elementTiming
Experimental
firstElementChild
id
innerHTML
lastElementChild
localName
namespaceURI
nextElementSibling
outerHTML
part
prefix
previousElementSibling
role
scrollHeight
scrollLeft
scrollTop
scrollWidth
shadowRoot
slot
tagName
```

The following methods and properties interact with the Array of Element objects as an Array:

```js
at()
concat()
copyWithin()
entries()
every()
fill()
filter()
find()
findIndex()
findLast()
findLastIndex()
flat()
flatMap()
forEach()
includes()
indexOf()
join()
keys()
lastIndexOf()
map()
pop()
push()
reduce()
reduceRight()
reverse()
shift()
slice()
some()
sort()
splice()
toLocaleString()
toReversed()
toSorted()
toSpliced()
toString()
unshift()
values()
with()
length
```
