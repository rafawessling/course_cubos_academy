const finalWorldCup = new Date(2002, 5, 30, 13);
const initialTimestap = +finalWorldCup;

const first = initialTimestap + 82 * 60 * 1000;
const second = initialTimestap + 94 * 60 * 1000;

const firstGol = new Date(first);
const secondGol = new Date(second);

console.log(`First: ${firstGol}, Second: ${secondGol}`);
