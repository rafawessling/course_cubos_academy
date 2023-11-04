const express = require('express')
const rotas = require('./rotas')

const app = express()

app.use(express.json())

// Função que retorna função (modelo tradicional)
// function nome(nome) {
// 	return function sobrenome(sobrenome) {
// 		console.log(nome, sobrenome)
// 	}
// }

// Função que retorna função (modelo arrow function)
// const nome = (nome) => (sobrenome) => {
//     console.log(nome, sobrenome)
// }

// chamada de função que retorna função
// nome('Guido')('Cerqueira')

app.use(rotas)

app.listen(3000)
