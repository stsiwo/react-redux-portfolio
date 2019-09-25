import { ReducersMapObject } from "redux";
import "reflect-metadata";
import { injectable, multiInject } from "inversify";
import { IDomainCaseReducer } from "./IDomainCaseReducer";
import { IsTestDomain1StateType } from "../../../../../../States/StateType";
import { ToggleTestDomain1ActionType, ToggleTestDomain1ActionTypeName } from "../../../../../../Actions/DomainActions/ToggleTestDomain1ActionType";

@injectable()
export class ToggleTestDomain1CaseReducer implements IDomainCaseReducer<IsTestDomain1StateType, ToggleTestDomain1ActionType> {

  private _actionTypeList: string[] = [
    ToggleTestDomain1ActionTypeName,
  ];

  getReducer(): ReducersMapObject<IsTestDomain1StateType, ToggleTestDomain1ActionType> {
    return {
      isTestDomain1Open: (isTestDomain1Open: boolean, action: ToggleTestDomain1ActionType): boolean => {
        if (this._actionTypeList.includes(action.type)) {
          return !isTestDomain1Open;
        } else {
          return isTestDomain1Open;
        }
      }
    }
  }
}
