const validatePassword = (req, res, next) => {
    const { password } = req.query;

    if (password !== 'cubos123' || !password) {
        return res.status(401).json({ message: 'The password is incorrect.' });
    }

    next();
};

export { validatePassword };
