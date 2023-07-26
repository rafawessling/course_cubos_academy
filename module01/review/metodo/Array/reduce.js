const produtos1 = [
    { id: 1, nome: "Camiseta", preco: 29.99 },
    { id: 2, nome: "Calça", preco: 59.99 },
    { id: 3, nome: "Tênis", preco: 99.99 }
  ];
  
  const precoTotal = produtos1.reduce((acumulador, produto) => acumulador + produto.preco, 0);
  
  console.log(precoTotal); 
  

  const numeros3 = [1, 2, 3, 4, 5];

  const soma = numeros3.reduce((acumulador, numero) => acumulador + numero, 0);
  
  console.log(soma); 