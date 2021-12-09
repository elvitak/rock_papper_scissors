import React from "react";

const HistoryOfChoices = ({ rounds }) => {
  const choiceHistory = [];

  for (let i = 0; i < rounds.length; i++) {
    const round = rounds[i];
    choiceHistory.push(`${round.user} vs ${round.computer} `);
  }

  return <div data-cy="choice_history">{choiceHistory}</div>;
};

export default HistoryOfChoices;
