const winnerLoser = document.getElementById("winner-loser");
let humanTrack = document.getElementById("human-score");
let computerTrack = document.getElementById("computer-score");

const input = document.getElementById("input");
const inputComputer = document.getElementById("input-computer");
const submit = document.getElementById("submit");



submit.addEventListener("click", () => {
const randomNumber = Math.floor(Math.random() * 3) + 1;
function getComputerChoice (randomNumber) {
    if (randomNumber === 1) return "rock";
    if (randomNumber === 2) return "paper";
    if (randomNumber === 3) return "scissors";
}
const computerChoice= getComputerChoice(randomNumber);
inputComputer.value = computerChoice;
// human choice↓
    const getHumanChoice = input.value.toLowerCase();

function humanScore() {  
    // To ensure these variables are updated with new value; we place them
    // inside this function
    let humanScoreValue = Number(humanTrack.textContent);
    let computerScoreValue = Number(computerTrack.textContent);  

    if (getHumanChoice === "rock" && computerChoice === "scissors"){
        winnerLoser.textContent = "You win - Human";
        humanScoreValue += 1;
        humanTrack.textContent = humanScoreValue;
    } else if (getHumanChoice === "paper" && computerChoice === "rock"){
        winnerLoser.textContent = "You win - Human";
        humanScoreValue += 1;
        humanTrack.textContent = humanScoreValue;   
    } else if (getHumanChoice === "scissors" && computerChoice === "paper"){
        winnerLoser.textContent = "You win - Human";
        humanScoreValue += 1;
        humanTrack.textContent = humanScoreValue;
    } else if ((computerChoice === "rock" && getHumanChoice === "scissors") ||
    (computerChoice === "paper" && getHumanChoice === "rock") ||
    (computerChoice === "scissors" && getHumanChoice === "paper")) {
        winnerLoser.textContent = "You lose - Human";
        computerScoreValue += 1;
        computerTrack.textContent = computerScoreValue;
    } else if(getHumanChoice === computerChoice){
        input.value = "Tie, try again"        
    }
    else{
       input.value = 'Only use "rock", "paper" or "scissors"'; 
    }
    gameWinner();
}

function gameWinner () {
    const humanScoreValue = Number(humanTrack.textContent);
    const computerScoreValue = Number(computerTrack.textContent);
    if (humanScoreValue === 5 ) {
        alert("You are the winner!");
        computerTrack.textContent = 0;
        humanTrack.textContent = 0;
        // reset the DOM above and reset the variables below
        humanScoreValue = 0;
        computerScoreValue = 0;

    } else if (computerScoreValue === 5 ) {
        alert("You Lose!");
        computerTrack.textContent = 0;
        humanTrack.textContent = 0;
        humanScoreValue = 0;
        computerScoreValue = 0;
    }
}

console.log(gameWinner());
console.log(humanScore());
});

// function reset() {
//     if (humanScoreValue === 5 || computerScoreValue === 5){
//         humanTrack.textContent = 0;
//         computerTrack.textContent = 0;
//     }
// }

// console.log(reset());
