import { ReducersMapObject } from "redux";
import "reflect-metadata";
import { injectable, multiInject } from "inversify";
import { IDomainCaseReducer } from "../IDomainCaseReducer";
import { IsTestDomain1StateType } from "../../../../../../../States/StateType";
import { ToggleTestDomain1ActionType } from "../../../../../../../Actions/DomainActions/ToggleTestDomain1/ToggleTestDomain1ActionType";
import { IToggleTestDomain1CRAction } from "./IToggleTestDomain1CRAction";

@injectable()
export class ToggleTestDomain1CaseReducer implements IDomainCaseReducer<IsTestDomain1StateType, ToggleTestDomain1ActionType> {

  private _actionTypeList: string[]; 

  public constructor(
    @multiInject("") actions: IToggleTestDomain1CRAction[]
  ) {
    this._actionTypeList = actions.map(( action: IToggleTestDomain1CRAction  ) => action.getType()); 
  }

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
