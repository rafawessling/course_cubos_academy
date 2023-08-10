import guests from '../data/guests.js';

const getGuests = (req, res) => {
    const { name } = req.query;
    let result = guests;

    if (name) {
        result = result.filter(guest => {
            return guest === name;
        });
        if (!result.length) {
            return res.status(404).json({ message: 'Guest not found.' });
        } else {
            return res.status(200).json({ message: 'The guest is on the list.' });
        }
    }

    return res.status(200).json(guests);
};

const registerGuests = (req, res) => {
    const { name } = req.body;

    const foundGuest = guests.find(guest => {
        return guest === name;
    });

    if (foundGuest) {
        return res.status(400).json({ message: 'This name is already on the list.' });
    }

    if (!name || name.split(' ').join('') === '') {
        return res.status(400).json({ message: 'Name is required.' });
    }

    guests.push(name);

    return res.status(201).json({ message: 'Guest added.' });
};

const deleteGuest = (req, res) => {
    const { name } = req.query;

    const indexGuest = guests.findIndex(guest => {
        return guest === name;
    });

    if (indexGuest === -1) {
        return res.status(404).json({ message: 'Guest not found. No guest has been removed.' });
    }

    guests.splice(indexGuest, 1);

    return res.status(200).json({ message: 'Guest removed.' });
};

export { getGuests, registerGuests, deleteGuest };
