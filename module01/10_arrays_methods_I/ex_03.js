function filter80(data) {
    const startIndex = Math.round(data.length * 0.1);
    const endIndex = Math.round(data.length * 0.9);

    const result = data.slice(startIndex, endIndex);
    console.log(result);
}

const data = [
    0, 1, 5, 7, 10, 33, 55, 60, 57, 85, 45, 68, 49, 57, 89, 69, 57, 33, 24, 11,
    5, 3, 1, 0, 0,
];

filter80(data);
