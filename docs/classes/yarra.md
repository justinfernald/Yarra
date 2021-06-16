[yarra.js](../README.md) / [Exports](../modules.md) / Yarra

# Class: Yarra<Type\>

## Type parameters

| Name |
| :------ |
| `Type` |

## Hierarchy

- `Array`<Type\>

  ↳ **Yarra**

## Table of contents

### Constructors

- [constructor](yarra.md#constructor)

### Properties

- [length](yarra.md#length)
- [toCycleGenerator](yarra.md#tocyclegenerator)
- [toGenerator](yarra.md#togenerator)
- [[Symbol.species]](yarra.md#[symbol.species])

### Accessors

- [dimensions](yarra.md#dimensions)
- [full](yarra.md#full)
- [head](yarra.md#head)
- [last](yarra.md#last)
- [size](yarra.md#size)

### Methods

- [[Symbol.iterator]](yarra.md#[symbol.iterator])
- [[Symbol.unscopables]](yarra.md#[symbol.unscopables])
- [add](yarra.md#add)
- [allIndexOf](yarra.md#allindexof)
- [at](yarra.md#at)
- [average](yarra.md#average)
- [chunk](yarra.md#chunk)
- [clone](yarra.md#clone)
- [compact](yarra.md#compact)
- [concat](yarra.md#concat)
- [concatMutate](yarra.md#concatmutate)
- [copyWithin](yarra.md#copywithin)
- [count](yarra.md#count)
- [cover](yarra.md#cover)
- [elementWise](yarra.md#elementwise)
- [entries](yarra.md#entries)
- [equals](yarra.md#equals)
- [equalsWith](yarra.md#equalswith)
- [every](yarra.md#every)
- [fill](yarra.md#fill)
- [filter](yarra.md#filter)
- [filterFull](yarra.md#filterfull)
- [filterMutate](yarra.md#filtermutate)
- [find](yarra.md#find)
- [findAllIndex](yarra.md#findallindex)
- [findFull](yarra.md#findfull)
- [findIndex](yarra.md#findindex)
- [findLast](yarra.md#findlast)
- [findLastFull](yarra.md#findlastfull)
- [findLastIndex](yarra.md#findlastindex)
- [flat](yarra.md#flat)
- [flatMap](yarra.md#flatmap)
- [flattenDeep](yarra.md#flattendeep)
- [forEach](yarra.md#foreach)
- [get](yarra.md#get)
- [getFrom](yarra.md#getfrom)
- [includes](yarra.md#includes)
- [indexOf](yarra.md#indexof)
- [initial](yarra.md#initial)
- [insertItem](yarra.md#insertitem)
- [insertItemMutate](yarra.md#insertitemmutate)
- [insertList](yarra.md#insertlist)
- [insertListMutate](yarra.md#insertlistmutate)
- [isUnique](yarra.md#isunique)
- [isUniqueWith](yarra.md#isuniquewith)
- [join](yarra.md#join)
- [keys](yarra.md#keys)
- [lastIndexOf](yarra.md#lastindexof)
- [map](yarra.md#map)
- [mapMutate](yarra.md#mapmutate)
- [matrixMult](yarra.md#matrixmult)
- [max](yarra.md#max)
- [min](yarra.md#min)
- [mult](yarra.md#mult)
- [mutate](yarra.md#mutate)
- [none](yarra.md#none)
- [occurrences](yarra.md#occurrences)
- [pop](yarra.md#pop)
- [product](yarra.md#product)
- [pullAt](yarra.md#pullat)
- [push](yarra.md#push)
- [reduce](yarra.md#reduce)
- [reduceRight](yarra.md#reduceright)
- [reject](yarra.md#reject)
- [rejectFull](yarra.md#rejectfull)
- [rejectMutate](yarra.md#rejectmutate)
- [reverse](yarra.md#reverse)
- [sample](yarra.md#sample)
- [set](yarra.md#set)
- [setAllFrom](yarra.md#setallfrom)
- [setFrom](yarra.md#setfrom)
- [shift](yarra.md#shift)
- [shuffle](yarra.md#shuffle)
- [slice](yarra.md#slice)
- [some](yarra.md#some)
- [sort](yarra.md#sort)
- [splice](yarra.md#splice)
- [split](yarra.md#split)
- [splitAt](yarra.md#splitat)
- [splitFull](yarra.md#splitfull)
- [sum](yarra.md#sum)
- [tail](yarra.md#tail)
- [toArray](yarra.md#toarray)
- [toLocaleString](yarra.md#tolocalestring)
- [toString](yarra.md#tostring)
- [transpose](yarra.md#transpose)
- [transposeMutate](yarra.md#transposemutate)
- [uncover](yarra.md#uncover)
- [unique](yarra.md#unique)
- [uniqueWith](yarra.md#uniquewith)
- [unshift](yarra.md#unshift)
- [values](yarra.md#values)
- [written](yarra.md#written)
- [allocate](yarra.md#allocate)
- [entries](yarra.md#entries)
- [from](yarra.md#from)
- [generateTemplate](yarra.md#generatetemplate)
- [isArray](yarra.md#isarray)
- [linSpace](yarra.md#linspace)
- [linSpaceMap](yarra.md#linspacemap)
- [of](yarra.md#of)
- [range](yarra.md#range)
- [rangeMap](yarra.md#rangemap)
- [toIndices](yarra.md#toindices)

## Constructors

### constructor

• **new Yarra**<Type\>(`args`)

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Iterable`<Type\> |

#### Overrides

Array&lt;Type\&gt;.constructor

#### Defined in

[src/Yarra.ts:223](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L223)

• **new Yarra**<Type\>(...`args`)

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Type`[] |

#### Overrides

Array&lt;Type\&gt;.constructor

#### Defined in

[src/Yarra.ts:225](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L225)

## Properties

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1224

___

### toCycleGenerator

• **toCycleGenerator**: () => `Generator`<any, never, unknown\>

#### Type declaration

▸ (): `Generator`<any, never, unknown\>

##### Returns

`Generator`<any, never, unknown\>

#### Defined in

[src/Yarra.ts:795](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L795)

___

### toGenerator

• **toGenerator**: () => `Generator`<any, void, unknown\>

#### Type declaration

▸ (): `Generator`<any, void, unknown\>

##### Returns

`Generator`<any, void, unknown\>

#### Defined in

[src/Yarra.ts:794](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L794)

___

### [Symbol.species]

▪ `Static` `Readonly` **[Symbol.species]**: `ArrayConstructor`

#### Inherited from

Array.\_\_@species

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:314

## Accessors

### dimensions

• `get` **dimensions**(): [Yarra](yarra.md)<number\>

#### Returns

[Yarra](yarra.md)<number\>

#### Defined in

[src/Yarra.ts:314](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L314)

___

### full

• `get` **full**(): [Yarra](yarra.md)<[`Type`, `number`]\>

#### Returns

[Yarra](yarra.md)<[`Type`, `number`]\>

#### Defined in

[src/Yarra.ts:303](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L303)

___

### head

• `get` **head**(): `Type`

#### Returns

`Type`

#### Defined in

[src/Yarra.ts:295](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L295)

___

### last

• `get` **last**(): `Type`

#### Returns

`Type`

#### Defined in

[src/Yarra.ts:299](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L299)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/Yarra.ts:307](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L307)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `IterableIterator`<Type\>

Iterator

#### Returns

`IterableIterator`<Type\>

#### Inherited from

Array.\_\_@iterator

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

### [Symbol.unscopables]

▸ **[Symbol.unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

#### Inherited from

Array.\_\_@unscopables

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

### add

▸ **add**(`arr`): [Yarra](yarra.md)<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [Yarra](yarra.md)<any\> |

#### Returns

[Yarra](yarra.md)<any\>

#### Defined in

[src/Yarra.ts:438](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L438)

___

### allIndexOf

▸ **allIndexOf**(`v`, `loose?`): `number`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `any` | `undefined` |
| `loose` | `boolean` | false |

#### Returns

`number`[]

#### Defined in

[src/Yarra.ts:712](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L712)

___

### at

▸ **at**(`indices`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `indices` | `number`[] |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:593](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L593)

▸ **at**(...`indices`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...indices` | `number`[] |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:594](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L594)

___

### average

▸ **average**(): `number`

#### Returns

`number`

#### Defined in

[src/Yarra.ts:507](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L507)

___

### chunk

▸ **chunk**(`n`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`any`[]

#### Defined in

[src/Yarra.ts:386](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L386)

___

### clone

▸ **clone**(): [Yarra](yarra.md)<Type\>

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:745](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L745)

___

### compact

▸ **compact**(): `Type`[]

#### Returns

`Type`[]

#### Defined in

[src/Yarra.ts:345](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L345)

___

### concat

▸ **concat**(...`args`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[Yarra](yarra.md)<Type\>

#### Overrides

Array.concat

#### Defined in

[src/Yarra.ts:750](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L750)

___

### concatMutate

▸ **concatMutate**(...`args`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:760](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L760)

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [Yarra](yarra.md)<Type\>

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[Yarra](yarra.md)<Type\>

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

### count

▸ **count**(`f?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `BooleanConstructor` |

#### Returns

`number`

#### Defined in

[src/Yarra.ts:367](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L367)

___

### cover

▸ **cover**(`n?`): [Yarra](yarra.md)<any\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `n` | `number` | 1 |

#### Returns

[Yarra](yarra.md)<any\>

#### Defined in

[src/Yarra.ts:400](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L400)

___

### elementWise

▸ **elementWise**(`arr`, `f`, `singleDimension?`): [Yarra](yarra.md)<any\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arr` | [Yarra](yarra.md)<any\> | `undefined` |
| `f` | (`a`: `Type`, `b`: `any`, `i`: `number`) => `any` | `undefined` |
| `singleDimension` | `boolean` | false |

#### Returns

[Yarra](yarra.md)<any\>

#### Defined in

[src/Yarra.ts:405](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L405)

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, `Type`]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, `Type`]\>

#### Inherited from

Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

### equals

▸ **equals**(`rhs`, `loose?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rhs` | `any`[] | `undefined` |
| `loose` | `boolean` | false |

#### Returns

`boolean`

#### Defined in

[src/Yarra.ts:732](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L732)

___

### equalsWith

▸ **equalsWith**(`rhs`, `f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rhs` | `any`[] |
| `f` | (`a`: `Type`, `b`: `any`, `i`: `number`) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/Yarra.ts:740](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L740)

___

### every

▸ **every**<S\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1331

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1340

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [Yarra](yarra.md)<Type\>

Returns the this object after filling the section identified by start and end with value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Type` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[Yarra](yarra.md)<Type\>

#### Inherited from

Array.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

### filter

▸ **filter**<S\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1367

▸ **filter**(`predicate`, `thisArg?`): `Type`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`Type`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1373

___

### filterFull

▸ **filterFull**(`f`, `thisArg?`): [`Type`, `number`][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `boolean` |
| `thisArg?` | `any` |

#### Returns

[`Type`, `number`][]

#### Defined in

[src/Yarra.ts:647](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L647)

___

### filterMutate

▸ **filterMutate**(`f`, `thisArg?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `boolean` |
| `thisArg?` | `any` |

#### Returns

`any`

#### Defined in

[src/Yarra.ts:619](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L619)

___

### find

▸ **find**<S\>(`predicate`, `thisArg?`): `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Type`, `index`: `number`, `obj`: `Type`[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`, `thisArg?`): `Type`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `Type`, `index`: `number`, `obj`: `Type`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`Type`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

### findAllIndex

▸ **findAllIndex**(`f`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`) => `boolean` |

#### Returns

`number`[]

#### Defined in

[src/Yarra.ts:708](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L708)

___

### findFull

▸ **findFull**(`f`): (`number` \| `Type`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`) => `boolean` |

#### Returns

(`number` \| `Type`)[]

#### Defined in

[src/Yarra.ts:689](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L689)

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Type`, `index`: `number`, `obj`: `Type`[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

### findLast

▸ **findLast**(`f`): `Type`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`) => `boolean` |

#### Returns

`Type`

#### Defined in

[src/Yarra.ts:694](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L694)

___

### findLastFull

▸ **findLastFull**(`f`): (`number` \| `Type`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`) => `boolean` |

#### Returns

(`number` \| `Type`)[]

#### Defined in

[src/Yarra.ts:703](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L703)

___

### findLastIndex

▸ **findLastIndex**(`f`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`) => `boolean` |

#### Returns

`number`

#### Defined in

[src/Yarra.ts:699](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L699)

___

### flat

▸ **flat**<A, D\>(`depth?`): `FlatArray`<A, D\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | `D`: `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

`FlatArray`<A, D\>[]

#### Inherited from

Array.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:81

___

### flatMap

▸ **flatMap**<U, This\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `This` = `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:70

___

### flattenDeep

▸ **flattenDeep**(): `any`[]

#### Returns

`any`[]

#### Defined in

[src/Yarra.ts:718](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L718)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1355

___

### get

▸ **get**(...`indices`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...indices` | `number`[] |

#### Returns

`any`

#### Defined in

[src/Yarra.ts:521](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L521)

___

### getFrom

▸ **getFrom**(`template`): [Yarra](yarra.md)<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `any`[] |

#### Returns

[Yarra](yarra.md)<unknown\>

#### Defined in

[src/Yarra.ts:543](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L543)

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `Type` | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `Type` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1316

___

### initial

▸ **initial**(`n?`): `Type`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `n` | `number` | 1 |

#### Returns

`Type`[]

#### Defined in

[src/Yarra.ts:337](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L337)

___

### insertItem

▸ **insertItem**(`x`, `i?`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Type` | `undefined` |
| `i` | `number` | 0 |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:769](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L769)

___

### insertItemMutate

▸ **insertItemMutate**(`x`, `i?`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `Type` | `undefined` |
| `i` | `number` | 0 |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:777](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L777)

___

### insertList

▸ **insertList**(`list`, `i?`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `list` | `Type`[] | `undefined` |
| `i` | `number` | 0 |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:773](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L773)

___

### insertListMutate

▸ **insertListMutate**(`list`, `i?`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `list` | `Type`[] | `undefined` |
| `i` | `number` | 0 |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:783](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L783)

___

### isUnique

▸ **isUnique**(`loose?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `loose` | `boolean` | false |

#### Returns

`boolean`

#### Defined in

[src/Yarra.ts:359](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L359)

___

### isUniqueWith

▸ **isUniqueWith**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`x`: `Type`, `y`: `Type`) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/Yarra.ts:363](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L363)

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1259

___

### keys

▸ **keys**(): `IterableIterator`<number\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`<number\>

#### Inherited from

Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `Type` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1322

___

### map

▸ **map**<U\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1361

___

### mapMutate

▸ **mapMutate**(`f`, `thisArg?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `any` |
| `thisArg?` | `any` |

#### Returns

`any`

#### Defined in

[src/Yarra.ts:612](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L612)

___

### matrixMult

▸ **matrixMult**(`arr`): [Yarra](yarra.md)<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [Yarra](yarra.md)<[Yarra](yarra.md)<number\>\> |

#### Returns

[Yarra](yarra.md)<any\>

#### Defined in

[src/Yarra.ts:447](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L447)

___

### max

▸ **max**(): `number`

#### Returns

`number`

#### Defined in

[src/Yarra.ts:499](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L499)

___

### min

▸ **min**(): `number`

#### Returns

`number`

#### Defined in

[src/Yarra.ts:503](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L503)

___

### mult

▸ **mult**(`arr`): [Yarra](yarra.md)<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [Yarra](yarra.md)<any\> |

#### Returns

[Yarra](yarra.md)<any\>

#### Defined in

[src/Yarra.ts:442](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L442)

___

### mutate

▸ **mutate**(`newValue`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `any` |

#### Returns

`any`

#### Defined in

[src/Yarra.ts:515](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L515)

___

### none

▸ **none**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `unknown` |

#### Returns

`boolean`

#### Defined in

[src/Yarra.ts:511](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L511)

___

### occurrences

▸ **occurrences**(`f?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`x`: `Type`, `i`: `number`, `array`: `Type`[]) => `any` |

#### Returns

`Object`

#### Defined in

[src/Yarra.ts:371](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L371)

___

### pop

▸ **pop**(): `Type`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`Type`

#### Inherited from

Array.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1237

___

### product

▸ **product**(): `any`

#### Returns

`any`

#### Defined in

[src/Yarra.ts:495](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L495)

___

### pullAt

▸ **pullAt**(`indices`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `indices` | `number`[] |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:600](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L600)

▸ **pullAt**(...`indices`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...indices` | `number`[] |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:601](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L601)

___

### push

▸ **push**(...`items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `Type`[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1242

___

### reduce

▸ **reduce**(`callbackfn`): `Type`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `Type`, `currentValue`: `Type`, `currentIndex`: `number`, `array`: `Type`[]) => `Type` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`Type`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1379

▸ **reduce**(`callbackfn`, `initialValue`): `Type`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `Type`, `currentValue`: `Type`, `currentIndex`: `number`, `array`: `Type`[]) => `Type` |
| `initialValue` | `Type` |

#### Returns

`Type`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1380

▸ **reduce**<U\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `Type`, `currentIndex`: `number`, `array`: `Type`[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1386

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `Type`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `Type`, `currentValue`: `Type`, `currentIndex`: `number`, `array`: `Type`[]) => `Type` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`Type`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1392

▸ **reduceRight**(`callbackfn`, `initialValue`): `Type`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `Type`, `currentValue`: `Type`, `currentIndex`: `number`, `array`: `Type`[]) => `Type` |
| `initialValue` | `Type` |

#### Returns

`Type`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1393

▸ **reduceRight**<U\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `Type`, `currentIndex`: `number`, `array`: `Type`[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1399

___

### reject

▸ **reject**(`f`, `thisArg?`): `Type`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `boolean` |
| `thisArg?` | `any` |

#### Returns

`Type`[]

#### Defined in

[src/Yarra.ts:633](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L633)

___

### rejectFull

▸ **rejectFull**(`f`, `thisArg?`): [`Type`, `number`][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `boolean` |
| `thisArg?` | `any` |

#### Returns

[`Type`, `number`][]

#### Defined in

[src/Yarra.ts:640](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L640)

___

### rejectMutate

▸ **rejectMutate**(`f`, `thisArg?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `boolean` |
| `thisArg?` | `any` |

#### Returns

`any`

#### Defined in

[src/Yarra.ts:626](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L626)

___

### reverse

▸ **reverse**(): `Type`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`Type`[]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1264

___

### sample

▸ **sample**(): `Type`

#### Returns

`Type`

#### Defined in

[src/Yarra.ts:382](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L382)

___

### set

▸ **set**(`indices`): (`newValue`: `any`) => `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indices` | `number`[] |

#### Returns

`fn`

▸ (`newValue`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `any` |

##### Returns

`any`

#### Defined in

[src/Yarra.ts:529](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L529)

▸ **set**(...`indices`): (`newValue`: `any`) => `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...indices` | `number`[] |

#### Returns

`fn`

▸ (`newValue`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `any` |

##### Returns

`any`

#### Defined in

[src/Yarra.ts:530](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L530)

___

### setAllFrom

▸ **setAllFrom**(`template`, `value`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `any`[] |
| `value` | `any` |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:558](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L558)

___

### setFrom

▸ **setFrom**(`template`, `values`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `any`[] |
| `values` | `any`[] |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:570](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L570)

___

### shift

▸ **shift**(): `Type`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`Type`

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1269

___

### shuffle

▸ **shuffle**(): [Yarra](yarra.md)<Type\>

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:722](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L722)

___

### slice

▸ **slice**(`start?`, `end?`): `Type`[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

`Type`[]

#### Inherited from

Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1279

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1349

___

### sort

▸ **sort**(`compareFn?`): [Yarra](yarra.md)<Type\>

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `Type`, `b`: `Type`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[Yarra](yarra.md)<Type\>

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1290

___

### splice

▸ **splice**(`start`, `deleteCount?`): `Type`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

`Type`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1297

▸ **splice**(`start`, `deleteCount`, ...`items`): `Type`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | `Type`[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

`Type`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1305

___

### split

▸ **split**(`f`): [Yarra](yarra.md)<[Yarra](yarra.md)<unknown\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `boolean` |

#### Returns

[Yarra](yarra.md)<[Yarra](yarra.md)<unknown\>\>

#### Defined in

[src/Yarra.ts:654](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L654)

___

### splitAt

▸ **splitAt**(`indices`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `indices` | `number`[] |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:676](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L676)

▸ **splitAt**(...`indices`): [Yarra](yarra.md)<Type\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...indices` | `number`[] |

#### Returns

[Yarra](yarra.md)<Type\>

#### Defined in

[src/Yarra.ts:677](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L677)

___

### splitFull

▸ **splitFull**(`f`): [Yarra](yarra.md)<[Yarra](yarra.md)<unknown\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `Type`, `index`: `number`, `array`: `Type`[]) => `boolean` |

#### Returns

[Yarra](yarra.md)<[Yarra](yarra.md)<unknown\>\>

#### Defined in

[src/Yarra.ts:665](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L665)

___

### sum

▸ **sum**(): `any`

#### Returns

`any`

#### Defined in

[src/Yarra.ts:491](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L491)

___

### tail

▸ **tail**(`n?`): `Type`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `n` | `number` | 1 |

#### Returns

`Type`[]

#### Defined in

[src/Yarra.ts:341](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L341)

___

### toArray

▸ **toArray**(): `Type`[]

#### Returns

`Type`[]

#### Defined in

[src/Yarra.ts:789](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L789)

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1232

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1228

___

### transpose

▸ **transpose**(): [Yarra](yarra.md)<[Yarra](yarra.md)<Type\>\>

#### Returns

[Yarra](yarra.md)<[Yarra](yarra.md)<Type\>\>

#### Defined in

[src/Yarra.ts:472](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L472)

___

### transposeMutate

▸ **transposeMutate**(): `any`

#### Returns

`any`

#### Defined in

[src/Yarra.ts:487](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L487)

___

### uncover

▸ **uncover**(`n?`): `any`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `n` | `number` | 1 |

#### Returns

`any`[]

#### Defined in

[src/Yarra.ts:396](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L396)

___

### unique

▸ **unique**(`loose?`): `Type`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `loose` | `boolean` | false |

#### Returns

`Type`[]

#### Defined in

[src/Yarra.ts:349](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L349)

___

### uniqueWith

▸ **uniqueWith**(`f`): `Type`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`x`: `Type`, `y`: `Type`) => `boolean` |

#### Returns

`Type`[]

#### Defined in

[src/Yarra.ts:355](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L355)

___

### unshift

▸ **unshift**(...`items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `Type`[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1310

___

### values

▸ **values**(): `IterableIterator`<Type\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<Type\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

___

### written

▸ **written**(`oxfordComma?`): `string` \| `Type`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `oxfordComma` | `boolean` | true |

#### Returns

`string` \| `Type`

#### Defined in

[src/Yarra.ts:325](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L325)

___

### allocate

▸ `Static` **allocate**(`n`): [Yarra](yarra.md)<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number`[] |

#### Returns

[Yarra](yarra.md)<any\>

#### Defined in

[src/Yarra.ts:124](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L124)

▸ `Static` **allocate**(...`n`): [Yarra](yarra.md)<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...n` | `number`[] |

#### Returns

[Yarra](yarra.md)<any\>

#### Defined in

[src/Yarra.ts:125](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L125)

___

### entries

▸ `Static` **entries**(`x`): [Yarra](yarra.md)<[`string`, `any`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Object` |

#### Returns

[Yarra](yarra.md)<[`string`, `any`]\>

#### Defined in

[src/Yarra.ts:154](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L154)

___

### from

▸ `Static` **from**<T\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<T\> | An array-like object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:72

▸ `Static` **from**<T, U\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<T\> | An array-like object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:80

▸ `Static` **from**<T\>(`iterable`): `T`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<T\> \| `ArrayLike`<T\> | An iterable object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:83

▸ `Static` **from**<T, U\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<T\> \| `ArrayLike`<T\> | An iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:91

___

### generateTemplate

▸ `Static` **generateTemplate**(`input`): [Yarra](yarra.md)<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `number`[][] |

#### Returns

[Yarra](yarra.md)<unknown\>

#### Defined in

[src/Yarra.ts:100](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L100)

___

### isArray

▸ `Static` **isArray**(`arg`): arg is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

#### Inherited from

Array.isArray

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1411

___

### linSpace

▸ `Static` **linSpace**(`start?`, `end?`, `n?`): [Yarra](yarra.md)<number\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | `number` | 0 |
| `end` | `number` | 1 |
| `n` | `number` | 2 |

#### Returns

[Yarra](yarra.md)<number\>

#### Defined in

[src/Yarra.ts:202](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L202)

___

### linSpaceMap

▸ `Static` **linSpaceMap**(`start?`, `end?`, `n?`, `f`): [Yarra](yarra.md)<unknown\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | `number` | 0 |
| `end` | `number` | 1 |
| `n` | `number` | 2 |
| `f` | (`x`: `number`) => `any` | `undefined` |

#### Returns

[Yarra](yarra.md)<unknown\>

#### Defined in

[src/Yarra.ts:213](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L213)

___

### of

▸ `Static` **of**<T\>(...`items`): `T`[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | A set of elements to include in the new array object. |

#### Returns

`T`[]

#### Inherited from

Array.of

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:86

___

### range

▸ `Static` **range**(`__namedParameters`): [Yarra](yarra.md)<number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.end` | `number` |
| `__namedParameters.inclusive?` | `boolean` |
| `__namedParameters.start?` | `number` |
| `__namedParameters.step?` | `number` |

#### Returns

[Yarra](yarra.md)<number\>

#### Defined in

[src/Yarra.ts:158](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L158)

___

### rangeMap

▸ `Static` **rangeMap**(`__namedParameters`): [Yarra](yarra.md)<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.end` | `number` |
| `__namedParameters.f?` | (`x`: `number`) => `any` |
| `__namedParameters.inclusive?` | `boolean` |
| `__namedParameters.start?` | `number` |
| `__namedParameters.step?` | `number` |

#### Returns

[Yarra](yarra.md)<unknown\>

#### Defined in

[src/Yarra.ts:179](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L179)

___

### toIndices

▸ `Static` **toIndices**(`input`, `shape`): [Yarra](yarra.md)<unknown\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input indexing template |
| `shape` | `number`[] | shape of array |

#### Returns

[Yarra](yarra.md)<unknown\>

template of indices

#### Defined in

[src/Yarra.ts:8](https://github.com/justinfernald/Yarra/blob/77ccf73/src/Yarra.ts#L8)
