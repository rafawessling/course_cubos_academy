import db from '../conection.js';
import transport from '../nodemailer.js';
import compilerText from '../utils/compilerText.js';
import dotenv from 'dotenv';
dotenv.config();

const sendEmail = async (req, res) => {
    const { subject, text } = req.body;

    try {
        const users = await db('users').returning('*');

        users.map(async user => {
            const html = await compilerText('./src/templates/textEmail.html', { username: user.name, text });

            transport.sendMail({
                from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
                to: `${user.name} <${user.email}>`,
                subject,
                html,
            });
        });

        return res.status(200).json('The Newsletter had been sent');
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

export { sendEmail };
