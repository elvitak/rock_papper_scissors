import React, { useState } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState();

  const handleClick = (value) => {
    setUserChoice(value);
  };

  return (
    <>
      <h1 data-cy="user_choice">Your choice is: {userChoice}</h1>
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
