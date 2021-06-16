yarra.js / [Exports](modules.md)

# Yarra

JavaScript Arrays but beefed

## Overview

The goal of Yarra is to add common array operations to arrays objects that do not already exists. Yarra is not about speed, but to not completely ignore speed.

It is possible to add onto the prototype of Array in JavaScript, but that is very bad practice for many reasons, so the recommendation is to stay very clear of that. So Yarra extends off of Array.

The syntax of using Yarra attempts to keep as much similarity as possible. Yarra pulls inspiration from the array methods from Lodash.

---

## Feature / Function List

### To add

-   All native array functions
-   Static functions
    -   `allocate(n)`: Create new Yarra with n spaces preallocated
    -   `entries(x)`: Get entries of object as Yarra
    -   `range({ start = 0, end, step = 1, inclusive = false })`: range values as Yarra
    -   `rangeMap({ start = 0, end, step = 1, inclusive = false, f = (x) => x })`: range with values mapped
    -   `linSpace(start = 0, end = 1, n = 2)`: linearly space values as Yarra
    -   `linSpaceMap(start = 0, end = 1, n = 2, f)`: linSpace with values mapped
-   Getters
    -   Negative indexing
    -   `head`: Get first element
    -   `tail`: Get last element
    -   `full`: Get entries
    -   `size`: Get filled values count
    -   `dimensions`: Get Yarra of dimensions
    -   Custom indexing
-   Setters
    -   Negative indexing
    -   Custom indexing
-   Functions
    -   `written(oxfordComma = true)`: Get in string format following English grammar
    -   `unique((loose = false))`: Get content with unique values only
    -   `uniqueWith(f)`: Get content with unique values only with custom comparator
    -   `isUnique((loose = false))`: Check if content is unique values
    -   `isUniqueWith(f)`: Check if content is unique values with custom comparator
    -   `count((f = Boolean))`: Get count of occurrences of truth results from function
    -   `occurrences(f = (a) => a)`: Returns object of occurrence count with f mapping
    -   `sample()`: Get a single random value from content
    -   `chunk(n)`: Generate array in chunks of size n
    -   `uncover((n = 1))`: Alias to flatten
    -   `cover((n = 1))`: Wraps content in Yarra n times
    -   `elementWise(arr, f, singleDimension = false)`: Similar to map, but with two arrays
    -   `add(arr)`: elementWise with addition operation
    -   `mult(arr)`: elementWise with multiplication operation
    -   `matrixMult(arr)`: matrix multiplication with another Yarra
    -   `transpose()`: transpose content
    -   `transposeMutate()`: transpose with mutation
    -   `sum()`: sum of all content
    -   `product()` product of all content
    -   `max()`: get max value of content
    -   `min()`: get min value of content
    -   `average()`: get average value of content
    -   `none(f)`: inverse of some
    -   `mutate(newValue)`: sets value of content to newValue
    -   `get(...indices)`: another method of indexing using function with comma separation
    -   `set(...indices)`: similar to get indexing with returning function to pass in value to set
    -   `at(...indices)`: retrieve array of values at indices
    -   `pullAt(...indices)`: at with removal of values at indices
    -   `mapMutate(f, thisArg)`: map with mutation
    -   `filterMutate(f, thisArg)`: filter with mutation
    -   `rejectMutate(f, thisArg)`: reject with mutation
    -   `reject(f, thisArg)`: inverse of filter
    -   `rejectFull(f, thisArg)`: reject with entries
    -   `filterFull(f, thisArg)`: filter with entries
    -   `split(f)`: similar to filter, but with return of accepted and rejected values
    -   `splitFull(f)`: split with entries
    -   `splitAt(...indices)`: split content at indices into multiple arrays
    -   `findFull(f)`: find with value and index
    -   `findLast(f)`: find with from right to left search
    -   `findLastIndex(f)`: findLast with index
    -   `findLastFull(f)`: findLast with value and index
    -   `findAllIndex(f)`: filter with indices instead of values
    -   `allIndexOf(v, (loose = false))`: indexOf with array return of all occurrences
    -   `flattenDeep()`: flattens array completely
    -   `shuffle()`: shuffles array _everyday I'm shufflin'_
    -   `equals(rhs, (loose = false))`: shallow checks element wise if content equals rhs array
    -   `equalsWith(rhs, f)`: equals with custom comparator
    -   `clone()`: clones Yarra
    -   `concat(...args)`: same as regular concat with speed up
    -   `concatMutate(...args)`: concat with mutation
    -   `insertItem(x, (i = 0))`: insert item at index and returns new Yarra
    -   `insertList(list, (i = 0))`: inserts multiple items at index and returns new Yarra
    -   `insertItemMutate(x, (i = 0))`: insertItem with mutation
    -   `insertListMutate(list, (i = 0))`: insertList with mutation
    -   `toArray()`: converts to native Array

### Planned

-   Static functions
    -   `#toIndices(input)`: convert string to future indexing format
-   Getters
    -   Take indexing format and return corresponding values
    -   Change to `dimensions` such that it doesn't just check first element for dimensions (possible options of max, min, first, consistent)
        -   max will return max length for each dimension
        -   min will return min length for each dimension
        -   first(current) will return min length for each dimension
        -   consistent will return dimension and enforce they are all the same size and if not throw an error
        -   this will require making this a function instead of getter
-   Setters
    -   Take indexing format allow setting values to each (replace all with scalar value and replace each with array value)
-   Functions
    -   `takeWhile(f)`: returns Yarra of items up to when f returns false (starting from left to right)
    -   `takeWhileRight(f)`: takeWhile from right to left
    -   `dropWhile(f)`: returns Yarra of rest of content once f returns false (starting from left to right)
    -   `dropWhileRight(f)`: dropWhile from right to left
    -   Enforce dimension consistency to elementWise functions

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

## Extra Objectives

-   Better performance
-   Adding Tests
-   Conversion to TypeScript
-   Creation of Node module
