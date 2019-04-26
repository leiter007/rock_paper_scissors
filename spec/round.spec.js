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
        round.draw.player1 = "Rock"
        round.draw.player2 = "Paper"
        expect(round.calculateDraw()).to.equal("Paper beats Rock, you lose!")
    })

    it("should return correct message after round", () => {
        round.draw.player1 = "Rock"
        round.draw.player2 = "Rock"
        expect(round.calculateDraw()).to.equal("It's a tie")
    })

   

})