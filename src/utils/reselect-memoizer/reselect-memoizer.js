function defaultEqualityCheck(a, b) {
    return a === b;
}

export default function defaultMemoize(func, equalityCheck = defaultEqualityCheck) {
    let lastArgs = null;
    let lastResult = null;
    const isEqualToLastArg = (value, index) => equalityCheck(value, lastArgs[index]);
    return (...args) => {
        if (
            lastArgs === null ||
            lastArgs.length !== args.length ||
            !args.every(isEqualToLastArg)
        ) {
            lastResult = func(...args)
        }
        lastArgs = args;
        return lastResult
    }
}