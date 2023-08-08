const verificarNumeros = (req, res, next) => {
    const { num1, num2 } = req.query;

    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
        return res.send('Insira um número válido.');
    }

    next();
};

const verificarDivisor = (req, res, next) => {
    const { num2 } = req.query;

    if (Number(num2) === 0) {
        return res.send('Insira um divisor válido.');
    }

    next();
};

export { verificarNumeros, verificarDivisor };
