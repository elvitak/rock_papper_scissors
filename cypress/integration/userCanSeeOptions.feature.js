/* eslint-disable no-undef */
describe("User visits website and", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to be able to choose rock", () => {
    cy.get("[data-cy=rock_btn]").click();
    cy.get("[data-cy=user_choice]").should("contain", "Your choice is: Rock");
  });

  it("is expected to be able to choose paper", () => {
    cy.get("[data-cy=paper_btn]").click();
    cy.get("[data-cy=user_choice]").should("contain", "Your choice is: Paper");
  });

  it("is expected to be able to choose scissors", () => {
    cy.get("[data-cy=scissors]").click();
    cy.get("[data-cy=user_choice]").should(
      "contain",
      "Your choice is: Scissors"
    );
  });
});
