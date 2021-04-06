# Introduction

Our goal with these exercises is to use arrays, objects, and the fundamental building blocks of JS to query our data
and make new assertions. From a list of people whose attributes we have, what conclusions can be drawn?

1. The data we will work with on each exercise is the `people` array.
2. Take a moment to think about the objects in the array.
3. Contemplate how we could sort people based on the data we have about them.
4. All functions we write in this exercise will take the people array as it's only argument

In the commented example below, we use the old javascript syntax to define the function getAmericans().

Although this works, we should prefer to use the new ES6 syntax.

## ES5(Old Javascript)

```js
function getAmericans(persons) {
  // ... code ...
}
```

## ES6(New Javascript)

```js
const getAmericans = (persons) => {
  // ... code ...
}
```

What's different between the two definitionds?

- Notice that the 'function' keyword is replaced by const. Also, there is a equal = between the function name and argument(s).

- Notice also how the parentheses can be left out if the function takes exactly one argument(line 161 & 168 are exactly the same).

- Lastly, notice how the argument is proceeded by a fat arrow => and then the opening curly brace for the beginning of the function body

```js
const getAmericans = (persons) => {
  // ... code ...
}
```

## View map's element with this code snippet

```js
(() =>
  setTimeout(() => {
    console.log("%cIndex of people array: ", "color: green", idx);
    console.log(`%cElement: `, "color: green", person);
  }, 3000 * idx))(idx);
```
