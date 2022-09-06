/// <reference types="cypress" />

import AutomateNowMethods from "../../pageObjects/automateNow/automateNom.methods";
import FormFieldsMethods from "../../pageObjects/formfields/formfields.methods";
var formfields = new FormFieldsMethods();
var automatenow = new AutomateNowMethods();
const testData = require('../../fixtures/formfieldsdata.json');
var message = 'Message Sent';
describe('WikiTest sample', () => {



  it('Goes to Wikipedia', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.

    cy.visit('https://en.wikipedia.org/')
    cy.title().should('eq', 'Wikipedia, the free encyclopedia');

    cy.visit(Cypress.env('login_url'))
    cy.get('#searchInput').type(`Cypress{enter}`)
    cy.title().should('contain', 'Cypress');

    cy.visit('https://en.wikipedia.org/wiki/Cypress')
    cy.get('img', { includeShadowDom: true })
      .filter('[src]')
      //.filter('visible')
      //.should(($imgs) => $imgs.map((img) => expect(img.originalHeight).to.be.greatherThan(0)));
 })
})


it('Find Searchbox and enter Cypress', () => {
  // We use the `cy.get()` command to get all elements that match the selector.
  // Then, we use `should` to assert that there are two matched items,
  // which are the two default items.

  cy.visit(Cypress.config().baseUrl);
  cy.get('#searchInput').type(`Cypress{enter}`)
  cy.title().should('contain', 'Cypress');

})

it('Submit Form Fields without POM', () => {
  cy.visit(Cypress.config().baseUrl);
  cy.get('[href="https://automatenow.io/form-fields/"]').click({force:true});
  cy.get('#g1103-inputfield').type('Input field text', {force:true});
  cy.get('[value="Option 1"]').click({force:true});
  cy.get('[value="Blue"]').first().click({force:true});
  cy.get('#g1103-dropdownmenu').select('Decimal',{force:true});
  cy.get('#email').type('example@email.com', {force:true});
  cy.get('#contact-form-comment-message').type('some textarea random text',{force:true});
  cy.get('.entry-content > #contact-form-1103 > .contact-form > .contact-submit > .pushbutton-wide').click({force:true});
  cy.get('#contact-form-1103 h3').should('contain.text', 'Message Sent');
})

testData.addFormFieldsData.forEach(testcase => {
it.only('Submit Form Fields with POM '+ `${testcase.inputname}`, () => {
  cy.visit(Cypress.config().baseUrl);
  automatenow.clickFormFields();
  formfields.submitForm(testcase.inputname, testcase.inputnumber, testcase.inputemail, testcase.inputtext);
  formfields.verifySubmited(message);
})  
});










