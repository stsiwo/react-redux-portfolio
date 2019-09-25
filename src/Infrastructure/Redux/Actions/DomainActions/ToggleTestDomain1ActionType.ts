import { Action } from "redux";

export declare type ToggleTestDomain1ActionType = Action<string> & {
  isTestDomain1Open: boolean; 
}

export const ToggleTestDomain1ActionTypeName = "TOGGLE_TEST_DOMAIN1";
