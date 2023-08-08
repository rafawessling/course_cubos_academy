const somarNumeros = (req, res) => {
    const { num1, num2 } = req.query;

    const result = Number(num1) + Number(num2);
    res.send(result.toString());
};

const subtrairNumeros = (req, res) => {
    const { num1, num2 } = req.query;

    const result = Number(num1) - Number(num2);
    res.send(result.toString());
};

const multiplicarNumeros = (req, res) => {
    const { num1, num2 } = req.query;

    const result = Number(num1) * Number(num2);
    res.send(result.toString());
};

const dividirNumeros = (req, res) => {
    const { num1, num2 } = req.query;

    const result = Number(num1) / Number(num2);
    res.send(result.toString());
};

export { somarNumeros, subtrairNumeros, multiplicarNumeros, dividirNumeros };
