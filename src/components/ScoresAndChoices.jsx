import React from "react";
import { Header, Segment, Grid, Divider } from "semantic-ui-react";

const ScoresAndChoices = ({
  userScore,
  computerScore,
  userChoice,
  computerChoice,
}) => {
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
      <Divider vertical>And</Divider>
    </Segment>
  );
};

export default ScoresAndChoices;
