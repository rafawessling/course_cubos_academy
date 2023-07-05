function sum(...args) {
    const sumNumbers = args.reduce((acum, val) => acum + val);

    return sumNumbers;
}

console.log(sum(1, 2, 3, 4, 5));
