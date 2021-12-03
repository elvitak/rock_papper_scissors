/* eslint-disable no-undef */
describe("User", () => {
  before(() => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "floor").returns(0);
      },
    });
  });

  it("is expected to see computers choice Rock", () => {
    cy.get("[data-cy=paper_btn]").click();
    cy.get("[data-cy=computerChoice]").should(
      "contain",
      "Your Imaginary Friend chose: Rock"
    );
  });
});
