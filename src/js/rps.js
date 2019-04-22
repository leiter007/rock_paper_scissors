
class RoundCalculator {
    constructor(draw1, draw2) {
        this.draw1 = draw1
        this.draw2 = draw2
}
    setDraw1() {
        if (this.draw1 == "rock") {
            return "Rock";
        } else if (this.draw1 == "paper") {
            return "Paper";
        } else if (this.draw1 == "scissors") {
            return "Scissors";
        } else {
            return "No valid draw"
        }
    }

    setDraw2() {
        if (this.draw2 == "rock") {
            return "Rock";
        } else if (this.draw2 == "paper") {
            return "Paper";
        } else if (this.draw2 == "scissors") {
            return "Scissors";
        } else {
            return "No valid draw"
        }
    }
}