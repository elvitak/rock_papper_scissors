/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState } from "react";
import DisplayScoresAndChoices from "./components/DisplayScoresAndChoices";
import ResultsForCurrentRound from "./components/ResultsForCurrentRound";
import UserChoices from "./components/UserChoices";
import HistoryOfChoices from "./components/HistoryOfChoices";
import "semantic-ui-css/semantic.min.css";
import { Segment, Grid } from "semantic-ui-react";
import { generateComputersChoice } from "./modules/gameLogic";

const App = () => {
  const [rounds, setRounds] = useState([]);

  const handleClick = (userChoice) => {
    const computerChoice = generateComputersChoice();
    const round = { computer: computerChoice, user: userChoice };
    setRounds([...rounds, round]);
  };

  return (
    <Grid columns={2} relaxed="very">
      <Grid.Column width={13}>
        <Segment textAlign="center">
          <DisplayScoresAndChoices rounds={rounds} />
          <ResultsForCurrentRound rounds={rounds} />
          <UserChoices handleClick={handleClick} />
        </Segment>
      </Grid.Column>
      <Grid.Column width={3}>
        <HistoryOfChoices rounds={rounds} />
      </Grid.Column>
    </Grid>
  );
};

export default App;
