/// <reference types="cypress" />
export class AutomateNowPageElements {
    static get elementsAutomateNow(){
        return {
            getBtnFormFields: () =>  cy.get('[href="https://automatenow.io/form-fields/"]')
        }
    }
}