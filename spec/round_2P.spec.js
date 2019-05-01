const { Round_2P } = require('../spec.helper')
require('../spec.helper')

describe("Round - two player game", function() {
    
    let round = new Round_2P()

    it('round should be an instace of Round', () => {
        expect(round).to.be.an.instanceOf(Round_2P)
    })

    it("Player1 returns correct value", () => {
        let draw1 = "Rock"
        expect(round.player1_Draw(draw1)).to.equal("Rock")
    })

    it("Player2 returns correct value", () => {
        let draw2 = "Paper"
        expect(round.player1_Draw(draw2)).to.equal("Paper")
    })

    it("should return correct message after round", () => {

        let player1_msg = "Player 1 wins!"
        let player2_msg = "Player 2 wins!"
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

        let player1 = "Player 1"
        let player2 = "Player 2"
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