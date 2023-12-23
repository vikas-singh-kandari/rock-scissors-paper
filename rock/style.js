let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"]; // Fix the typo here
  const randInx = Math.floor(Math.random() * 3);
  return options[randInx];
};

const drowgame = () => {
  msg.innerText = "GAME DRAW";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userChoice, compchoice) => {
  if (userwin) {
    userScore++;
    userScorepara.innerText = userScore;

    msg.innerText = `YOU WIN! YOUR ${userChoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;

    msg.innerText = `YOU LOSE! ${compchoice} beats YOUR ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compchoice = genCompChoice();

  if (userChoice === compchoice) {
    drowgame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice); // Pass userChoice as a parameter
  });
});
