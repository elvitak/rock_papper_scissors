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

export { findOutWhoIsTheWinner };
