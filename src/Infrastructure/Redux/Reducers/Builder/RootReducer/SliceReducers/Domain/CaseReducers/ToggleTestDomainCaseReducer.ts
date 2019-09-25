import { ReducersMapObject } from "redux";
import "reflect-metadata";
import { injectable, multiInject } from "inversify";
import { IDomainCaseReducer } from "./IDomainCaseReducer";
import { IsTestDomainStateType } from "../../../../../../States/StateType";
import { ToggleTestDomainActionType, ToggleTestDomainActionTypeName } from "../../../../../../Actions/DomainActions/ToggleTestDomainActionType";

@injectable()
export class ToggleTestDomainCaseReducer implements IDomainCaseReducer<IsTestDomainStateType, ToggleTestDomainActionType> {

  private _actionTypeList: string[] = [
    ToggleTestDomainActionTypeName,
  ];

  getReducer(): ReducersMapObject<IsTestDomainStateType, ToggleTestDomainActionType> {
    return {
      isTestDomainOpen: (isTestDomainOpen: boolean, action: ToggleTestDomainActionType): boolean => {
        if (this._actionTypeList.includes(action.type)) {
          return !isTestDomainOpen;
        } else {
          return isTestDomainOpen;
        }
      }
    }
  }
}
