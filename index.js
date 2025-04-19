const randomNumber = Math.floor(Math.random() * 3) + 1;
function getComputerChoice (randomNumber) {
    if (randomNumber === 1) return "rock";
    if (randomNumber === 2) return "paper";
    if (randomNumber === 3) return "scissors";
}
function getHumanChoice () {
const input = document.getElementById("input");
const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    const value = input.value;
    console.log(value);
});
}