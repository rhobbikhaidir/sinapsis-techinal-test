/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("Login Kur", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000");
  });

  it("displays two todo items by default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get("#username").type("jasingan jaya jaya jaya");
    cy.get("#token").type(
      "501cfe77403484ec9e822599a05cb068993fa482daa540c9c03f2428254942a2"
    );
    cy.get("#btn-login").click();
    cy.wait(10000);

    cy.get("#add-new").click();
    cy.get("#title").type("ini data baru title");
    cy.get("#body").type("ini data baru body");
    cy.get("#save").click();
    cy.get("#detail").click();
    cy.wait(5000);
    cy.get("#home").click();
    cy.get("#edit").click();
    cy.wait(5000);
    cy.get("#title").clear().type("title di ubah");
    cy.get("#body").type("body di ubah");
    cy.get("#save").click();
    cy.wait(5000);
    cy.get("#delete").click();
    cy.wait(3000);
    cy.get(".swal2-confirm ").click();
    cy.get("#logout ").click();
    cy.wait(3000);
    cy.get(".swal2-confirm ").click();
  });
});
