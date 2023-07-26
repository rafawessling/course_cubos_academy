const numeros1 = [1, 2, 3, 4, 5, 6];

const numerosPares = numeros1.filter((numero) => numero % 2 === 0);

console.log(numerosPares); 

// const numeros1q = [1, 2, 3, 4, 5, 6];

// const numerosParesq = numeros1q.map((numero) => numero % 2 === 0);

// console.log(numerosParesq); // Saída: [2, 4, 6]

const tarefas = [
    { id: 1, descricao: "Estudar JavaScript", concluida: true },
    { id: 2, descricao: "Fazer compras", concluida: false },
    { id: 3, descricao: "Fazer exercícios", concluida: true }
  ];
  
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida);
  
  console.log(tarefasConcluidas);
