/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Choices from "./components/Choices";
import Scores from "./components/Scores";
import Results from "./components/Results";
import Buttons from "./components/Buttons";

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
      <Scores userScore={userScore} computerScore={computerScore} />
      <Choices userChoice={userChoice} computerChoice={computerChoice} />
      <Results result={result} />
      <Buttons handleClick={handleClick} />
    </>
  );
};

export default App;
