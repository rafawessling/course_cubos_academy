let array = ['a', 'b', 'c', 'd', 'e'];
array.splice(1, 2, 'f', 'g', 'h');

console.log(array);

array = ['a', 'b', 'c', 'd', 'e'];
array.splice(2, 0, 'f');

console.log(array);

//push
array = ['a', 'b', 'c', 'd', 'e'];
array.splice(array.length, 0, 'f');

console.log(array);

//pop
array = ['a', 'b', 'c', 'd', 'e'];
array.splice(array.length - 1, 1);

console.log(array);

//shift
array = ['a', 'b', 'c', 'd', 'e'];
array.splice(array[0], 1);

console.log(array);

//unshift
array = ['a', 'b', 'c', 'd', 'e'];
array.splice(array[0], 0, 'f');

console.log(array);
