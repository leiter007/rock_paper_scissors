
class Round {
    constructor() {
        this.draw = {}
    }
    
    setDraws (draw1) {
        this.draw.player1 = this.player1_Draw(draw1)
        this.draw.player2 = this.player2_Draw()
    }

    player1_Draw(draw1) {
        return(draw1)
    }   

    player2_Draw() {
        let options = ["Rock", "Paper", "Scissors"]
        let random = options[Math.floor(Math.random()*3)]
        return random
    }

    calculateDraw() {
        let d1 = this.draw.player1
        let d2 = this.draw.player2
        let d1_winner = "you win!"
        let d2_winner = "computer wins.."

        if (d1 == d2) {
            return "It's a tie"
        } else if (d1 == "Rock" && d2 == "Paper") {
            return `Paper beats Rock, ${d2_winner}`
        } else if (d1 == "Rock" && d2 == "Scissors") {
            return `Rock beats Scissors, ${d1_winner}`
        } else if (d1 == "Paper" && d2 == "Scissors") {
            return `Scissors beats Paper, ${d2_winner}`
        } else if (d1 == "Paper" && d2 == "Rock") {
            return `Paper beats Rock, ${d1_winner}`
        } else if (d1 == "Scissors" && d2 == "Rock") {
            return `Rock beats Scissors, ${d2_winner}`
        } else if (d1 == "Scissors" && d2 == "Paper") {
            return `Scissors beats Paper, ${d1_winner}`
        }
    }
}
