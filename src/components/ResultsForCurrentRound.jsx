import React from "react";
import { Header } from "semantic-ui-react";

const ResultsForCurrentRound = ({ result }) => {
  return (
    <Header as="h1" color="teal" data-cy="results">
      {result}
    </Header>
  );
};

export default ResultsForCurrentRound;
