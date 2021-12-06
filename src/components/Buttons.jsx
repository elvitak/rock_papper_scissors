import React from "react";
import { Button, Icon } from "semantic-ui-react";

const Buttons = ({ handleClick }) => {
  return (
    <>
      <Button
        animated="vertical"
        size="massive"
        data-cy="rock_btn"
        onClick={() => handleClick("Rock")}
      >
        <Button.Content visible>Rock</Button.Content>
        <Button.Content hidden>
          <Icon name="hand rock outline" />
        </Button.Content>
      </Button>
      <Button
        animated="vertical"
        size="massive"
        data-cy="paper_btn"
        onClick={() => handleClick("Paper")}
      >
        <Button.Content visible>Paper</Button.Content>
        <Button.Content hidden>
          <Icon name="hand paper outline" />
        </Button.Content>
      </Button>
      <Button
        animated="vertical"
        size="massive"
        data-cy="scissors_btn"
        onClick={() => handleClick("Scissors")}
      >
        <Button.Content visible>Scissors</Button.Content>
        <Button.Content hidden>
          <Icon name="hand scissors outline" />
        </Button.Content>
      </Button>
    </>
  );
};

export default Buttons;
