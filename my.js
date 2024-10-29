"use strict";

console.log("Hellow, JavaScript check")

// 1. programme will choose a ramdom option between rock paper and scissor
//     1. programme will choose for a random number 

let rock;
let paper;
let scissor;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    let choice;
    if (randomNumber < 33) {
        choice = "ROCK";

    } else if (randomNumber < 66) {
        choice = "PAPER";
    }
    else {
        choice = "SCISSOR";
    };

    return choice;
};

getComputerChoice();

console.log(getComputerChoice());

//     2. multiplying random number by 100 converting it into 1 to hundred floting numer
//     3. converting floting number to a nearst integer
//     4. if number is between 0 to 33 then itll denote rock

//     5. if number is between 33 to 66 then itll denote paper 
//     6. if number is between 66 to 100 then itll denote scissor
// 2. User will give one option among these three and itll be stored in a variable.

let getHumanChoice = prompt("Write your choice between rock , paper , scissor", "");
let gett = getHumanChoice.toUpperCase();
console.log(gett);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    String(humanChoice);
    // humanChoice.toUppeCase();

    if (computerChoice === humanChoice) {
        return console.log("Game tied. Lets play again.");

    };
    if (computerChoice === "ROCK" && humanChoice === "PAPER") {
        return console.log(`Congrats! You win. ${humanChoice} beats ${computerChoice}`);
    };

    if (computerChoice === "ROCK" && humanChoice === "SCISSOR") {
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    };
    if (computerChoice === "SCISSOR" && humanChoice === "ROCK") {
        return console.log(`Congrats! You win. ${humanChoice} beats ${computerChoice}`);
    };
    if (computerChoice === "SCISSOR" && humanChoice === "PAPER") {
        return console.log(`Congrats! You win. ${humanChoice} beats ${computerChoice}`);
    };
    if (computerChoice === "PAPER" && humanChoice === "ROCK") {
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    };
    if (computerChoice === "PAPER" && humanChoice === "SCISSOR") {
        return console.log(`Congrats! You win. ${humanChoice} beats ${computerChoice}`);
    };
    if (computerChoice !== humanChoice){
    console.log(`You entered a wrong word. Please check your spelling and try again.`) ;
    };
    
}

const humanSelection = gett;
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


// 3. Comparing
//     1. if programm and user choosed the same option then both will win
//     2. if program choose rock and user choose paper then programm will output Congrats You win.
//     3. otherwise if user choose scissor then itll output hurray I won.
//     4. p-scissor & u-rock = you win
//     5. p- s & u-p = i win
//     6. p-p & u-rock= i win 
//     7. p-p & u-s = you win

// function giveAnswer()
// 4. Give option to replay the game.

