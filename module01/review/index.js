// 1. Variáveis

// Variáveis para armazenar informações do cliente
let clienteNome = "";
let clienteSaldo = 0;

// 2. Condicionais

// Verificar se o cliente está cadastrado
function verificarCadastro(nome) {
  if (nome === "") {
    console.log("Cliente não cadastrado!");
    return false;
  } else {
    console.log("Cliente cadastrado!");
    return true;
  }
}

// 3. Loops

// Função para realizar depósito
function realizarDeposito(valor) {
  if (!verificarCadastro(clienteNome)) {
    console.log("Não é possível realizar o depósito.");
    return;
  }

  clienteSaldo += valor;
  console.log(
    `Depósito de R$${valor.toFixed(
      2
    )} realizado. Novo saldo: R$${clienteSaldo.toFixed(2)}`
  );
}

// 4. Arrays

// Lista de transações
let transacoes = [];

// Função para registrar transações
function registrarTransacao(tipo, valor) {
  transacoes.push({ tipo, valor });
  console.log("Transação registrada:", tipo, valor);
}

// 5. Objetos

// Objeto para armazenar informações do cliente
let cliente = {
  nome: "",
  saldo: 0,
  transacoes: [],

  // Método para realizar saque
  realizarSaque: function (valor) {
    if (!verificarCadastro(this.nome)) {
      console.log("Não é possível realizar o saque.");
      return;
    }

    if (valor > this.saldo) {
      console.log("Saldo insuficiente.");
      return;
    }

    this.saldo -= valor;
    console.log(
      `Saque de R$${valor.toFixed(
        2
      )} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`
    );
  },

  // Método para exibir extrato
  exibirExtrato: function () {
    console.log("Extrato:");
    for (let i = 0; i < this.transacoes.length; i++) {
      console.log(
        `${this.transacoes[i].tipo}: R$${this.transacoes[i].valor.toFixed(2)}`
      );
    }
  },
};

// 6. Funções

// Função para cadastrar cliente
function cadastrarCliente(nome) {
  cliente.nome = nome;
  clienteSaldo = 0;
  transacoes = [];
  console.log(`Cliente ${nome} cadastrado com sucesso!`);
}

// Exemplo de uso:

// Cadastrar cliente
cadastrarCliente("João");

// Realizar depósito
realizarDeposito(100);
registrarTransacao("Depósito", 100);

// Realizar saque
cliente.realizarSaque(50);
registrarTransacao("Saque", 50);

// Exibir extrato
cliente.exibirExtrato();
