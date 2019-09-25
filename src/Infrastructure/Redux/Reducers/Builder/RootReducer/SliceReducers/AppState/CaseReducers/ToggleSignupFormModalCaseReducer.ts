import { ReducersMapObject } from "redux";
import "reflect-metadata";
import { injectable, multiInject } from "inversify";
import { IsSignupFormModalOpenStateType } from "../../../../../../States/StateType";
import { ToggleSignupFormModalActionType, ToggleSignupFormModalActionTypeName } from "../../../../../../Actions/AppStateActions/ToggleSignupFormModalActionType";
import { IAppStateCaseReducer } from "./IAppStateCaseReducer";

@injectable()
export class ToggleSignupFormModalCaseReducer implements IAppStateCaseReducer<IsSignupFormModalOpenStateType, ToggleSignupFormModalActionType> {

  private _actionTypeList: string[] = [
    ToggleSignupFormModalActionTypeName,
  ];

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
