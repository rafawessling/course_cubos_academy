const texto = "O JavaScript é uma linguagem de programação popular e poderosa.";

const novoTexto2 = texto.replace("JavaScript", "Python");

console.log(novoTexto2);

// ---------------------------------- // 

const cpf = "123.456.789-00";
const novoCpf = cpf.replace(/\./g, "").replace("-", "");
console.log(novoCpf);  