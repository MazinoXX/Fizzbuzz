const WhoopaController = require('./../lib/controllers/WhoopaController')
const express = require("express")

const app = express()
app.use(express.json())
const port = 3000

app.get('/v1/explorers/:mission', (req,res) => {
    const mission = req.params.mission
    const explorerInMission = WhoopaController.getExplorerByMission(mission)
    res.json(explorerInMission)
})
app.get('/v1/explorers/amount/:mission', (req,res) => {
    const mission = req.params.mission
    const explorerAmountInMission = WhoopaController.getAmountOfExplorersByMission(mission)
    res.json({mission:req.params.mission,quantity: explorerAmountInMission})
})
app.get('/v1/explorers/usernames/:mission', (req,res) => {
    const mission = req.params.mission
    const explorerListUsername = WhoopaController.getExplorersUsernameByMission(mission)
    res.json(explorerListUsername)
})



app.listen(port, () => {
    console.log(`Server up on port ${port}`)
}
)