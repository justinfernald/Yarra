export declare class Yarra<Type> extends Array<Type> {
    /**
     *
     * @param input input indexing template
     * @param shape shape of array
     * @returns template of indices
     */
    static toIndices(input: string, shape: number[]): Yarra<any>;
    static generateTemplate(input: number[][]): Yarra<any>;
    static allocate(n: number[]): Yarra<any>;
    static allocate(...n: number[]): Yarra<any>;
    static entries(x: Object): Yarra<[string, any]>;
    static range({ start, end, step, inclusive, }: {
        start?: number;
        end: number;
        step?: number;
        inclusive?: boolean;
    }): Yarra<number>;
    static rangeMap({ start, end, step, inclusive, f, }: {
        start?: number;
        end: number;
        step?: number;
        inclusive?: boolean;
        f?: (x: number) => any;
    }): Yarra<unknown>;
    static linSpace(start?: number, end?: number, n?: number): Yarra<number>;
    static linSpaceMap(start: number, end: number, n: number, f: (x: number) => any): Yarra<unknown>;
    constructor(args: Iterable<Type>);
    constructor(...args: Type[]);
    get head(): Type;
    get last(): Type;
    get full(): Yarra<[Type, number]>;
    get size(): number;
    get dimensions(): Yarra<number>;
    written(oxfordComma?: boolean): string | Type;
    initial(n?: number): Type[];
    tail(n?: number): Type[];
    compact(): Type[];
    unique(loose?: boolean): Type[];
    uniqueWith(f: (x: Type, y: Type) => boolean): Type[];
    isUnique(loose?: boolean): boolean;
    isUniqueWith(f: (x: Type, y: Type) => boolean): boolean;
    count(f?: BooleanConstructor): number;
    occurrences(f?: (x: Type, i: number, array: Type[]) => any): {
        [key: string]: number;
    };
    sample(): Type;
    chunk(n: number): any[];
    uncover(n?: number): (this extends readonly (infer InnerArr)[] ? FlatArray<InnerArr, 0 | 1 | 2 | -1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20> : this)[];
    cover(n?: number): Yarra<any>;
    elementWise(arr: Yarra<any>, f: (a: Type, b: any, i: number) => any, singleDimension?: boolean): Yarra<any>;
    add(arr: Yarra<any>): Yarra<any>;
    mult(arr: Yarra<any>): Yarra<any>;
    matrixMult(arr: Yarra<Yarra<number>>): Yarra<any>;
    transpose(): Yarra<Yarra<Type>>;
    transposeMutate(): any;
    sum(): any;
    product(): any;
    max(): number;
    min(): number;
    average(): number;
    none(f: (value: Type, index: number, array: Type[]) => unknown): boolean;
    mutate(newValue: any): any;
    get(...indices: number[]): any;
    set(indices: number[]): (newValue: any) => any;
    set(...indices: number[]): (newValue: any) => any;
    getFrom(template: any[]): Yarra<unknown>;
    setAllFrom(template: any[], value: any): this;
    setFrom(template: any[], values: any[]): this;
    at(indices: number[]): Yarra<Type>;
    at(...indices: number[]): Yarra<Type>;
    pullAt(indices: number[]): Yarra<Type>;
    pullAt(...indices: number[]): Yarra<Type>;
    mapMutate(f: (value: Type, index: number, array: Type[]) => any, thisArg?: any): any;
    filterMutate(f: (value: Type, index: number, array: Type[]) => boolean, thisArg?: any): any;
    rejectMutate(f: (value: Type, index: number, array: Type[]) => boolean, thisArg?: any): any;
    reject(f: (value: Type, index: number, array: Type[]) => boolean, thisArg?: any): Type[];
    rejectFull(f: (value: Type, index: number, array: Type[]) => boolean, thisArg?: any): [Type, number][];
    filterFull(f: (value: Type, index: number, array: Type[]) => boolean, thisArg?: any): [Type, number][];
    split(f: (value: Type, index: number, array: Type[]) => boolean): Yarra<Yarra<unknown>>;
    splitFull(f: (value: Type, index: number, array: Type[]) => boolean): Yarra<Yarra<unknown>>;
    splitAt(indices: number[]): Yarra<Type>;
    splitAt(...indices: number[]): Yarra<Type>;
    findFull(f: (value: Type) => boolean): (number | Type)[];
    findLast(f: (value: Type) => boolean): Type;
    findLastIndex(f: (value: Type) => boolean): number;
    findLastFull(f: (value: Type) => boolean): (number | Type)[];
    findAllIndex(f: (value: Type) => boolean): number[];
    allIndexOf(v: any, loose?: boolean): number[];
    flattenDeep(): (this extends readonly (infer InnerArr)[] ? FlatArray<InnerArr, 0 | 1 | 2 | -1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20> : this)[];
    shuffle(): Yarra<Type>;
    equals(rhs: any[], loose?: boolean): boolean;
    equalsWith(rhs: any[], f: (a: Type, b: any, i: number) => boolean): boolean;
    clone(): Yarra<Type>;
    concat(...args: any[]): Yarra<Type>;
    concatMutate(...args: any[]): this;
    insertItem(x: Type, i?: number): Yarra<Type>;
    insertList(list: Array<Type>, i?: number): Yarra<Type>;
    insertItemMutate(x: Type, i?: number): this;
    insertListMutate(list: Array<Type>, i?: number): this;
    toArray(): this[number][];
    toGenerator: () => Generator<any, void, unknown>;
    toCycleGenerator: () => Generator<any, never, unknown>;
}
export declare const Y: (...args: any[]) => Yarra<any>;
//# sourceMappingURL=Yarra.d.ts.map