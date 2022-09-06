/// <reference types="cypress" />

import { AutomateNowPageElements } from "./automateNow.elements";

export class AutomateNowMethods{
    clickFormFields() {
      AutomateNowPageElements.elementsAutomateNow.getBtnFormFields().click({force:true});
    }
}
export default AutomateNowMethods;