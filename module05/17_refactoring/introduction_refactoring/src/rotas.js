const express = require('express');
const { cadastrarUsuario, atualizarPerfil, obterPerfil } = require('./controladores/usuarios');
const { login } = require('./controladores/autenticacao');
const { filtroLogin } = require('./intermediarios/filtroLogin');
const validarRequisicao = require('./intermediarios/validarRequisicao');
const loginSchema = require('./validacoes/loginSchema');
const usuariosSchema = require('./validacoes/usuariosSchema');

const rotas = express();

rotas.post('/usuarios', validarRequisicao(usuariosSchema), cadastrarUsuario);

rotas.post('/login', validarRequisicao(loginSchema), login);

rotas.use(filtroLogin);

rotas.get('/perfil', obterPerfil);

rotas.put('/perfil', atualizarPerfil);

module.exports = rotas;
