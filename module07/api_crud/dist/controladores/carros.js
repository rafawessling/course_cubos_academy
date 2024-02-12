"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarCarros = exports.atualizarCarros = exports.cadastrarCarros = exports.detalharCarros = exports.listarCarros = void 0;
const conexao_1 = require("../bd/conexao");
const listarCarros = async (_, res) => {
    try {
        const carros = await (0, conexao_1.knex)('carros');
        return res.json(carros);
    }
    catch (_a) {
        return res.status(500).json({
            mensagem: 'Erro interno do servidor.',
        });
    }
};
exports.listarCarros = listarCarros;
const detalharCarros = async (req, res) => {
    const { id } = req.params;
    try {
        const carro = await (0, conexao_1.knex)('carros')
            .where({ id: Number(id) })
            .first();
        if (!carro) {
            return res.status(404).json({ mensagem: 'Carro não encontrado.' });
        }
        return res.json(carro);
    }
    catch (_a) {
        return res.status(500).json({
            mensagem: 'Erro interno do servidor.',
        });
    }
};
exports.detalharCarros = detalharCarros;
const cadastrarCarros = async (req, res) => {
    const { marca, modelo, cor, ano, valor } = req.body;
    try {
        const carro = await (0, conexao_1.knex)('carros').insert({ marca, modelo, cor, ano, valor }).returning('*');
        return res.status(201).json(carro[0]);
    }
    catch (_a) {
        return res.status(500).json({
            mensagem: 'Erro interno do servidor.',
        });
    }
};
exports.cadastrarCarros = cadastrarCarros;
const atualizarCarros = async (req, res) => {
    const { id } = req.params;
    const { marca, modelo, cor, ano, valor } = req.body;
    try {
        const carro = await (0, conexao_1.knex)('carros')
            .where({ id: Number(id) })
            .first();
        if (!carro) {
            return res.status(404).json({ mensagem: 'Carro não encontrado.' });
        }
        await (0, conexao_1.knex)('carros')
            .where({ id: Number(id) })
            .update({ marca, modelo, cor, ano, valor });
        return res.status(204).send();
    }
    catch (_a) {
        return res.status(500).json({
            mensagem: 'Erro interno do servidor.',
        });
    }
};
exports.atualizarCarros = atualizarCarros;
const deletarCarros = async (req, res) => {
    const { id } = req.params;
    try {
        const carro = await (0, conexao_1.knex)('carros')
            .where({ id: Number(id) })
            .first();
        if (!carro) {
            return res.status(404).json({ mensagem: 'Carro não encontrado.' });
        }
        await (0, conexao_1.knex)('carros')
            .where({ id: Number(id) })
            .del();
        return res.status(204).send();
    }
    catch (_a) {
        return res.status(500).json({
            mensagem: 'Erro interno do servidor.',
        });
    }
};
exports.deletarCarros = deletarCarros;
