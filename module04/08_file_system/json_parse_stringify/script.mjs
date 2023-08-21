import fs from 'fs/promises';

(async function () {
    const fileJson = await fs.readFile('teste.json');

    const people = JSON.parse(fileJson);

    people.push({
        name: 'Ana',
        age: 25,
    });

    console.log(people[2]);

    const arrayJson = JSON.stringify(people);

    console.log(arrayJson);
})();
