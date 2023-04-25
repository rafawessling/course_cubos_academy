function invertString(text) {
    const arrayLetters = text.split('');
    arrayLetters.reverse();

    let invertedText = '';
    for (let letter of arrayLetters) {
        invertedText += letter;
    }
    console.log(invertedText);
}

invertString('Cubos Academy');
