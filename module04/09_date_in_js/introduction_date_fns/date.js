const now = new Date();

console.log(now);

const date = new Date(2020, 0, 1, 12, 30, 45, 916);

console.log(date);

const finalWorldCup = new Date(2002, 5, 30, 13);
const finalAddedOneHour = +finalWorldCup + 1000 * 60 * 60;
const finalAddedOneHourDate = new Date(finalAddedOneHour);

console.log(finalWorldCup, finalAddedOneHourDate);
