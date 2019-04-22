
class Round {
    constructor() {
        this.draw = {}
    }
    
    setDrawOptions () {
        this.draw.player1 = this.player1_Draw()
        this.draw.player2 = this.player2_Draw()
    }

    player1_Draw() {
        return "Rock"
    }

    player2_Draw() {
        //let options = ["Rock", "Paper", "Scissors"]
        //let random = options[Math.floor(Math.random()*3)]
        //return random
        return "Paper"
    }

    calculateDraw() {
        let d1 = this.draw.player1
        let d2 = this.draw.player2

        if (d1 == d2) {
            return "It's a tie"
        } else if (d1 == "Rock" && d2 == "Paper") {
            return "Paper beats Rock, you lose!"
        } else if (d1 == "Rock" && d2 == "Scissors") {
            return "Rock beats Scissors, you win!"
        } else if (d1 == "Paper" && d2 == "Scissors") {
            return "Scissors beats Paper, you lose!"
        } else if (d1 == "Paper" && d2 == "Rock") {
            return "Paper beats Rock, you win!"
        } else if (d1 == "Scissors" && d2 == "Rock") {
            return "Rock beats Scissors, you lose!"
        } else if (d1 == "Scissors" && d2 == "Paper") {
            return "Scissor beats Paper, you win!"
        }
        
    }
}
