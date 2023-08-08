const players = ['José', 'Maria', 'João', 'Marcos', 'Fernanda'];

let count = 0;

const selectedPlayer = (req, res) => {
    count > players.length - 1 && (count = 0);

    let currPlayer = players[count];

    if (players.length <= 0) {
        return res.send('');
    }

    res.send(`${currPlayer}'s turn!`);

    count++;
};

const removePlayer = (req, res) => {
    const { index } = req.query;

    if (!players[index]) {
        return res.send(`There's no player in the index ${index} to be removed.`);
    }

    players.splice(index, 1);

    res.send(players);

    count > 0 && count--;
};

const addPlayer = (req, res) => {
    const { name, index } = req.query;

    if (index && !players[index]) {
        return res.send(`The index ${index} does not exist in the array. New player not added.`);
    }

    if (name && index) {
        players.splice(index, 0, name);
        return res.send(players);
    }

    if (name) {
        players.push(name);
        return res.send(players);
    }
};

export { selectedPlayer, removePlayer, addPlayer };
