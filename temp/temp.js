"use strict";

let computerSelection;
let humanSelection;
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber < 33) {
        computerSelection = "ROCK"
    }
    else if (randomNumber < 66) {
        computerSelection = "PAPER"
    }
    else if (randomNumber < 100) {
        computerSelection = "SCISSOR"
    }
    return computerSelection;
};

function getHumanChoice() {
    let selection = prompt(`Write your choice between rock , paper , scissor `, "");
    if (typeof selection === 'string') {
        humanSelection = selection.toUpperCase();
        return humanSelection;
    }
    else {
        let theEnd = prompt(`Do you want to quit the game?
            Tap enter for YES.
            Click Cancel for NO.`);
        if (theEnd === '') {
            computerScore = 5;
            return console.log(`You quit the GAME.
                Computer WON.`);
        }
        else {
            playGame();
        }
    };
}


function playRound(humanChoice, computerChoice) {

    if (computerChoice === humanChoice) {
        console.log(`Your chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`Game tied. Play Again 
            `);
    }
    else if (computerChoice === "ROCK" && humanChoice === "PAPER") {
        humanScore++;
        console.log(`Your chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`Congrats! You win. ${humanChoice} beats ${computerChoice}`);
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);
    }
    else if (computerChoice === `ROCK` && humanChoice === `SCISSOR`) {
        computerScore++;
        console.log(`Your chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);

    }
    else if (computerChoice === `PAPER` && humanChoice === `ROCK`) {
        computerScore++;
        console.log(`Your chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);

    }
    else if (computerChoice === `PAPER` && humanChoice === `SCISSOR`) {
        humanScore++;
        console.log(`Your chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`Congrats! You win. ${humanChoice} beats ${computerChoice}`)
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);

    }
    else if (computerChoice === `SCISSOR` && humanChoice === `ROCK`) {
        humanScore++;
        console.log(`Your chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`Congrats! You win. ${humanChoice} beats ${computerChoice}`)
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);

    }
    else if (computerChoice === `SCISSOR` && humanChoice === `PAPER`) {
        computerScore++;
        console.log(`Your chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);

    }
    else if (humanChoice !== undefined) {
        computerScore++;
        console.log(`Your entered ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`You entered a wrong word. Please check your spelling and try again. Typing wrong word gives 1 points to opponent.`);
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);
    }

};

let gameScore;

function playGame() {

    gameScore = Math.max(humanScore, computerScore);

    if (gameScore === 5 || gameScore > 5) {
        if (humanScore === 5 || humanScore > 5) {
            console.log(`Your score is 5 and computer scored only ${computerScore}. 
            Hooray!!! You win the GAME`)
        }
        else {
            console.log(`Computer score is 5 and you scored ${humanScore}. You lost the GAME.
            Better luck next time!
            Refresh the page to play Again`)
        }
    }
    else {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        playGame();
    }
};

playGame();
