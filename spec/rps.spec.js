const { RoundCalculator } = require('../spec.helper')

describe("RoundCalculator", function() {

    it("returns Rock for Draw1 if rock is inserted", () => {
        let roundCalc = new RoundCalculator("rock", "paper")
        roundCalc.setDraw1();
        expect(roundCalc.setDraw1()).to.equal("Rock")
    })

    it("returns Paper for Draw1 if paper is inserted", () => {
        let roundCalc = new RoundCalculator("paper", "paper")
        roundCalc.setDraw1();
        expect(roundCalc.setDraw1()).to.equal("Paper")
    })

    it("returns No valid draw for Draw1 if invalid draw", () => {
        let roundCalc = new RoundCalculator("hello", "paper")
        roundCalc.setDraw1();
        expect(roundCalc.setDraw1()).to.equal("No valid draw")
    })

    it("returns Rock for Draw2 if rock is inserted", () => {
        let roundCalc = new RoundCalculator("rock", "rock")
        roundCalc.setDraw2();
        expect(roundCalc.setDraw2()).to.equal("Rock")
    })

    it("returns Paper for Draw2 if paper is inserted", () => {
        let roundCalc = new RoundCalculator("paper", "paper")
        roundCalc.setDraw2();
        expect(roundCalc.setDraw2()).to.equal("Paper")
    })

    it("returns No valid draw for Draw1 if invalid draw", () => {
        let roundCalc = new RoundCalculator("paper", "hello")
        roundCalc.setDraw2();
        expect(roundCalc.setDraw2()).to.equal("No valid draw")
    })

})