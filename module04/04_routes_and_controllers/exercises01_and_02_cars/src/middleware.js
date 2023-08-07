const validatePassword = (req, res, next) => {
    const { password } = req.query;

    if (!password) {
        return res.send('The password was not entered!');
    }

    if (password !== 'cars123') {
        return res.send('The password is incorrect!');
    }

    next();
};

export { validatePassword };
