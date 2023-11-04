const express = require('express')
const { cadastrarUsuario, listarUsuarios } = require('./controladores/usuarios')
const validarCorpoRequisicao = require('./intermediarios/validarCorpoRequisicao')
const schemaUsuario = require('./validacoes/schemaUsuario')

const rotas = express()

rotas.post('/usuario', validarCorpoRequisicao(schemaUsuario), cadastrarUsuario)

rotas.get('/usuario', listarUsuarios)

module.exports = rotas
