/// <reference types="cypress" />

import { FormFieldsPageElements } from "./formfields.elements";

export class FormFieldsMethods{
    submitForm(name: string, num: string, email:string, inputbox: string) {
      FormFieldsPageElements.elementsFormFields.getTxtInputField().type(name, {force:true});
      FormFieldsPageElements.elementsFormFields.getChkOption().click({force:true});
      FormFieldsPageElements.elementsFormFields.getRdoColor().click({force:true});
      FormFieldsPageElements.elementsFormFields.getDdlNumber().select(num, {force:true});
      FormFieldsPageElements.elementsFormFields.getTxtEmail().type(email, {force:true});
      FormFieldsPageElements.elementsFormFields.getRtfInputBox().type(inputbox, {force:true});
      FormFieldsPageElements.elementsFormFields.getBtnSubmit().click({force:true});
    }
    verifySubmited(message: string){
       FormFieldsPageElements.elementsVerifyFormFields.getLblConfirmMessage().should('contain.text', message);
    }
}
export default FormFieldsMethods;