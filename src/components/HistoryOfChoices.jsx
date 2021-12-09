import React from "react";

const HistoryOfChoices = ({ rounds }) => {
  const choiceHistory = [];

  for (let i = 0; i < rounds.length; i++) {
    const round = rounds[i];
    choiceHistory.push(
      <div>
        {i + 1}: {round.user} vs {round.computer}
      </div>
    );
  }

  return (
    <>
      <h5>History:</h5>
      <div data-cy="choice_history">{choiceHistory}</div>
    </>
  );
};

export default HistoryOfChoices;
