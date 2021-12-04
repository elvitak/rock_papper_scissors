/* eslint-disable no-undef */
describe("User", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "floor").returns(0);
      },
    });
  });

  it("is expected to win when chooses paper and computer chooses rock", () => {
    cy.get("[data-cy=paper_btn]").click();
    cy.get("[data-cy=user_choice]").should("contain", "Your choice is: Paper");
    cy.get("[data-cy=computerChoice]").should(
      "contain",
      "Your Imaginary Friend chose: Rock"
    );
    cy.get("[data-cy=results]").should("contain", "Congratulations! You won!");
  });

  it("is expected to lose when chooses scissors and computer chooses rock", () => {
    cy.get("[data-cy=scissors_btn]").click();
    cy.get("[data-cy=user_choice]").should(
      "contain",
      "Your choice is: Scissors"
    );
    cy.get("[data-cy=computerChoice]").should(
      "contain",
      "Your Imaginary Friend chose: Rock"
    );
    cy.get("[data-cy=results]").should("contain", "You lost");
  });

  it("is expected to see result as a draw when chooses rock and computer chooses rock", () => {
    cy.get("[data-cy=rock_btn]").click();
    cy.get("[data-cy=user_choice]").should("contain", "Your choice is: Rock");
    cy.get("[data-cy=computerChoice]").should(
      "contain",
      "Your Imaginary Friend chose: Rock"
    );
    cy.get("[data-cy=results]").should("contain", "It's a draw");
  });
});
