/* eslint-disable no-undef */
describe("User", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "floor").returns(0);
      },
    });
  });

  it("is expected to see his/her choice history and oponents history of choices", () => {
    cy.get("[data-cy=paper_btn]").click();
    cy.get("[data-cy=user_choice]").should("contain", "Your choice is: Paper");
    cy.get("[data-cy=computerChoice]").should(
      "contain",
      "Your Imaginary Friend chose: Rock"
    );
    cy.get("[data-cy=choice_history]").should("contain", "Paper vs Rock");
    cy.get("[data-cy=scissors_btn]").click();
    cy.get("[data-cy=user_choice]").should(
      "contain",
      "Your choice is: Scissors"
    );
    cy.get("[data-cy=computerChoice]").should(
      "contain",
      "Your Imaginary Friend chose: Rock"
    );
    cy.get("[data-cy=choice_history]").should(
      "contain",
      "Paper vs Rock, Scissors vs Rock"
    );
  });
});
