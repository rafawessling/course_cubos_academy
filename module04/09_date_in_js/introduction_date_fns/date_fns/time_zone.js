import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';

const utcDate = zonedTimeToUtc('2018-09-01 18:01:36.386', 'Europe/Berlin');

console.log(utcDate);

//--------------------------------------

const date = new Date('2018-09-01T16:01:36.386Z');
const timeZone = 'Europe/Berlin';
const zonedDate = utcToZonedTime(date, timeZone);

const pattern = "d.M.yyyy HH:mm:ss.SSS 'GMT' XXX (z)";
const output = format(zonedDate, pattern, { timeZone: 'Europe/Berlin' });

console.log(output);
