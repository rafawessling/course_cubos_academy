const firstQuarter = ['Jan', 'Fev', 'Mar'];
const secondQuarter = ['Abr', 'May', 'Jun'];
const thirdQuarter = ['Jul', 'Ago', 'Set'];

const firstSemester = [...firstQuarter, ...secondQuarter];

console.log(firstSemester);

const year = [...firstSemester, ...thirdQuarter, 'Out', 'Nov', 'Dez'];

console.log(year);
