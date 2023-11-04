const joi = require('joi');

const usuariosSchema = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório',
        'string.empty': 'O campo nome é obrigatório',
    }),

    email: joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido',
        'any.required': 'O campo email é obrigatório',
        'string.empty': 'O campo email é obrigatório',
    }),

    senha: joi.string().required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.empty': 'O campo senha é obrigatório',
    }),

    telefone: joi.string().required().messages({
        'any.required': 'O campo telefone é obrigatório',
        'string.empty': 'O campo telefone é obrigatório',
    }),
});

module.exports = usuariosSchema;
