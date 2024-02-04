//Tipos primitivos

let nome: string = 'Joana';

let idade: number = 30;

let maiorIdade: boolean = true;

let algumDado: any;

//Tipagem de listas

let alunos: string[] = ['João', 'Ana', 'Joana', 'Pedro'];

let numeros: number[] = [3, 3, 2, 0, 1, 5];

let ativo: boolean[] = [true, false, true, true];

let array: any[] = [true, 1, 'Alguma coisa', 5];

//Tipagem de objetos

let usuario: { nome: string; idade: number; ativo: boolean; outro: any } = {
    nome: 'Joana',
    idade: 30,
    ativo: true,
    outro: {
        a: 'Testando',
        b: 1234,
    },
};
