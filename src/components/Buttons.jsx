import React from "react";

const Buttons = ({ handleClick }) => {
  return (
    <div>
      <button data-cy="rock_btn" onClick={() => handleClick("Rock")}>
        Rock
      </button>
      <button data-cy="paper_btn" onClick={() => handleClick("Paper")}>
        Paper
      </button>
      <button data-cy="scissors_btn" onClick={() => handleClick("Scissors")}>
        Scissors
      </button>
    </div>
  );
};

export default Buttons;
