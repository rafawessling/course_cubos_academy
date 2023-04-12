let numbers = [2, 11, 8, 13, 4, 1, 6];

/*let i = 0;
let sum = 0;

while (i < numbers.length) {
    sum = sum + numbers[i];
    i++;
}*/

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);
