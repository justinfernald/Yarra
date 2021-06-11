class Yarra extends Array {
    static allocate(n) {
        let out = new Yarra();
        out.length = n;
        return out;
    }

    static entries = (x) => {
        return new Yarra(Object.entries(x));
    };

    static range = ({ start = 0, end, step = 1, inclusive = false }) => {
        // inclusive is for ending
        let steps = (end - start) / step;
        let n =
            Math.ceil(steps) + (inclusive && Number.isInteger(steps) ? 1 : 0);
        if (n <= 0) return new Yarra();
        let arr = new Yarra(n);
        for (let i = 0; i < n; i++) arr[i] = start + i * step;
        return arr;
    };

    static rangeMap = ({
        start = 0,
        end,
        step = 1,
        inclusive = false,
        f = (x) => x,
    }) => {
        // inclusive is for ending
        let steps = (end - start) / step;
        let n =
            Math.ceil(steps) + (inclusive && Number.isInteger(steps) ? 1 : 0);
        if (n <= 0) return new Yarra();
        let arr = new Yarra(n);
        for (let i = 0; i < n; i++) arr[i] = f(start + i * step);
        return arr;
    };

    static linSpace = (start = 0, end = 1, n = 2) => {
        if (!Number.isInteger(n)) throw Error("n not an integer");
        if (n <= 1) throw Error("n must be greater than 1");
        return this.range({
            start,
            end,
            inclusive: true,
            step: (end - start) / (n - 1),
        });
    };

    static linSpaceMap = (start = 0, end = 1, n = 2, f) => {
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
            if (Array.isArray(args[0])) {
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
                let num = +name;
                if (Number.isInteger(num) && num < 0)
                    return target[target.length + num];
                return target[name];
            },
        });
    }

    get head() {
        return this[0];
    }

    get last() {
        return this[this.length - 1];
    }

    get full() {
        return [...this.entries()].map(([i, x]) => [x, i]); // matches typical value then index in map, filter, and reduce
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
        if (Array.isArray(this[0])) {
            let subDim = new Yarra(this[0]).dimensions();
            return subDim ? [this.length, ...subDim] : [this.length];
        } else return [this.length];
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

    isUnique(loose = false) {
        return this.equals(this.unique(loose));
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

    reject(f) {
        return this.filter((...args) => !f(...args));
    }

    rejectFull(f) {
        return this.full.filter(([x, i]) => !f(x, i, this));
    }

    filterFull(f) {
        return this.full.filter(([x, i]) => f(x, i, this));
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

    clone() {
        // shallow clone / nearly everything is a clone but this is clear
        return this.slice();
    }
}

Yarra.prototype.toGenerator = function* () {
    for (let x of this) yield x;
};

Yarra.prototype.toCycleGenerator = function* () {
    while (true) for (let x of this) yield x;
};

const Y = (...args) => new Yarra(...args); // shortcut for simplicity
