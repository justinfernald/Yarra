# Yarra

JavaScript Arrays but beefed.

## Overview

The goal of Yarra is to add common array operations to arrays objects that do not already exists. Yarra is not about speed, but to not completely ignore speed.

It is possible to add onto the prototype of Array in JavaScript, but that is very bad practice for many reasons, so the recommendation is to stay very clear of that. So Yarra extends off of Array.

The syntax of using Yarra attempts to keep as much similarity as possible. Yarra pulls inspiration from the array methods from Lodash.

[Link to Documentation](https://justinfernald.github.io/Yarra/)

---

## Examples

```javascript
Y(3, 2, 1); // -> Y[3,2,1]
Y([3, 2, 1]); // -> Y[3,2,1]
Y([
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12],
    ],
]).dimensions; // -> [2,2,3]
Y(1, 2, 3, 4).tail(); // -> Y[2,3,4]
Y(34, 2, 5, 62, 1).length; // -> 5
Y(1, 2).equals(Y(1, 2)); // -> true
Y(1, 3, 5, 2, 1, 5, 7).unique(); // -> Y[1,3,5,2,7]
Y(1, undefined, 5, 0, false, null).compact(); // -> Y[1,5]
Y(1, 2, 3, 4).sum(); // -> 10
Y(1, 2, 3, 4).product(); // -> 24

for (let x of Y(1, 2, 3)); // works with iterator
```

---

## Future Objectives
-   Better performance
-   Adding Tests
