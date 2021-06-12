class Yarra extends Array {
    static allocate(n) {
        let out = new Yarra();
        out.length = n;
        return out;
    }

    static entries(x) {
        return new Yarra(Object.entries(x));
    };

    static range({ start = 0, end, step = 1, inclusive = false }) {
        // inclusive is for ending
        let steps = (end - start) / step;
        let n =
            Math.ceil(steps) + (inclusive && Number.isInteger(steps) ? 1 : 0);
        if (n <= 0) return new Yarra();
        let arr = new Yarra(n);
        for (let i = 0; i < n; i++) arr[i] = start + i * step;
        return arr;
    };

    static rangeMap({
        start = 0,
        end,
        step = 1,
        inclusive = false,
        f = (x) => x,
    }) {
        // inclusive is for ending
        let steps = (end - start) / step;
        let n =
            Math.ceil(steps) + (inclusive && Number.isInteger(steps) ? 1 : 0);
        if (n <= 0) return new Yarra();
        let arr = new Yarra(n);
        for (let i = 0; i < n; i++) arr[i] = f(start + i * step);
        return arr;
    };

    static linSpace(start = 0, end = 1, n = 2) {
        if (!Number.isInteger(n)) throw Error("n not an integer");
        if (n <= 1) throw Error("n must be greater than 1");
        return this.range({
            start,
            end,
            inclusive: true,
            step: (end - start) / (n - 1),
        });
    };

    static linSpaceMap(start = 0, end = 1, n = 2, f) {
        if (!Number.isInteger(n)) throw Error("n not an integer");
        if (n <= 0) throw Error("n must be positive");
        return this.rangeMap({
            start,
            end,
            inclusive: true,
            step: (end - start) / (n - 1),
            f,
        });
    };

    constructor(...args) {
        // note inconsistencies with constructor usage
        // passing a single argument with array will make it that array
        // passing single non array argument will create array with single element of the argument
        // passing multiple arguments will create array with arguments
        // to be safe you can always pass with just array to have consistently
        if (args.length === 1) {
            if (args[0] instanceof Array) {
                if (args[0].length === 1) {
                    super(1);
                    this[0] = args[0][0];
                } else super(...args[0]);
            } else if (typeof args[0] === "number") {
                super(1);
                this[0] = args[0];
            } else {
                super(...args[0]); // spreads out string to characters along with sets and other collections
            }
        } else {
            super(...args);
        }

        return new Proxy(this, {
            get: (target, name) => {
                if (target[name] !== undefined) return target[name];

                if (!isNaN(name)) {
                    let num = +name;
                    if (Number.isInteger(num) && num < 0)
                        return target[target.length + num];
                }

                return target[name];
            },
            // set: (target, name) => { }
        });
    }

    get head() {
        return this[0];
    }

    get last() {
        return this[this.length - 1];
    }

    get full() {
        return new Yarra([...this.entries()].map(([i, x]) => [x, i])); // matches typical value then index in map, filter, and reduce
    }

    get size() {
        // ignores empty/undefined values (still unable to just detect only empty / I don't think it is possible without watching writes)
        let size = 0;
        for (let x of this) if (x !== undefined) size++;
        return size;
    }

    get dimensions() {
        // this does not test for consistency in dimensions and only by measure of first index
        // doesn't return Yarra since data it simple
        if (this[0] instanceof Array) {
            let subDim = new Yarra(this[0]).dimensions;
            return subDim ? new Yarra([this.length, ...subDim]) : new Yarra([this.length]);
        } else return new Yarra([this.length]);
    }

    written(oxfordComma = true) {
        if (this.length === 0) return "";
        if (this.length === 1) return this[0];
        if (this.length === 2) return this[0] + " and " + this[1];
        return (
            this.initial().join(", ") +
            (oxfordComma ? "," : "") +
            " and " +
            this.last
        );
    }

    initial(n = 1) {
        return this.slice(0, -n);
    }

    tail(n = 1) {
        return this.slice(n);
    }

    compact() {
        return this.filter(Boolean);
    }

    unique(loose = false) {
        return loose
            ? this.filter((x, i, a) => i === a.findIndex((y) => x == y))
            : new Yarra(new Set(this));
    }

    uniqueWith(f) {
        return this.filter((x, i, a) => i === a.findIndex((y) => f(x, y)))
    }

    isUnique(loose = false) {
        return this.length === this.unique(loose).length;
    }

    isUniqueWith(f) {
        return this.length === this.uniqueWith(f).length;
    }

    count(f = Boolean) {
        return this.reduce((s, x) => s + (f(x) ? 1 : 0), 0);
    }

    sample() {
        return this[Math.floor(Math.random() * this.length)];
    }

    chunk(n) {
        return this.reduce(
            (p, x, i) =>
                i % n
                    ? [...p.slice(0, -1), [...p.slice(-1)[0], x]]
                    : [...p, [x]],
            []
        );
    }

    uncover(n = 1) {
        return this.flat(n);
    }

    cover(n = 1) {
        if (n < 1) return this.clone();
        return this.map(x => new Yarra([x])).cover(n - 1);
    }

    elementWise(arr, f) {
        if (!this.dimensions.equals(arr.dimensions))
            throw Error("Unequal dimensions");

        let output = Yarra.allocate(this.length);
        if (this.dimensions.length === 1) {
            for (let i in this)
                output[i] = f(this[i], arr[i], i);
            return output;
        }

        for (let i in this)
            output[i] = new Yarra(this[i]).elementWise((new Yarra(arr[i])), f);

        return output;
    }

    add(arr) {
        if (!this.dimensions.equals(arr.dimensions))
            throw Error("Unequal dimensions");

        let output = Yarra.allocate(this.length);
        if (this.dimensions.length === 1) {
            for (let i in this)
                output[i] = this[i] + arr[i];
            return output;
        }

        for (let i in this)
            output[i] = new Yarra(this[i]).add(new Yarra(arr[i]));

        return output;
    }

    mult(arr) { // this is element wise multiplication
        if (!this.dimensions.equals(arr.dimensions))
            throw Error("Unequal dimensions");

        let output = Yarra.allocate(this.length);
        if (this.dimensions.length === 1) {
            for (let i in this)
                output[i] = this[i] * arr[i];
            return output;
        }

        for (let i in this)
            output[i] = new Yarra(this[i]).mult(new Yarra(arr[i]));

        return output;
    }

    matrixMult(arr) {
        if (this.dimensions.length > 2 || arr.dimensions.length > 2 || this.dimensions[1] !== arr.dimensions[0])
            throw Error("Dimensions don't work");
        let lhs = this
        let rhs = arr
        if (this.dimensions.length === 1)
            lhs = new Yarra(this);

        if (arr.dimensions.length === 1)
            rhs = new Yarra(arr);

        let output = Yarra.allocate(lhs.dimensions[0]);

        for (let i = 0; i < lhs.dimensions[0]; i++) {
            output[i] = Yarra.allocate(rhs.dimensions[1]);
            for (let j = 0; j < rhs.dimensions[1]; j++) {
                output[i][j] = lhs[i].mult(rhs.transpose()[j]).sum()
            }
        }
        return output;
    }

    transpose() {
        if (this.dimensions.length > 2)
            throw Error("Unable to transpose over 2D")
        if (this.dimensions.length === 1)
            return this.cover();

        let output = Yarra.allocate(this.dimensions[1]);
        for (let j in this[0]) {
            output[j] = Yarra.allocate(this.dimensions[0])
            for (let i in this) {
                output[j][i] = this[i][j]
            }
        }

        return output;
    }

    transposeMutate() {

    }

    sum() {
        return this.reduce((s, x) => s + x);
    }

    product() {
        return this.reduce((s, x) => s * x);
    }

    max() {
        return Math.max(...this);
    }

    min() {
        return Math.min(...this);
    }

    average() {
        return this.sum() / this.length;
    }

    none(f) {
        return !this.some(f);
    }

    mutate(newValue) {
        this.length = newValue.length;
        for (let [x, i] of newValue.full)
            this[i] = x;
        return newValue;
    }

    get(...indices) { // alias to typical indexing with multidimensional indexing
        let output = this;
        for (let i of indices)
            output = output[i]

        return output;
    }

    at(...indices) {
        if (indices[0] instanceof Array)
            indices = indices[0];
        return this.filter((_, i) => indices.includes(i));
    }

    pullAt(...indices) {
        if (indices.length === 0) return this.clone();
        if (indices[0] instanceof Array)
            indices = indices[0];
        let [accepted, rejected] = this.split((_, i) => indices.includes(i));
        this.mutate(rejected);
        return accepted;
    }

    mapMutate(f, thisArg) {
        return this.mutate(this.map(f, thisArg));
    }

    filterMutate(f, thisArg) {
        return this.mutate(this.filter(f, thisArg));
    }

    rejectMutate(f, thisArg) {
        return this.mutate(this.reject(f, thisArg));
    }

    reject(f, thisArg) {
        return this.filter((...args) => !f(...args), thisArg);
    }

    rejectFull(f, thisArg) {
        return this.full.filter(([x, i]) => !f(x, i, this), thisArg);
    }

    filterFull(f, thisArg) {
        return this.full.filter(([x, i]) => f(x, i, this), thisArg);
    }

    split(f) {
        let accepted = new Yarra();
        let rejected = new Yarra();
        this.forEach((x, i, arr) => {
            if (f(x, i, arr))
                accepted.push(x);
            else
                rejected.push(x);
        })

        return new Yarra(accepted, rejected);
    }

    splitFull(f) {
        let accepted = new Yarra();
        let rejected = new Yarra();
        this.forEach((x, i, arr) => {
            if (f(x, i, arr))
                accepted.push([x, i]);
            else
                rejected.push([x, i]);
        })

        return new Yarra(accepted, rejected)
    }

    splitAt(...indices) {
        if (indices.length === 0) return this.clone();
        if (indices[0] instanceof Array)
            indices = indices[0];
        if (indices.length === 1)
            return new Yarra(this.slice(0, indices[0]), this.slice(indices[0]));
        return new Yarra([this.slice(0, indices[0]), ...this.splitAt(indices.slice(1))])
    }

    findFull(f) {
        for (let i = 0; i < this.length; i++) if (f(this[i])) return [x, i];
    }

    findLast(f) {
        for (let i = this.length - 1; i >= 0; i--)
            if (f(this[i])) return this[i];
    }

    findLastIndex(f) {
        for (let i = this.length - 1; i >= 0; i--) if (f(this[i])) return i;
    }

    findLastFull(f) {
        for (let i = this.length - 1; i >= 0; i--)
            if (f(this[i])) return [x, i];
    }

    findAllIndex(f) {
        return this.filterFull(f).map(([_, i]) => i);
    }

    allIndexOf(v, loose = false) {
        return loose ? this.filterFull((x) => x == v).map(([_, i]) => i) : this.filterFull((x) => x === v).map(([_, i]) => i);
    }

    flattenDeep() {
        return this.flat(Infinity);
    }

    shuffle() {
        // https://stackoverflow.com/a/12646864
        let output = this.clone();
        for (let i = output.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [output[i], output[j]] = [output[j], output[i]];
        }
        return output;
    }

    equals(rhs, loose = false) {
        // this is a shallow equal
        if (this.length !== rhs.length) return false;
        return loose
            ? this.every((x, i) => x == rhs[i])
            : this.every((x, i) => x === rhs[i]);
    }

    equalsWith(rhs, f) {
        if (this.length !== rhs.length) return false;
        return this.every((x, i) => f(x, rhs[i], i));
    }

    clone() {
        // shallow clone / nearly everything is a clone but this is clear
        return this.slice();
    }

    concat(...args) { // overwrote concat due to speed
        let output = new Yarra(this);
        for (let arg of args)
            if (arg instanceof Array)
                output.push(...arg)
            else
                output.push(arg)

        return output
    }

    concatMutate(...args) { // mutates
        for (let arg of args)
            if (arg instanceof Array)
                this.push(...arg)
            else
                this.push(arg)

        return this;
    }

    insertItem(x, i = 0) {
        return new Yarra(...this.slice(0, i), x, ...this.slice(i));
    }

    insertList(list, i = 0) {
        return new Yarra(...this.slice(0, i), ...list, ...this.slice(i));
    }

    insertItemMutate(x, i = 0) { // mutates
        this.splice(i, 0, x);
        return this;
    };

    insertListMutate(list, i = 0) { // mutates
        this.splice(i, 0, ...list);
        return this;
    };
}

Yarra.prototype.toGenerator = function* () {
    for (let x of this) yield x;
};

Yarra.prototype.toCycleGenerator = function* () {
    while (true) for (let x of this) yield x;
};

Object.defineProperty(Yarra.prototype, "toGenerator", {
    enumerable: false
});

Object.defineProperty(Yarra.prototype, "toCycleGenerator", {
    enumerable: false
});

const Y = (...args) => new Yarra(...args); // shortcut for simplicity