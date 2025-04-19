const randomNumber = Math.floor(Math.random() * 3) + 1;
function getComputerChoice (randomNumber) {
    if (randomNumber === 1) return "rock";
    if (randomNumber === 2) return "paper";
    if (randomNumber === 3) return "scissors";
}
console.log(getComputerChoice(randomNumber));