/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState } from "react";
import DisplayScoresAndChoices from "./components/DisplayScoresAndChoices";
import ResultsForCurrentRound from "./components/ResultsForCurrentRound";
import UserChoices from "./components/UserChoices";
import "semantic-ui-css/semantic.min.css";
import { Segment } from "semantic-ui-react";
import {
  generateComputersChoice,
  findOutWhoIsTheWinner,
} from "./modules/gameLogic";

const App = () => {
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [result, setResult] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handleClick = (userChoice) => {
    setUserChoice(userChoice);
    const computerChoice = generateComputersChoice();
    setComputerChoice(computerChoice);
    const winner = findOutWhoIsTheWinner(userChoice, computerChoice);
    if (winner === "USER") {
      setResult("Congratulations! You won!");
      setUserScore(userScore + 1);
    } else if (winner === "COMPUTER") {
      setResult("You lost");
      setComputerScore(computerScore + 1);
    } else {
      setResult("It's a draw");
    }
  };

  return (
    <Segment textAlign="center">
      <DisplayScoresAndChoices
        userScore={userScore}
        computerScore={computerScore}
        userChoice={userChoice}
        computerChoice={computerChoice}
      />
      <ResultsForCurrentRound result={result} />
      <UserChoices handleClick={handleClick} />
    </Segment>
  );
};

export default App;
