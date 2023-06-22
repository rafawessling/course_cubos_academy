const btnUnderline = document.querySelector('.btn-underline');
const btnItalic = document.querySelector('.btn-italic');
const btnBold = document.querySelector('.btn-bold');
const text = document.querySelector('.text');

btnUnderline.onclick = () => {
    text.style.textDecoration =
        text.style.textDecoration === 'underline' ? 'none' : 'underline';
};

btnItalic.onclick = () => {
    text.style.fontStyle =
        text.style.fontStyle === 'italic' ? 'normal' : 'italic';
};

btnBold.onclick = () => {
    text.style.fontWeight =
        text.style.fontWeight === 'bold' ? 'normal' : 'bold';
};

const btnDecrementFont = document.querySelector('.btn-decrement-font');
const btnIncrementFont = document.querySelector('.btn-increment-font');
const currentFontSize = document.querySelector('.current-font-size');

function getCurrentFontSize() {
    const currentFontSize = text.style.fontSize.split('px')[0];

    return parseInt(currentFontSize) || 16;
}

btnDecrementFont.onclick = () => {
    if (getCurrentFontSize() > 12) {
        text.style.fontSize = `${getCurrentFontSize() - 2}px`;
    }
    currentFontSize.textContent = getCurrentFontSize();
};

btnIncrementFont.onclick = () => {
    text.style.fontSize = `${getCurrentFontSize() + 2}px`;
    currentFontSize.textContent = getCurrentFontSize();
};

const btnRed = document.querySelector('.btn-red');
const btnBlue = document.querySelector('.btn-blue');
const btnPurple = document.querySelector('.btn-purple');
const btnBlack = document.querySelector('.btn-black');

btnRed.onclick = () => {
    text.style.color = 'red';
};

btnBlue.onclick = () => {
    text.style.color = 'blue';
};

btnPurple.onclick = () => {
    text.style.color = 'purple';
};

btnBlack.onclick = () => {
    text.style.color = 'black';
};
