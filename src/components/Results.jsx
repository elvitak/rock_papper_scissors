import React from "react";
import { Header } from "semantic-ui-react";

const Results = ({ result }) => {
  return (
    <Header as="h1" color="teal" data-cy="results">
      {result}
    </Header>
  );
};

export default Results;
