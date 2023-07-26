const array = [1, 2, 3, 4, 5, 6];
const novoArray = array.splice(2, 5);

console.log(novoArray);

const listaCompleta = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
const itensExibidos = listaCompleta.splice(0, 3);

console.log(itensExibidos);

const textoOriginal1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const textoPrevio1 = textoOriginal1.slice(0, 20) + '...';

console.log(textoPrevio1);
