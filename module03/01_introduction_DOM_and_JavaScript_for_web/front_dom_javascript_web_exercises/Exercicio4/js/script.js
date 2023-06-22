const meuTitulo = document.querySelector('.meu-titulo');
const meuBotao = document.querySelector('.meu-botao');

meuBotao.onclick = () => {
    meuTitulo.style.color = meuTitulo.style.color === 'red' ? 'blue' : 'red';
};
