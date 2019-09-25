import { Action } from "redux";

export declare type ToggleMenuSidebarActionType = Action<string> & {
  isMenuSidebarOpen: boolean; 
}

export const ToggleMenuSidebarActionTypeName = "TOGGLE_MENU_SIDEBAR";
