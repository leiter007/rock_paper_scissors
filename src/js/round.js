
class Round {
    constructor() {
        this.draw = {}
    }
    
    // Change names and win messages if Player 2 is not computer
    player1_Name() {
        // if (name == ""){
            return "Player1"
        // }else {
        //     return name
        // }
    }
    player2_Name() {
        return "Computer"
    }
    player1_WinMsg() {
        let player1 = this.player1_Name()
        return `${player1} wins!`
    }
    player2_WinMsg() {
        let player2 = this.player2_Name()
        return `${player2} wins!`
    }


    setDraws (draw1) {
        this.draw.player1 = this.player1_Draw(draw1)
        this.draw.player2 = this.player2_Draw()
    }

    player1_Draw(draw1) {
        return(draw1)
    }   

    // Change here if Player 2 is not computer
    player2_Draw() {
        let options = ["Rock", "Paper", "Scissors"]
        let random = options[Math.floor(Math.random()*3)]
        return random
    }

    calculateDraw() {
        let d1 = this.draw.player1
        let d2 = this.draw.player2

        let d1_winner = this.player1_Name()
        let d2_winner = this.player2_Name()
        let tie = "Tie"
        
        let d1_win_msg = this.player1_WinMsg()
        let d2_win_msg = this.player2_WinMsg()
        let tie_msg = "It's a tie"

        if (d1 == d2) {
            this.draw.winner = tie
            return tie_msg
        } else if (d1 == "Rock" && d2 == "Paper") {
            this.draw.winner = d2_winner
            return `Paper beats Rock, ${d2_win_msg}`
        } else if (d1 == "Rock" && d2 == "Scissors") {
            this.draw.winner = d1_winner
            return `Rock beats Scissors, ${d1_win_msg}`
        } else if (d1 == "Paper" && d2 == "Scissors") {
            this.draw.winner = d2_winner
            return `Scissors beats Paper, ${d2_win_msg}`
        } else if (d1 == "Paper" && d2 == "Rock") {
            this.draw.winner = d1_winner
            return `Paper beats Rock, ${d1_win_msg}`
        } else if (d1 == "Scissors" && d2 == "Rock") {
            this.draw.winner = d2_winner
            return `Rock beats Scissors, ${d2_win_msg}`
        } else if (d1 == "Scissors" && d2 == "Paper") {
            this.draw.winner = d1_winner
            return `Scissors beats Paper, ${d1_win_msg}`
        }
    }
}
