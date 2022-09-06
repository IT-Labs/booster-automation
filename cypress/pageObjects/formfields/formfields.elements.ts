/// <reference types="cypress" />
export class FormFieldsPageElements {
    static get elementsFormFields(){
        return {
            getTxtInputField: () =>  cy.get('#g1103-inputfield'),
            getChkOption: () =>  cy.get('[value="Option 1"]'),
            getRdoColor: () => cy.get('[value="Blue"]').first(),
            getDdlNumber: () => cy.get('#g1103-dropdownmenu'),
            getTxtEmail: () => cy.get('#email'),
            getRtfInputBox: () => cy.get('#contact-form-comment-message'),
            getBtnSubmit: () =>  cy.get('.entry-content > #contact-form-1103 > .contact-form > .contact-submit > .pushbutton-wide')
        }
    }
    static get elementsVerifyFormFields(){
        return{
            getLblConfirmMessage: () =>  cy.get('#contact-form-1103 h3')
        }
    
    }
}