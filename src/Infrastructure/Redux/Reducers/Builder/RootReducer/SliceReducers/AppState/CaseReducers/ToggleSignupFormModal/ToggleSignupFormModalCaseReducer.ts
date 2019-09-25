import { ReducersMapObject } from "redux";
import "reflect-metadata";
import { injectable, multiInject } from "inversify";
import { IAppStateCaseReducer } from "../IAppStateCaseReducer";
import { IsSignupFormModalOpenStateType } from "../../../../../../../States/StateType";
import { ToggleSignupFormModalActionType } from "../../../../../../../Actions/AppStateActions/ToggleSignupFormModal/ToggleSignupFormModalActionType";
import { IToggleSignupFormModalCRAction } from "./IToggleSignupFormModalCRAction";

@injectable()
export class ToggleSignupFormModalCaseReducer implements IAppStateCaseReducer<IsSignupFormModalOpenStateType, ToggleSignupFormModalActionType> {

  private _actionTypeList: string[]; 

  public constructor(
    @multiInject("") actions: IToggleSignupFormModalCRAction[]
  ) {
    this._actionTypeList = actions.map(( action: IToggleSignupFormModalCRAction  ) => action.getType()); 
  }

  getReducer(): ReducersMapObject<IsSignupFormModalOpenStateType, ToggleSignupFormModalActionType> {
    return {
      isSignupFormModalOpen: (isSignupFormModalOpen: boolean, action: ToggleSignupFormModalActionType): boolean => {
        if (this._actionTypeList.includes(action.type)) {
          return !isSignupFormModalOpen;
        } else {
          return isSignupFormModalOpen;
        }
      }
    }
  }
}
