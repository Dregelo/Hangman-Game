import Hangman from "./hangman"
import getPuzzle from "./requests"

"use strict"

let game1

const DOMObj = {
    letterDiv: document.querySelector("#hangman-letters"),
    puzzleDiv: document.querySelector("#puzzle"),
    guessesDiv: document.querySelector("#guesses"),
    messageSpan: document.querySelector("#message"),
    remainingGuesses: document.querySelector("#remainingGuesses"),
    restart: document.querySelector("#restart")
}

let createPuzzleDOMElement = () => {
    DOMObj.puzzleDiv.innerHTML = "";
    DOMObj.guessesDiv.innerHTML = "";
    DOMObj.remainingGuesses.textContent = game1.remainingGuess;

    game1.puzzle.split("").forEach(letter => {
        const span = document.createElement("span")
        span.textContent = letter
        DOMObj.puzzleDiv.appendChild(span)
    })

    game1.guessed.forEach(letter => {
        const span = document.createElement("span")
        span.textContent = letter
        DOMObj.guessesDiv.appendChild(span)
    })
}

export const createMessageDOM = message => DOMObj.messageSpan.textContent = message;

const updateDOM = () => createPuzzleDOMElement();

const init = async () => {
    const puzzle = await getPuzzle("2")
    game1 = new Hangman(puzzle, 5)
    DOMObj.messageSpan.textContent = ""
    createPuzzleDOMElement();
}

DOMObj.restart.addEventListener("click", () => init());

window.addEventListener("keypress", (e) => {
    game1.makeGuess(e.key)
    updateDOM()
})

init()




