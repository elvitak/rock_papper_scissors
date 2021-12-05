import React from "react";

const DispalyChoices = ({ computerChoice, userChoice }) => {
  return (
    <div>
      <h1 data-cy="user_choice">Your choice is: {userChoice}</h1>
      <h1 data-cy="computerChoice">
        Your Imaginary Friend chose: {computerChoice}
      </h1>
    </div>
  );
};

export default DispalyChoices;
