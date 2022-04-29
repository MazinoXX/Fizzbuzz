const ExplorerService = require('./../../lib/services/ExplorerService')
const Reader = require('./../../lib/utils/Reader')


describe('Test para el service de los explorers', () => {
    test('1. Filtrando los explorers que estan en la misiion de Node JS', () => {

        const explorers = Reader.readJsonFile("explorers.json")
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");



        const explorer = ExplorerService.filterByMission(explorers, "node")

        expect(explorer).toEqual(explorersInNode)
    })
    test('2. Obteniendo la cantidad de explorers en la mission de Node JS', () => {

        const explorers = Reader.readJsonFile("explorers.json")
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        const AmountOfExplorers = explorersInNode.length

        const AmountOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers,"node")
        expect(AmountOfExplorersInNode).toBe(AmountOfExplorers)

    })
    test('3. Obteniendo el Github user de los explorers', () => {
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        const ExplorersUser = explorersInNode.map((explorer) => explorer.githubUsername)

        const explorergithubName = ExplorerService.getExplorersUsernameByMission(explorers,"node")
        expect(ExplorersUser).toEqual(explorergithu)
    })
})