/* eslint-disable no-undef */
import React, { useState } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputersChoice();
  };

  const generateComputersChoice = () => {
    const options = ["Rock", "Paper", "Paper"];
    setComputerChoice(options[Math.floor(Math.random * 3)]);
  };

  return (
    <>
      <h1 data-cy="user_choice">Your choice is: {userChoice}</h1>
      <h1 data-cy="computerChoice">
        Your Imaginary Friend chose: {computerChoice}
      </h1>
      <button data-cy="rock_btn" onClick={() => handleClick("Rock")}>
        Rock
      </button>
      <button data-cy="paper_btn" onClick={() => handleClick("Paper")}>
        Paper
      </button>
      <button data-cy="scissors_btn" onClick={() => handleClick("Scissors")}>
        Scissors
      </button>
    </>
  );
};

export default App;
