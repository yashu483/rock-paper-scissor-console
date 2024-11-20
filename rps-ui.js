"use strict";

let computerSelection;
let humanSelection;
let computerScore = 0;
let humanScore = 0;
let maxPoints = 0;
let gameScore = 0;
let gameStarted = false;
let totalRound = 0;

const historyPara = document.querySelector(".para");

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
    computerSelection = getComputerChoice();
    addOverLayerP();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    addHistory();
};

function playGameByKey() {
    computerSelection = getComputerChoice();
    addOverLayerP();
    humanSelection = getHumanChoiceByKey();
    playRound(humanSelection, computerSelection);
    addHistory();
};

function playRound(humanChoice, computerChoice) {
    newPara.remove();

    if (computerChoice === humanChoice) {
        para1.textContent = `You chose ${humanChoice}.`;
        para2.textContent = `Computer chose ${computerChoice}`;
        para3.textContent = `Its a DRAW.`;

        resultDiv.append(para1);
        resultDiv.append(para2);
        resultDiv.append(para3);
        resultDiv.append(para4);
        return;
    }
    else if (computerChoice === "ROCK" && humanChoice === "PAPER") {
        humanScore++;

        gameScore = Math.max(humanScore, computerScore);
        console.log(`${maxPoints + " and " + gameScore}`)

        if (gameScore === (maxPoints) || gameScore > (maxPoints)) {
            if (humanScore === maxPoints || humanScore > maxPoints) {
                para1.textContent = `Game Over!`;
                para2.textContent = `Your score is ${humanScore} and computer scored only ${computerScore}.`;
                para3.textContent = `You Won the Game.`;
                para4.textContent = `Click the RESTART button to play again.`

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
            else {
                para1.textContent = `Game Over!`;
                para2.textContent = `Computer score is ${computerScore} and you scored ${humanScore}.`;
                para3.textContent = `You Lost the Game.`;
                para4.textContent = `Better luck next time! Click the RESTART button to play again.`;

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
        }
        else if (gameScore < maxPoints) {
            para1.textContent = `You chose ${humanChoice}.`;
            para2.textContent = `Computer chose ${computerChoice}`;
            para3.textContent = `Congrats! You win. ${humanChoice} beats ${computerChoice}`;
            para4.textContent = `Now your score is ${humanScore} and computer score is ${computerScore}`;

            resultDiv.append(para1);
            resultDiv.append(para2);
            resultDiv.append(para3);
            resultDiv.append(para4);
            return;
        }


    }
    else if (computerChoice === `ROCK` && humanChoice === `SCISSOR`) {
        computerScore++;

        gameScore = Math.max(humanScore, computerScore);
        console.log(`${maxPoints + " and " + gameScore}`)

        if (gameScore === (maxPoints) || gameScore > (maxPoints)) {
            if (humanScore === maxPoints || humanScore > maxPoints) {
                para1.textContent = `Game Over!`;
                para2.textContent = `Your score is ${humanScore} and computer scored only ${computerScore}.`;
                para3.textContent = `You Won the Game.`;
                para4.textContent = `Click the RESTART button to play again.`

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
            else {
                para1.textContent = `Game Over!`;
                para2.textContent = `Computer score is ${computerScore} and you scored ${humanScore}.`;
                para3.textContent = `You Lost the Game.`;
                para4.textContent = `Better luck next time! Click the RESTART button to play again.`;

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
        }
        else if (gameScore < maxPoints) {
            para1.textContent = `You chose ${humanChoice}.`;
            para2.textContent = `Computer chose ${computerChoice}`;
            para3.textContent = `You Lose. ${computerChoice} beats ${humanChoice}`;
            para4.textContent = `Now your score is ${humanScore} and computer score is ${computerScore}`;

            resultDiv.append(para1);
            resultDiv.append(para2);
            resultDiv.append(para3);
            resultDiv.append(para4);
            return;
        }

    }
    else if (computerChoice === `PAPER` && humanChoice === `ROCK`) {
        computerScore++;

        gameScore = Math.max(humanScore, computerScore);
        console.log(`${maxPoints + " and " + gameScore}`)

        if (gameScore === (maxPoints) || gameScore > (maxPoints)) {
            if (humanScore === maxPoints || humanScore > maxPoints) {
                para1.textContent = `Game Over!`;
                para2.textContent = `Your score is ${humanScore} and computer scored only ${computerScore}.`;
                para3.textContent = `You Won the Game.`;
                para4.textContent = `Click the RESTART button to play again.`

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
            else {
                para1.textContent = `Game Over!`;
                para2.textContent = `Computer score is ${computerScore} and you scored ${humanScore}.`;
                para3.textContent = `You Lost the Game.`;
                para4.textContent = `Better luck next time! Click the RESTART button to play again.`;

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
        }
        else if (gameScore < maxPoints) {
            para1.textContent = `You chose ${humanChoice}.`;
            para2.textContent = `Computer chose ${computerChoice}`;
            para3.textContent = `You Lose. ${computerChoice} beats ${humanChoice}`;
            para4.textContent = `Now your score is ${humanScore} and computer score is ${computerScore}`;

            resultDiv.append(para1);
            resultDiv.append(para2);
            resultDiv.append(para3);
            resultDiv.append(para4);
            return;
        }

    }
    else if (computerChoice === `PAPER` && humanChoice === `SCISSOR`) {
        humanScore++;

        gameScore = Math.max(humanScore, computerScore);
        console.log(`${maxPoints + " and " + gameScore}`)

        if (gameScore === (maxPoints) || gameScore > (maxPoints)) {
            if (humanScore === maxPoints || humanScore > maxPoints) {
                para1.textContent = `Game Over!`;
                para2.textContent = `Your score is ${humanScore} and computer scored only ${computerScore}.`;
                para3.textContent = `You Won the Game.`;
                para4.textContent = `Click the RESTART button to play again.`

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
            else {
                para1.textContent = `Game Over!`;
                para2.textContent = `Computer score is ${computerScore} and you scored ${humanScore}.`;
                para3.textContent = `You Lost the Game.`;
                para4.textContent = `Better luck next time! Click the RESTART button to play again.`;

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
        }
        else if (gameScore < maxPoints) {
            para1.textContent = `You chose ${humanChoice}.`;
            para2.textContent = `Computer chose ${computerChoice}`;
            para3.textContent = `Congrats! You win. ${humanChoice} beats ${computerChoice}`;
            para4.textContent = `Now your score is ${humanScore} and computer score is ${computerScore}`;

            resultDiv.append(para1);
            resultDiv.append(para2);
            resultDiv.append(para3);
            resultDiv.append(para4);
            return;
        }

    }
    else if (computerChoice === `SCISSOR` && humanChoice === `ROCK`) {
        humanScore++;

        gameScore = Math.max(humanScore, computerScore);
        console.log(`${maxPoints + " and " + gameScore}`)

        if (gameScore === (maxPoints) || gameScore > (maxPoints)) {
            if (humanScore === maxPoints || humanScore > maxPoints) {
                para1.textContent = `Game Over!`;
                para2.textContent = `Your score is ${humanScore} and computer scored only ${computerScore}.`;
                para3.textContent = `You Won the Game.`;
                para4.textContent = `Click the RESTART button to play again.`

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
            else {
                para1.textContent = `Game Over!`;
                para2.textContent = `Computer score is ${computerScore} and you scored ${humanScore}.`;
                para3.textContent = `You Lost the Game.`;
                para4.textContent = `Better luck next time! Click the RESTART button to play again.`;

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
        }
        else if (gameScore < maxPoints) {
            para1.textContent = `You chose ${humanChoice}.`;
            para2.textContent = `Computer chose ${computerChoice}`;
            para3.textContent = `Congrats! You win. ${humanChoice} beats ${computerChoice}`;
            para4.textContent = `Now your score is ${humanScore} and computer score is ${computerScore}`;

            resultDiv.append(para1);
            resultDiv.append(para2);
            resultDiv.append(para3);
            resultDiv.append(para4);
            return;
        }

    }
    else if (computerChoice === `SCISSOR` && humanChoice === `PAPER`) {
        computerScore++;

        gameScore = Math.max(humanScore, computerScore);
        console.log(`${maxPoints + " and " + gameScore}`)

        if (gameScore === (maxPoints) || gameScore > (maxPoints)) {
            if (humanScore === maxPoints || humanScore > maxPoints) {
                para1.textContent = `Game Over!`;
                para2.textContent = `Your score is ${humanScore} and computer scored only ${computerScore}.`;
                para3.textContent = `You Won the Game.`;
                para4.textContent = `Click the RESTART button to play again.`

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
            else {
                para1.textContent = `Game Over!`;
                para2.textContent = `Computer score is ${computerScore} and you scored ${humanScore}.`;
                para3.textContent = `You Lost the Game.`;
                para4.textContent = `Better luck next time! Click the RESTART button to play again.`;

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
        } else if (gameScore < maxPoints) {
            para1.textContent = `You chose ${humanChoice}.`;
            para2.textContent = `Computer chose ${computerChoice}`;
            para3.textContent = `You Lose. ${computerChoice} beats ${humanChoice}`;
            para4.textContent = `Now your score is ${humanScore} and computer score is ${computerScore}`;

            resultDiv.append(para1);
            resultDiv.append(para2);
            resultDiv.append(para3);
            resultDiv.append(para4);
            return;
        }
    }

};

function addHistory() {
    const historySection = document.querySelector(".history-chart");
    historyPara.remove();

    let hpara1 = document.createElement("p");
    let hpara2 = document.createElement("p");
    let hpara3 = document.createElement("p");
    let hpara4 = document.createElement("p");
    let hpara5 = document.createElement("p");
    let divPara = document.createElement("div");

    hpara1.classList.add("hpara1");
    hpara2.classList.add("hpara2");
    hpara3.classList.add("hpara3");
    hpara4.classList.add("hpara4");
    hpara5.classList.add("hpara5");
    divPara.classList.add("history-div2")

    // if(gameScore == maxPoints){
    //     hpara1.textContent = `$Round: ${totalRound}`;
    // }

    if (computerSelection === humanSelection) {
        hpara1.textContent = `$Round: ${totalRound}`;
        hpara2.textContent = `Your ${humanSelection} ⚔️ Computer's ${computerSelection}`;
        hpara5.textContent = `It's DRAW
        `;
        historySection.prepend(divPara)
        divPara.prepend(hpara5);
        divPara.prepend(hpara2);
        divPara.prepend(hpara1);
    }
    else if (computerSelection === "ROCK" && humanSelection === "SCISSOR" ||
        computerSelection === "PAPER" && humanSelection === "ROCK" ||
        computerSelection === "SCISSOR" && humanSelection === "PAPER") {

        hpara1.textContent = `$Round: ${totalRound}`;
        hpara2.textContent = `Your ${humanSelection} ⚔️ Computer's ${computerSelection}`;
        hpara3.textContent = `You LOSE
        `;

        historySection.prepend(divPara);
        divPara.prepend(hpara3);
        divPara.prepend(hpara2);
        divPara.prepend(hpara1);
    }
    else if (computerSelection === "ROCK" && humanSelection === "PAPER" ||
        computerSelection === "PAPER" && humanSelection === "SCISSOR" ||
        computerSelection === "SCISSOR" && humanSelection === "ROCK") {

        hpara1.textContent = `$Round: ${totalRound}`;
        hpara2.textContent = `Your ${humanSelection} ⚔️ Computer's ${computerSelection}`;
        hpara4.textContent = `You WON
        `;

        historySection.prepend(divPara);
        divPara.prepend(hpara4);
        divPara.prepend(hpara2);
        divPara.prepend(hpara1);
    }
}

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
    gameStarted = true;
    selectionSection.remove();
    changeName.remove();
    currentRound.appendChild(restartButton);
    currentRound.appendChild(resultDiv);
    resultDiv.appendChild(newPara);
    let temp = tempPoints.value;
    para1.remove();
    para2.remove();
    para3.remove();
    para4.remove();

    if (temp == "infinity") { return maxPoints = Infinity; }
    else { maxPoints = parseInt(temp); }
});

restartButton.addEventListener("click", () => {
    gameStarted = false;
    humanScore = 0;
    computerScore = 0;
    totalRound = 0;
    gameScore = Math.max(humanScore, computerScore);
    removeWhenRestart();
    changeScoreCard();

    const historySection = document.querySelector(".history-chart");
    historySection.append(historyPara);
    restartButton.remove();
    resultDiv.remove();
    currentRound.appendChild(selectionSection);
    const playerLogo = document.querySelector(".player-logo");
    playerLogo.insertAdjacentElement("afterend", changeName);
})


// - [ ]  show text in selection section “ click on images below or press R for rock,, P for paper, or S for scissor, to throw your choice”
// - [ ]  create funtion for action based on image clicks

const playerChoice = document.querySelector(".choice-section-p");


playerChoice.addEventListener("click", (event) => {
    if (gameStarted === false) {
        return;
    }
    else {
        changeScoreCard();
        let target = event.target;
        gameScore = Math.max(humanScore, computerScore);

        if (gameScore === (maxPoints) || gameScore > (maxPoints)) {
            if (humanScore === maxPoints || humanScore > maxPoints) {
                para1.textContent = `Game Over!`;
                para2.textContent = `Your score is ${humanScore} and computer scored only ${computerScore}.`;
                para3.textContent = ` Congrats! You Won the Game.`;
                para4.textContent = `Click the RESTART button to play again.`

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
            else {
                para1.textContent = `Game Over!`;
                para2.textContent = `Computer score is ${computerScore} and you scored ${humanScore}.`;
                para3.textContent = `You Lost the Game.`;
                para4.textContent = `Better luck next time! Click the RESTART button to play again.`;

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
        }
        else {
            totalRound++;
            playGame();
        }
    }
});

document.addEventListener("keypress", (event) => {

    if (gameStarted === false) {
        return;
    }
    else {
        changeScoreCard();
        gameScore = Math.max(humanScore, computerScore);

        if (gameScore === (maxPoints) || gameScore > (maxPoints)) {
            if (humanScore === maxPoints || humanScore > maxPoints) {
                para1.textContent = `Game Over!`;
                para2.textContent = `Your score is ${humanScore} and computer scored only ${computerScore}.`;
                para3.textContent = `Congrats! You Won the Game.`;
                para4.textContent = `Click the RESTART button to play again.`

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
            else {
                para1.textContent = `Game Over!`;
                para2.textContent = `Computer score is ${computerScore} and you scored ${humanScore}.`;
                para3.textContent = `You Lost the Game.`;
                para4.textContent = `Better luck next time! Click the RESTART button to play again.`;

                resultDiv.append(para1);
                resultDiv.append(para2);
                resultDiv.append(para3);
                resultDiv.append(para4);
                return;
            }
        }
        else {
            totalRound++;
            playGameByKey();
        }
    }
});

//additional functions

function addOverLayerP() {
    const rockPlayerChoice = document.querySelector("#one");
    const paperPlayerChoice = document.querySelector("#two");
    const scissorPlayerChoice = document.querySelector("#three");

    const rockPlayerChoiceC = document.querySelector("#div-one");
    const paperPlayerChoiceC = document.querySelector("#div-two");
    const scissorPlayerChoiceC = document.querySelector("#div-three");

    if (event.type == "click") {
        let target = event.target;

        switch (target.id) {
            case "one": {
                rockPlayerChoice.classList.add("overlay-c");
                paperPlayerChoice.classList.remove("overlay-c");
                scissorPlayerChoice.classList.remove("overlay-c");
            }

                break;
            case "two": {
                rockPlayerChoice.classList.remove("overlay-c");
                paperPlayerChoice.classList.add("overlay-c");
                scissorPlayerChoice.classList.remove("overlay-c");
            }
                break
            case "three": {
                rockPlayerChoice.classList.remove("overlay-c");
                paperPlayerChoice.classList.remove("overlay-c");
                scissorPlayerChoice.classList.add("overlay-c");
            }
        };

        switch (computerSelection) {
            case "ROCK": {
                rockPlayerChoiceC.classList.add("overlay-c");
                paperPlayerChoiceC.classList.remove("overlay-c");
                scissorPlayerChoiceC.classList.remove("overlay-c");
            }

                break;
            case "PAPER": {
                rockPlayerChoiceC.classList.remove("overlay-c");
                paperPlayerChoiceC.classList.add("overlay-c");
                scissorPlayerChoiceC.classList.remove("overlay-c");
            }
                break
            case "SCISSOR": {
                rockPlayerChoiceC.classList.remove("overlay-c");
                paperPlayerChoiceC.classList.remove("overlay-c");
                scissorPlayerChoiceC.classList.add("overlay-c");
            }
        };
    }
    else if (event.type == "keypress") {
        let keyPressed = event.code;

        switch (keyPressed) {
            case "KeyR": {
                rockPlayerChoice.classList.add("overlay-c");
                paperPlayerChoice.classList.remove("overlay-c");
                scissorPlayerChoice.classList.remove("overlay-c");
            }

                break;
            case "KeyP": {
                rockPlayerChoice.classList.remove("overlay-c");
                paperPlayerChoice.classList.add("overlay-c");
                scissorPlayerChoice.classList.remove("overlay-c");
            }
                break
            case "KeyS": {
                rockPlayerChoice.classList.remove("overlay-c");
                paperPlayerChoice.classList.remove("overlay-c");
                scissorPlayerChoice.classList.add("overlay-c");
            }
        };

        switch (computerSelection) {
            case "ROCK": {
                rockPlayerChoiceC.classList.add("overlay-c");
                paperPlayerChoiceC.classList.remove("overlay-c");
                scissorPlayerChoiceC.classList.remove("overlay-c");
            }

                break;
            case "PAPER": {
                rockPlayerChoiceC.classList.remove("overlay-c");
                paperPlayerChoiceC.classList.add("overlay-c");
                scissorPlayerChoiceC.classList.remove("overlay-c");
            }
                break;
            case "SCISSOR": {
                rockPlayerChoiceC.classList.remove("overlay-c");
                paperPlayerChoiceC.classList.remove("overlay-c");
                scissorPlayerChoiceC.classList.add("overlay-c");
            }
        };
    }
};

function removeWhenRestart() {
    const rockPlayerChoice = document.querySelector("#one");
    const paperPlayerChoice = document.querySelector("#two");
    const scissorPlayerChoice = document.querySelector("#three");

    const rockPlayerChoiceC = document.querySelector("#div-one");
    const paperPlayerChoiceC = document.querySelector("#div-two");
    const scissorPlayerChoiceC = document.querySelector("#div-three");

    rockPlayerChoice.classList.remove("overlay-c");
    paperPlayerChoice.classList.remove("overlay-c");
    scissorPlayerChoice.classList.remove("overlay-c");

    rockPlayerChoiceC.classList.remove("overlay-c");
    paperPlayerChoiceC.classList.remove("overlay-c");
    scissorPlayerChoiceC.classList.remove("overlay-c");

    const historySection = document.querySelector(".history-chart");
    historySection.innerHTML = ``;

};

function changeScoreCard() {
    const scoreP = document.querySelector(".actual-score-p");
    const scoreC = document.querySelector(".actual-score-c");

    const divPlayerScore = document.querySelector(".player-score");
    const divComputerScore = document.querySelector(".computer-score");

    scoreC.textContent = computerScore;
    scoreP.textContent = humanScore;

    scoreC.remove();
    scoreP.remove();

    divComputerScore.appendChild(scoreC);
    divPlayerScore.appendChild(scoreP);

};

//add results for each round in history section--

