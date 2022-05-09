const WhoopaController = require("./../../lib/controllers/WhoopaController");

describe("Prueba del controlador Whoopa", () => {
    test("1. Metodo get explorerusername", () => {

        const explorer1 =  {
            name: "Woopa1",
            githubUsername: "ajolonauta1",
            score: 1,
            mission: "node"
        };
        

        const explorer = WhoopaController.getExplorersUsernameByMission(explorer1.mission);
        expect(explorer).toEqual(["ajolonauta1","ajolonauta2","ajolonauta3","ajolonauta4",]);
    });
    test("2. Metodo cantidad de explorers en Node", () => {

        const explorer = WhoopaController.getAmountOfExplorersByMission("node");
        expect(explorer).toBe(4);
    });
    test("3. Fizzbuzz with number", () => {

        const explorer1 =  {
            name: "Woopa1",
            githubUsername: "ajolonauta1",
            score: 1,
            mission: "node"
        };

        const explorer = WhoopaController.fizzBuzzNumber(explorer1.score);
        expect(explorer).toBe(1);
    });
});