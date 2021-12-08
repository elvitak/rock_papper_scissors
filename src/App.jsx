/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState } from "react";
import DisplayScoresAndChoices from "./components/DisplayScoresAndChoices";
import ResultsForCurrentRound from "./components/ResultsForCurrentRound";
import UserChoices from "./components/UserChoices";
import "semantic-ui-css/semantic.min.css";
import { Segment } from "semantic-ui-react";
import { generateComputersChoice } from "./modules/gameLogic";

const App = () => {
  const [rounds, setRounds] = useState([]);

  const handleClick = (userChoice) => {
    const computerChoice = generateComputersChoice();
    const round = { computer: computerChoice, user: userChoice };
    setRounds([...rounds, round]);
  };

  return (
    <Segment textAlign="center">
      <DisplayScoresAndChoices rounds={rounds} />
      <ResultsForCurrentRound rounds={rounds} />
      <UserChoices handleClick={handleClick} />
    </Segment>
  );
};

export default App;
