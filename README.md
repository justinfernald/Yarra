# Yarra

JavaScript Arrays but beefed

## Overview

Yarra is currently in testing as to what features are to be added and what limitations will come of it.

The goal of Yarra is to add common array operations to arrays objects that do not already exists.

It is possible to add onto the prototype of Array in JavaScript, but that is very bad practice for many reasons, so the recommendation is to stay very clear of that. So what Yarra does is steals all the native array methods by "extending" from Array (not really).

The syntax of using Yarra attempts to keep as much similarity as possible.

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
]).dimensions(); // -> [2,2,3]
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

Question to figure out: Is it possible to log our a Yarra object and have it custom print out a value.

## Current Objectives

-   Feature creation
-   Better performance
-   Adding Tests
-   Conversion to TypeScript
-   Creation of Node module

The main object currently is just the feature creation as right now this is just a test.
