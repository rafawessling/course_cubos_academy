const { usuarios } = require('../bancodedados')

const listarUsuarios = async (req, res) => {
	return res.json(usuarios)
}

const cadastrarUsuario = async (req, res) => {
	const { nome, email, senha } = req.body

	try {
		const novoUsuario = {
			nome,
			email,
			senha,
		}

		usuarios.push(novoUsuario)

		return res.status(201).json(novoUsuario)
	} catch (error) {
		return res.status(400).json({ mensagem: error.message })
	}
}

module.exports = {
	cadastrarUsuario,
	listarUsuarios,
}
