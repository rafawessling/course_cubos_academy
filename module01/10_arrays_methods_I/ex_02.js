function invertString(text) {
    const arrayLetters = text.split('');
    arrayLetters.reverse();

    const invertedText = arrayLetters.join('');
    console.log(invertedText);
}

invertString('Cubos Academy');
