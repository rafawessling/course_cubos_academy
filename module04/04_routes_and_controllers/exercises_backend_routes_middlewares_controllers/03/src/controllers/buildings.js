import { buildings } from '../data/buildings.js';

const getBuildings = (req, res) => {
    res.send(buildings);
};

const getById = (req, res) => {
    const { id } = req.params;

    const foundBuilding = buildings.find(building => {
        return building.id === Number(id);
    });

    res.send(foundBuilding);
};

export { getBuildings, getById };
