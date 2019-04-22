const { Round } = require('../spec.helper')

describe("Round", function() {

    it("returns correct win message", () => {
        let round = new Round()
        round.setDrawOptions();
        round.calculateDraw();
        expect(round.calculateDraw()).to.equal("Paper beats Rock, you lose!")
    })


    // it("returns correct tie message", () => {
    //     let roundCalc = new RoundCalculator("rock", "rock")
    //     roundCalc.calculateDraw();
    //     expect(roundCalc.calculateDraw()).to.equal("No winner")
    // })

    // it("returns Paper for Draw1 if paper is inserted", () => {
    //     let roundCalc = new RoundCalculator("paper", "paper")
    //     roundCalc.setDraw1();
    //     expect(roundCalc.setDraw1()).to.equal("Paper")
    // })

    // it("returns No valid draw for Draw1 if invalid draw", () => {
    //     let roundCalc = new RoundCalculator("hello", "paper")
    //     roundCalc.setDraw1();
    //     expect(roundCalc.setDraw1()).to.equal("No valid draw")
    // })

    // it("returns Rock for Draw2 if rock is inserted", () => {
    //     let roundCalc = new RoundCalculator("rock", "rock")
    //     roundCalc.setDraw2();
    //     expect(roundCalc.setDraw2()).to.equal("Rock")
    // })

    // it("returns Paper for Draw2 if paper is inserted", () => {
    //     let roundCalc = new RoundCalculator("paper", "paper")
    //     roundCalc.setDraw2();
    //     expect(roundCalc.setDraw2()).to.equal("Paper")
    // })

    // it("returns No valid draw for Draw1 if invalid draw", () => {
    //     let roundCalc = new RoundCalculator("paper", "hello")
    //     roundCalc.setDraw2();
    //     expect(roundCalc.setDraw2()).to.equal("No valid draw")
    // })

})