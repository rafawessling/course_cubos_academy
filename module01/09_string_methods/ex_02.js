function replaceAll(original, text, newText) {
    for (let item of original) {
        if (item === text) {
            original = original.replace(text, newText);
        }
    }
    return original;
}

let number = '1,350,000';

console.log(replaceAll(number, ',', '.'));

//while (number ==! number.replace(',', '.')) {
//    number = number.replace(',', '.');
//}
