const WhoopaController = require('./../../lib/controllers/WhoopaController')

describe("Prueba del controlador Whoopa", () => {
    test("1. Metodo get explorerusername", () => {

        const explorer1 =  {
            name: "Woopa1",
            githubUsername: "ajolonauta1",
            score: 1,
            mission: "node"
          }
        

        const explorer = WhoopaController.getExplorersUsernameByMission(explorer1.mission)
        expect(explorer).toEqual(["ajolonauta1"])
    })
    test("2. Metodo cantidad de explorers en Node", () => {

        const explorer = WhoopaController.getAmountOfExplorersByMission("node")
        expect(explorer).toBe(5)
    })
    test('3. Fizzbuzz para los explorers', () => {

        const explorer1 =  {
            name: "Woopa1",
            githubUsername: "ajolonauta1",
            score: 1,
            mission: "node"
          }

        const explorer = WhoopaController.fizzBuzzExplorer(explorer1)
        expect(explorer.score).toBe(1)
    })
})