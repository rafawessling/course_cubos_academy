import cars from '../database.js';

const getCars = (req, res) => {
    const { brand, color } = req.query;
    let result = cars;

    if (brand) {
        result = result.filter(car => {
            return car.brand === brand;
        });
    }

    if (color) {
        result = result.filter(car => {
            return car.color === color;
        });
    }

    res.send(result);
};

const findCar = (req, res) => {
    const { id } = req.params;

    let carFound = cars.find(car => {
        return car.id === Number(id);
    });

    res.send(carFound);
};

export { getCars, findCar };
