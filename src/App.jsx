/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import ScoresAndChoices from "./components/ScoresAndChoices";
import Results from "./components/Results";
import Buttons from "./components/Buttons";
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

  useEffect(() => {
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
  }, [userChoice, computerChoice]);

  const handleClick = (value) => {
    setUserChoice(value);
    setComputerChoice(generateComputersChoice());
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
