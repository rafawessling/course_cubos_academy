const rectangles = [
    {
        width: 30,
        height: 15,
    },
    {
        width: 15,
        height: 10,
    },
    {
        width: 5,
        height: 20,
    },
];

function area({ width: w, height: h }) {
    return w * h;
}

for (const item of rectangles) {
    console.log(area(item));
}
