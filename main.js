var choice;
document.getElementById("paper").onclick = function () {
  choose("paper");
};
document.getElementById("scissors").onclick = function () {
  choose("scissors");
};
document.getElementById("rock").onclick = function () {
  choose("rock");
};

function choose(choice) {
  this.choice = choice;
  console.log("u choose: " + choice);
}

var comp_choice;
var choices = ["rock", "paper", "scissors"];
var random = Math.floor(Math.random() * 3);

console.log("comp chose ...");
console.log(choices[random]);
