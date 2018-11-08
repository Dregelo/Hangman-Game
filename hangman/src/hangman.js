import { createMessageDOM } from "./index"

class Hangman {
    constructor(word, numOfGuess) {
        this.word = word.toLowerCase().split("");
        this.numOfGuess = numOfGuess;
        this.remainingGuess = numOfGuess;
        this.guessed = [];
        this.status = "playing";    
    }

    get puzzle() {
        let puzzle = "";
        this.word.forEach(letter => (this.guessed.includes(letter) || letter === " ") ? puzzle += letter : puzzle += "*");
        return puzzle;
    }

    makeGuess(char) {
        char = char.toLowerCase();
        if (this.status === "playing") {
            if(!this.guessed.includes(char)) {
                !this.word.includes(char) ? this.remainingGuess-- : null;
                this.guessed = [...char]
            } else {
                createMessageDOM(`You have already guessed "${char.toUpperCase()}"` )
            } 
        }
        this.statusUpdate(); 
        this.result();  
    }

    result() {
        if (this.status === "finished") {
            createMessageDOM("You won")
        } else if (this.status === "failed") {
            createMessageDOM(`You lost! :( Your word was: ${this.word.join("").toUpperCase()}` )
        }
    }

    statusUpdate() {    
        if (this.puzzle === this.word.join("")) {
            this.status = "finished"
        }
        if (!this.remainingGuess) {
            this.status = "failed"
        } 
    }
}

export default Hangman