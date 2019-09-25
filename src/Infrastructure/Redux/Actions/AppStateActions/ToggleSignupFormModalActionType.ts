import { Action } from "redux";

export declare type ToggleSignupFormModalActionType = Action<string> & {
  isSignupFormModalOpen: boolean; 
}

export const ToggleSignupFormModalActionTypeName = "TOGGLE_SIGNUP_FORM_MODAL";
