class Yarra {
    constructor(...args) {
        // note inconsistencies with constructor usage
        // passing a single argument with array will make it that array
        // passing single non array argument will create array with single element of the argument
        // passing multiple arguments will create array with arguments
        // to be safe you can always pass with just array to have consistently

        if (args.length === 1 && Array.isArray(args[0])) this.arr = args[0];
        else this.arr = args;

        const staticResults = {
            length: () => this.arr.length,
        };

        const handler = {
            get: (target, name) => {
                if (target[name]) return target[name];
                else if (staticResults[name]) {
                    return staticResults[name]();
                } else if (Number.isInteger(+name)) {
                    return target.arr[name];
                } else {
                    return target[name];
                }
            },
        };

        let arrayProperties = new Set();
        for (
            let obj = [];
            obj != Object.prototype;
            obj = Object.getPrototypeOf(obj)
        )
            for (let property of Object.getOwnPropertyNames(obj))
                arrayProperties.add(property);

        for (let property of arrayProperties) {
            if (!this[property] && !staticResults[property])
                if (typeof this.arr[property] === "function")
                    this[property] = (...args) => {
                        let result = this.arr[property](...args);
                        if (Array.isArray(result))
                            return new Yarra([...result]);
                        return result;
                    };
                else this[property] = this.arr[property];
        }

        this.toString = this.arr.toString;

        return new Proxy(this, handler);
    }

    compact = () => this.filter((x) => x);

    unique = (loose = false) =>
        new Yarra(
            loose
                ? this.arr.filter((x, i, a) => i === a.findIndex((y) => x == y))
                : [...new Set(this.arr)]
        );

    head = () => this.arr[0];

    initial = () => this.slice(0, this.arr.length - 1);

    tail = () => this.slice(1);

    sum = () => this.arr.reduce((s, x) => s + x);

    product = () => this.arr.reduce((s, x) => s * x, 1);

    dimensions = () => {
        // this does not test for consistency in dimensions and only by measure of first index
        // doesn't return Yarra since data it simple
        if (Array.isArray(this.arr[0])) {
            let subDim = new Yarra(this.arr[0]).dimensions();
            return subDim ? [this.arr.length, ...subDim] : [this.arr.length];
        } else return [this.arr.length];
    };

    equals = (rhs, loose = false) => {
        // this is a shallow equal
        console.log(this.arr.length, rhs.arr.length);
        if (this.arr.length !== rhs.arr.length) return false;
        return loose
            ? this.every((x, i) => x == rhs.arr[i])
            : this.every((x, i) => x === rhs.arr[i]);
    };

    toGenerator = function* () {
        for (let x of this.arr)
            yield x;
    };

    [Symbol.iterator]() {
        return this.toGenerator();
    }
}

const Y = (...args) => new Yarra(...args); // shortcut for simplicity
