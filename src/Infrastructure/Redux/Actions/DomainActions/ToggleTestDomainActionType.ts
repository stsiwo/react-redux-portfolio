import { Action } from "redux";

export declare type ToggleTestDomainActionType = Action<string> & {
  isTestDomainOpen: boolean; 
}

export const ToggleTestDomainActionTypeName = "TOGGLE_TEST_DOMAIN";
