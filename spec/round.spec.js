const { Round } = require('../spec.helper')

describe("Round", function() {
    
    let round = new Round()

    it('round should be an instace of Round', () => {
        expect(round).to.be.an.instanceOf(Round)
    })

    it("Player1 returns a value", () => {
        let draw1 = "Rock"
        expect(round.player1_Draw(draw1)).to.equal("Rock")
    })

    it("Player2 returns one of Rock, Paper or Scissors", () => {
        expect(round.player2_Draw()).to.be.oneOf(["Rock","Paper","Scissors"])
    })

    it("should return correct message after round", () => {
        round.draw = {player1: "Rock", player2: "Rock"}
        expect(round.calculateDraw()).to.equal("It's a tie")

        round.draw = {player1: "Paper", player2: "Paper"}
        expect(round.calculateDraw()).to.equal("It's a tie")

        round.draw = {player1: "Scissors", player2: "Scissors"}
        expect(round.calculateDraw()).to.equal("It's a tie")

        round.draw = {player1: "Rock", player2: "Paper"}
        expect(round.calculateDraw()).to.equal("Paper beats Rock, you lose!")

        round.draw = {player1: "Rock", player2: "Scissors"}
        expect(round.calculateDraw()).to.equal("Rock beats Scissors, you win!")

        round.draw = {player1: "Paper", player2: "Scissors"}
        expect(round.calculateDraw()).to.equal("Scissors beats Paper, you lose!")

        round.draw = {player1: "Paper", player2: "Rock"}
        expect(round.calculateDraw()).to.equal("Paper beats Rock, you win!")

        round.draw = {player1: "Scissors", player2: "Rock"}
        expect(round.calculateDraw()).to.equal("Rock beats Scissors, you lose!")

        round.draw = {player1: "Scissors", player2: "Paper"}
        expect(round.calculateDraw()).to.equal("Scissors beats Paper, you win!")
    })
   

})