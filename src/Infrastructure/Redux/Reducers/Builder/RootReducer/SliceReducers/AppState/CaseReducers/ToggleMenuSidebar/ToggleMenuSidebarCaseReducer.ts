import { ReducersMapObject } from "redux";
import { injectable, multiInject } from "inversify";
import "reflect-metadata";
import { IAppStateCaseReducer } from "../IAppStateCaseReducer";
import { IsMenuSidebarOpenStateType } from "../../../../../../../States/StateType";
import { ToggleMenuSidebarActionType } from "../../../../../../../Actions/AppStateActions/ToggleMenuSidebar/ToggleMenuSidebarActionType";
import { IToggleMenuSidebarCRAction } from "./IToggleMenuSidebarCRAction";

@injectable()
export class ToggleMenuSidebarCaseReducer implements IAppStateCaseReducer<IsMenuSidebarOpenStateType, ToggleMenuSidebarActionType> {

  private _actionTypeList: string[]; 

  public constructor(
    @multiInject("") actions: IToggleMenuSidebarCRAction[]
  ) {
    this._actionTypeList = actions.map(( action: IToggleMenuSidebarCRAction  ) => action.getType()); 
  }

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
