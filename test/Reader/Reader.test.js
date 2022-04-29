const Reader = require("./../../lib/utils/Reader");
const fs = require("fs");

describe("Prueba del reader para los explorers", () => {
    test("Reading package for explorers", () => {
        const explorer = Reader.readJsonFile("explorers.json");
       

        const rawdata = fs.readFileSync("explorers.json");
        const explorers = JSON.parse(rawdata);

        expect(explorer).toEqual(explorers);
    });
});

