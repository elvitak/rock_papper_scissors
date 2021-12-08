import React from "react";
import { Header, Segment, Grid, Divider } from "semantic-ui-react";
import { findOutWhoIsTheWinner } from "../modules/gameLogic";

const DisplayScoresAndChoices = ({ rounds }) => {
  let userChoice;
  let computerChoice;
  let userScore = 0;
  let computerScore = 0;

  if (rounds.length !== 0) {
    const lastRound = rounds[rounds.length - 1];

    userChoice = lastRound.user;
    computerChoice = lastRound.computer;

    for (let i = 0; i < rounds.length; i++) {
      const round = rounds[i];
      const winner = findOutWhoIsTheWinner(round.user, round.computer);

      if (winner === "USER") {
        userScore += 1;
      } else if (winner === "COMPUTER") {
        computerScore += 1;
      }
    }
  }

  return (
    <Segment>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <Header data-cy="user_score">You score: {userScore}</Header>
          <Header data-cy="user_choice">Your choice is: {userChoice}</Header>
        </Grid.Column>
        <Grid.Column>
          <Header data-cy="computer_score">
            Your Imaginary Friend's score: {computerScore}
          </Header>
          <Header data-cy="computerChoice">
            Your Imaginary Friend chose: {computerChoice}
          </Header>
        </Grid.Column>
      </Grid>
      <Divider vertical>VS</Divider>
    </Segment>
  );
};

export default DisplayScoresAndChoices;
