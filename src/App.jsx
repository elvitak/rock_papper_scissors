/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [result, setResult] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  useEffect(() => {
    findOutWhoIsTheWinner();
  }, [userChoice, computerChoice]);

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputersChoice();
  };

  const generateComputersChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    setComputerChoice(options[Math.floor(Math.random() * 3)]);
  };

  const findOutWhoIsTheWinner = () => {
    if (userChoice === "Rock" && computerChoice === "Scissors") {
      setResult("Congratulations! You won!");
      setUserScore(userScore + 1);
    } else if (userChoice === "Paper" && computerChoice === "Scissors") {
      setResult("You lost");
      setComputerScore(computerScore + 1);
    } else if (userChoice === "Scissors" && computerChoice === "Paper") {
      setResult("Congratulations! You won!");
      setUserScore(userScore + 1);
    } else if (userChoice === "Rock" && computerChoice === "Paper") {
      setResult("You lost");
      setComputerScore(computerScore + 1);
    } else if (userChoice === "Paper" && computerChoice === "Rock") {
      setResult("Congratulations! You won!");
      setUserScore(userScore + 1);
    } else if (userChoice === "Scissors" && computerChoice === "Rock") {
      setResult("You lost");
      setComputerScore(computerScore + 1);
    } else {
      setResult("It's a draw");
    }
  };

  return (
    <>
      <h1 data-cy="user_score">{userScore}</h1>
      <h1 data-cy="computer_score">{computerScore}</h1>
      <h1 data-cy="user_choice">Your choice is: {userChoice}</h1>
      <h1 data-cy="computerChoice">
        Your Imaginary Friend chose: {computerChoice}
      </h1>
      <h1 data-cy="results">{result}</h1>
      <button data-cy="rock_btn" onClick={() => handleClick("Rock")}>
        Rock
      </button>
      <button data-cy="paper_btn" onClick={() => handleClick("Paper")}>
        Paper
      </button>
      <button data-cy="scissors_btn" onClick={() => handleClick("Scissors")}>
        Scissors
      </button>
    </>
  );
};

export default App;
