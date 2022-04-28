class ExplorerService {

    static filterByMission(explorers,mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode
    }
    static getAmountOfExplorersByMission(explorers,mission){

        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode.length

    }
    static getExplorersUsernameByMission(explorers,mission){

        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        const ExplorersUser = explorersInNode.map((explorer) => explorer.githubUsername)
        return ExplorersUser
    }
}


module.exports = ExplorerService