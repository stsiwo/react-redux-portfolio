import { ReducersMapObject } from "redux";
import { injectable, multiInject } from "inversify";
import "reflect-metadata";
import { IAppStateCaseReducer } from "./IAppStateCaseReducer";
import { IsMenuSidebarOpenStateType } from "../../../../../../States/StateType";
import { ToggleMenuSidebarActionType, ToggleMenuSidebarActionTypeName } from "../../../../../../Actions/AppStateActions/ToggleMenuSidebarActionType";

@injectable()
export class ToggleMenuSidebarCaseReducer implements IAppStateCaseReducer<IsMenuSidebarOpenStateType, ToggleMenuSidebarActionType> {

  private _actionTypeList: string[] = [
    ToggleMenuSidebarActionTypeName,
  ];

  getReducer(): ReducersMapObject<IsMenuSidebarOpenStateType, ToggleMenuSidebarActionType> {
    return {
      isMenuSidebarOpen: (isMenuSidebarOpen: boolean, action: ToggleMenuSidebarActionType): boolean => {
        if (this._actionTypeList.includes(action.type)) {
          return !isMenuSidebarOpen;
        } else {
          return isMenuSidebarOpen;
        }
      }
    }
  }
}
