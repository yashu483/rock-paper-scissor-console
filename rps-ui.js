"use strict";

let computerSelection;
let humanSelection;
let computerScore = 0;
let humanScore = 0;
let maxPoints = 0;
let gameScore = 0;


const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const para4 = document.createElement("p");

para1.classList.toggle("temp-para");
para2.classList.toggle("temp-para");
para3.classList.toggle("temp-para-l");
para4.classList.toggle("temp-para");

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
    let target = event.target;
    switch (target.id) {
        case "one": return "ROCK";
            break;
        case "two": return 'PAPER';
            break
        case "three": return "SCISSOR";
    };

    // if (event.type === "keypress") {
    //     switch (target.code) {
    //         case "KeyR": return humanSelection = "ROCK";
    //             break;
    //         case "KeyP": return humanSelection = "PAPER";
    //             break;
    //         case "KeyS": return humanSelection = "SCISSOR";
    //         default: return;
    //     };
    // };
};

function getHumanChoiceByKey() {
    let keyPressed = event.code;

    switch (keyPressed) {
        case "KeyR": return "ROCK";
            break;
        case "KeyP": return "PAPER";
            break;
        case "KeyS": return "SCISSOR";
    }
}

function playGame() {

    gameScore = Math.max(humanScore, computerScore);

    if (gameScore === maxPoints || gameScore > maxPoints) {
        if (humanScore === maxPoints || humanScore > maxPoints) {
            para1.textContent = `Game Over!`;
            para2.textContent = `Your score is ${humanScore} and computer scored only ${computerScore}.`;
            para3.textContent = `You Won the Game.`;
            para4.textContent = `Click the RESTART button to play again.`
        }
        else {
            para1.textContent = `Game Over!`;
            para2.textContent = `Computer score is ${computerScore} and you scored ${humanScore}.`;
            para3.textContent = `You Lost the Game.`;
            para4.textContent = `Better luck next time! Click the RESTART button to play again.`;
        }
    }
    else {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
};

function playGameByKey() {
    gameScore = Math.max(humanScore, computerScore);

    if (gameScore === maxPoints || gameScore > maxPoints) {
        if (humanScore === maxPoints || humanScore > maxPoints) {
            para1.textContent = `Game Over!`;
            para2.textContent = `Your score is ${humanScore} and computer scored only ${computerScore}.`;
            para3.textContent = `You Won the Game.`;
            para4.textContent = `Click the RESTART button to play again.`
            return;
        }
        else {
            para1.textContent = `Game Over!`;
            para2.textContent = `Computer score is ${computerScore} and you scored ${humanScore}.`;
            para3.textContent = `You Lost the Game.`;
            para4.textContent = `Better luck next time! Click the RESTART button to play again.`;
            return;
        }
    }
    else {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoiceByKey();
        playRound(humanSelection, computerSelection);
    }
};

function playRound(humanChoice, computerChoice) {
    newPara.remove();

    if (computerChoice === humanChoice) {
        para1.textContent = `You chose ${humanChoice}.`;
        para2.textContent = `Computer chose ${computerChoice}`;
        para3.textContent = `Round Tied.`;
    }
    else if (computerChoice === "ROCK" && humanChoice === "PAPER") {
        humanScore++;

        para1.textContent = `You chose ${humanChoice}.`;
        para2.textContent = `Computer chose ${computerChoice}`;
        para3.textContent = `Congrats! You win. ${humanChoice} beats ${computerChoice}`;
        para4.textContent = `Now your score is ${humanScore} and computer score is ${computerScore}`;


    }
    else if (computerChoice === `ROCK` && humanChoice === `SCISSOR`) {
        computerScore++;
        para1.textContent = `You chose ${humanChoice}.`;
        para2.textContent = `Computer chose ${computerChoice}`;
        para3.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        para4.textContent = `Now your score is ${humanScore} and computer score is ${computerScore}`;

    }
    else if (computerChoice === `PAPER` && humanChoice === `ROCK`) {
        computerScore++;
        para1.textContent = `You chose ${humanChoice}.`;
        para2.textContent = `Computer chose ${computerChoice}`;
        para3.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        para4.textContent = `Now your score is ${humanScore} and computer score is ${computerScore}`;

    }
    else if (computerChoice === `PAPER` && humanChoice === `SCISSOR`) {
        humanScore++;
        para1.textContent = `You chose ${humanChoice}.`;
        para2.textContent = `Computer chose ${computerChoice}`;
        para3.textContent = `Congrats! You win. ${humanChoice} beats ${computerChoice}`;
        para4.textContent = `Now your score is ${humanScore} and computer score is ${computerScore}`;

    }
    else if (computerChoice === `SCISSOR` && humanChoice === `ROCK`) {
        humanScore++;
        para1.textContent = `You chose ${humanChoice}.`;
        para2.textContent = `Computer chose ${computerChoice}`;
        para3.textContent = `Congrats! You win. ${humanChoice} beats ${computerChoice}`;
        para4.textContent = `Now your score is ${humanScore} and computer score is ${computerScore}`;

    }
    else if (computerChoice === `SCISSOR` && humanChoice === `PAPER`) {
        computerScore++;
        para1.textContent = `You chose ${humanChoice}.`;
        para2.textContent = `Computer chose ${computerChoice}`;
        para3.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        para4.textContent = `Now your score is ${humanScore} and computer score is ${computerScore}`;

    }
    resultDiv.append(para1);
    resultDiv.append(para2);
    resultDiv.append(para3);
    resultDiv.append(para4);


};

const playerName = document.querySelector("#name-player");

playerName.addEventListener("click", () => {
    let name = prompt("Type your name.", "PLAYER");

    if (typeof name === "string") {
        let tempName = name.toUpperCase();
        playerName.textContent = tempName;
    }
});

// - [ ]  Add event listener to start button

const startButton = document.querySelector(".start");
const selectionSection = document.querySelector("#round-content");
const currentRound = document.querySelector("#current-round");
const changeName = document.querySelector(".change-name");

const restartButton = document.createElement("button");

restartButton.innerText = "RESTART";
restartButton.classList.toggle("restart-button");

const resultDiv = document.createElement("div");
resultDiv.classList.toggle("relative-div")

const newPara = document.createElement("p");
newPara.textContent = `To throw your choice click on icon below OR
 press R for rock, P for paper,
  or S for scissor .`;
newPara.classList.toggle("new-para");


// - [ ]  once user clicks on start button, remove selection section content
// - [ ]  add restart button near to vs icon.
const tempPoints = document.querySelector("#points");


startButton.addEventListener("click", () => {
    selectionSection.remove();
    changeName.remove();
    currentRound.appendChild(restartButton);
    currentRound.appendChild(resultDiv);
    resultDiv.appendChild(newPara);
    maxPoints = tempPoints.value;
});

// - [ ]  show text in selection section “ click on images below or press R for rock,, P for paper, or S for scissor, to throw your choice”
// - [ ]  create funtion for action based on image clicks

const playerChoice = document.querySelector(".choice-section-p");


playerChoice.addEventListener("click", (event) => {
    let target = event.target;
    playGame();
});

// - [ ]  create function for key pressed.
// - [ ]  add event listener for image clicks
// - [ ]  add event listener for button pressed

document.addEventListener("keypress", (event) => {
    playGameByKey();
});


// - [ ]  show the appropriate result  based on user and computer choice in selection section
// - [ ]  add new round result in history section
// - [ ]  once game points is equals to max points selected show the game over and declare winner with first to reach the max points.


// playGame();
