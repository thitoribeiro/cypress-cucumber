import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

let stub;

Before(() => {
    cy.log("Executing before step");
})

Given("I access the web login portal Page", () => {
    cy.visit("https://webdriveruniversity.com/Login-Portal/index.html");
})

When("I enter a username {word}", (userName) => {
    cy.get("#text").type(userName);
})

And("I enter a password {word}", (userName) => {
    cy.get("#password").type(userName);
})

And("I click on the login button", () => {
    cy.get("#login-button").click()
})

Then("I should be presented with the following message {word} {word}", (message1, message2) => {
    
})

