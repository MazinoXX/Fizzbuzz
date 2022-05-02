const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");
const Reader = require("./../../lib/utils/Reader");


class WhoopaController{

    static getExplorerByMission(mission){

        const explorer = Reader.readJsonFile("./data/explorers1.json");
        const explorerByMission = ExplorerService.filterByMission(explorer,mission);
        return explorerByMission;  
    }
    static getExplorersUsernameByMission(mission){

        const explorer = Reader.readJsonFile("./data/explorers1.json");
        return ExplorerService.getExplorersUsernameByMission(explorer,mission);
    }
    static getAmountOfExplorersByMission(mission){

        const explorer = Reader.readJsonFile("./data/explorers2.json");
        return ExplorerService.getAmountOfExplorersByMission(explorer,mission);
    }
    static fizzBuzzNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
}

module.exports = WhoopaController;