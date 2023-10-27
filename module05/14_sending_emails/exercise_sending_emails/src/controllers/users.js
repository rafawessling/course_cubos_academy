import db from '../conection.js';

const registerUser = async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        res.status(400).json({ message: 'Name and email are required.' });
    }

    try {
        const emailExists = await db('users').where({ email }).returning('*');

        if (emailExists.length > 0) {
            return res.status(400).json('The email is already registered ');
        }

        const user = await db('users').insert({ name, email }).returning('*');

        if (user.length === 0) {
            return res.status(400).json({ message: 'The user has not been registered' });
        }

        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

export { registerUser };
