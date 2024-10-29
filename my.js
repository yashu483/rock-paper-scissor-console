"use strict";

console.log(`Lets play ROCK-PAPER-SCISSOR
    `);


let computerSelection;
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
computerSelection = getComputerChoice();

let humanSelection = prompt("Write your choice between rock, paper and scissor",).toUpperCase();

// console.log(humanSelection)

// completion of input stage

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
        console.log(`Congrats! You win. ${humanChoice} beats ${computerChoice}`) ;
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);
    }
    else if (computerChoice === `ROCK` && humanChoice === `SCISSOR`){
        computerScore++ ;
        console.log(`Your chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);

    } 
    else if (computerChoice === `PAPER` && humanChoice === `ROCK`){
        computerScore++ ;
        console.log(`Your chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);

    } 
    else if (computerChoice === `PAPER` && humanChoice === `SCISSOR`){
        humanScore++;
        console.log(`Your chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`Congrats! You win. ${humanChoice} beats ${computerChoice}`)
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);

    } 
    else if (computerChoice === `SCISSOR` && humanChoice === `ROCK`){
        humanScore++;
        console.log(`Your chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`Congrats! You win. ${humanChoice} beats ${computerChoice}`)
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);

    } 
    else if (computerChoice === `SCISSOR` && humanChoice === `PAPER`){
        computerScore++ ;
        console.log(`Your chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Now your score is ${humanScore} and computer score is ${computerScore}
            `);

    } 
    else{
        console.log(`Your entered ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(`You entered a wrong word. Please check your spelling and try again.
            `);

    } 

} ;

playRound (humanSelection , computerSelection) ;