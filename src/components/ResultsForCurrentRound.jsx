/* eslint-disable no-unused-vars */
import React from "react";
import { Header } from "semantic-ui-react";
import { findOutWhoIsTheWinner } from "../modules/gameLogic";

const ResultsForCurrentRound = ({ rounds }) => {
  let result = "";

  if (rounds.length !== 0) {
    const lastRound = rounds[rounds.length - 1];
    const winner = findOutWhoIsTheWinner(lastRound.user, lastRound.computer);

    if (winner === "USER") {
      result = "Congratulations! You won!";
    } else if (winner === "COMPUTER") {
      result = "You lost";
    } else {
      result = "It's a draw";
    }
  }

  return (
    <Header as="h1" color="teal" data-cy="results">
      {result}
    </Header>
  );
};

export default ResultsForCurrentRound;
