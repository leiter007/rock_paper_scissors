const { Round } = require('../spec.helper')

describe("Round", function() {
    
    let round = new Round()

    it('round should be an instace of Round', () => {
        expect(round).to.be.an.instanceOf(Round)
    })

    it("Player1 returns correct value", () => {
        let draw1 = "Rock"
        expect(round.player1_Draw(draw1)).to.equal("Rock")
    })

    it("Player2 returns one of Rock, Paper or Scissors", () => {
        expect(round.player2_Draw()).to.be.oneOf(["Rock","Paper","Scissors"])
    })

    it("should return correct message after round", () => {

        let player1_msg = "you win!"
        let player2_msg = "computer wins.."
        let tie_msg = "It's a tie"

        round.draw = {player1: "Rock", player2: "Rock"}
        expect(round.calculateDraw()).to.equal(tie_msg)

        round.draw = {player1: "Paper", player2: "Paper"}
        expect(round.calculateDraw()).to.equal(tie_msg)

        round.draw = {player1: "Scissors", player2: "Scissors"}
        expect(round.calculateDraw()).to.equal(tie_msg)

        round.draw = {player1: "Rock", player2: "Paper"}
        expect(round.calculateDraw()).to.equal(`Paper beats Rock, ${player2_msg}`)

        round.draw = {player1: "Rock", player2: "Scissors"}
        expect(round.calculateDraw()).to.equal(`Rock beats Scissors, ${player1_msg}`)

        round.draw = {player1: "Paper", player2: "Scissors"}
        expect(round.calculateDraw()).to.equal(`Scissors beats Paper, ${player2_msg}`)

        round.draw = {player1: "Paper", player2: "Rock"}
        expect(round.calculateDraw()).to.equal(`Paper beats Rock, ${player1_msg}`)

        round.draw = {player1: "Scissors", player2: "Rock"}
        expect(round.calculateDraw()).to.equal(`Rock beats Scissors, ${player2_msg}`)

        round.draw = {player1: "Scissors", player2: "Paper"}
        expect(round.calculateDraw()).to.equal(`Scissors beats Paper, ${player1_msg}`)
    })

    it("should return correct winner", () => {

        let player1 = "Player1"
        let player2 = "Computer"
        let tie = "Tie"

        round.draw = {player1: "Rock", player2: "Rock"}
        round.calculateDraw()
        expect(round.draw.winner).to.equal(tie)

        round.draw = {player1: "Paper", player2: "Paper"}
        round.calculateDraw()
        expect(round.draw.winner).to.equal(tie)

        round.draw = {player1: "Scissors", player2: "Scissors"}
        round.calculateDraw()
        expect(round.draw.winner).to.equal(tie)

        round.draw = {player1: "Rock", player2: "Paper"}
        round.calculateDraw()
        expect(round.draw.winner).to.equal(player2)

        round.draw = {player1: "Rock", player2: "Scissors"}
        round.calculateDraw()
        expect(round.draw.winner).to.equal(player1)

        round.draw = {player1: "Paper", player2: "Scissors"}
        round.calculateDraw()
        expect(round.draw.winner).to.equal(player2)

        round.draw = {player1: "Paper", player2: "Rock"}
        round.calculateDraw()
        expect(round.draw.winner).to.equal(player1)

        round.draw = {player1: "Scissors", player2: "Rock"}
        round.calculateDraw()
        expect(round.draw.winner).to.equal(player2)

        round.draw = {player1: "Scissors", player2: "Paper"}
        round.calculateDraw()
        expect(round.draw.winner).to.equal(player1)
    })
   

})