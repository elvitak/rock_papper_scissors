const findOutWhoIsTheWinner = (userChoice, computerChoice) => {
  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock")
  ) {
    return "USER";
  } else if (
    (userChoice === "Paper" && computerChoice === "Scissors") ||
    (userChoice === "Rock" && computerChoice === "Paper") ||
    (userChoice === "Scissors" && computerChoice === "Rock")
  ) {
    return "COMPUTER";
  } else {
    return "DRAW";
  }
};

const generateComputersChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
};

export { generateComputersChoice };
export { findOutWhoIsTheWinner };
