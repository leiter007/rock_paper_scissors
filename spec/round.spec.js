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
        let draw1 = "Rock"
        round.setDraws(draw1)
        expect(round.calculateDraw()).to.equal("Paper beats Rock, you lose!")
    })


    // it("returns correct tie message", () => {
    //     let roundCalc = new RoundCalculator("rock", "rock")
    //     roundCalc.calculateDraw();
    //     expect(roundCalc.calculateDraw()).to.equal("No winner")
    // })

   

})