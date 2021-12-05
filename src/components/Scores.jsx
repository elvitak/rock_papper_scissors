import React from "react";

const DisplayScores = ({ userScore, computerScore }) => {
  return (
    <div>
      <h1 data-cy="user_score">{userScore}</h1>
      <h1 data-cy="computer_score">{computerScore}</h1>
    </div>
  );
};

export default DisplayScores;
