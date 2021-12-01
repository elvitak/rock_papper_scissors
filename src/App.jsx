import React, { useState } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState();

  const handleOnClick = (value) => {
    setUserChoice(value);
  };

  return (
    <>
      <h1 data-cy="user_choice">Your choice is: {userChoice}</h1>
      <button data-cy="rock_btn" onClick={() => handleOnClick("Rock")}>
        Rock
      </button>
      <button data-cy="paper_btn" onClick={() => handleOnClick("Paper")}>
        Paper
      </button>
      <button data-cy="scissors_btn" onClick={() => handleOnClick("Scissors")}>
        Scissors
      </button>
    </>
  );
};

export default App;
