/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import ScoresAndChoices from "./components/ScoresAndChoices";
import Results from "./components/Results";
import Buttons from "./components/Buttons";
import "semantic-ui-css/semantic.min.css";
import { Segment } from "semantic-ui-react";

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
    if (
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Scissors" && computerChoice === "Paper") ||
      (userChoice === "Paper" && computerChoice === "Rock")
    ) {
      setResult("Congratulations! You won!");
      setUserScore(userScore + 1);
    } else if (
      (userChoice === "Paper" && computerChoice === "Scissors") ||
      (userChoice === "Rock" && computerChoice === "Paper") ||
      (userChoice === "Scissors" && computerChoice === "Rock")
    ) {
      setResult("You lost");
      setComputerScore(computerScore + 1);
    } else {
      setResult("It's a draw");
    }
  };

  return (
    <Segment textAlign="center">
      <ScoresAndChoices
        userScore={userScore}
        computerScore={computerScore}
        userChoice={userChoice}
        computerChoice={computerChoice}
      />
      <Results result={result} />
      <Buttons handleClick={handleClick} />
    </Segment>
  );
};

export default App;
