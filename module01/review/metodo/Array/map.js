const numeros = [1, 2, 3, 4, 5];

const numerosAoQuadrado = numeros.map((numero) => numero * numero);

console.log(numerosAoQuadrado); 


const produtos = [
    { id: 1, nome: "Camiseta", preco: 29.99 },
    { id: 2, nome: "Calça", preco: 59.99 },
    { id: 3, nome: "Tênis", preco: 99.99 }
  ];
  
  const nomesProdutos = produtos.map((produto) => produto.nome);
  
  console.log(nomesProdutos); 