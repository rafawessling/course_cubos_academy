import { add } from 'date-fns';

const date = new Date(2018, 2, 13, 12);

const newDate = add(date, {
    seconds: 2,
    days: 1,
    years: 5,
});

console.log(newDate);
