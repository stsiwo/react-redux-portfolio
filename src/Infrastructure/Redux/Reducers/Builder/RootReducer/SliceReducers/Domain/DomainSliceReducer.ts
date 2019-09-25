import { multiInject, injectable } from "inversify";
import { AnyAction, ReducersMapObject } from "redux";
import { TYPES } from "../../../../../../../DI/DepTypes";
import { DomainStateObjectType, DomainStateValueType } from "../../../../../States/StateType";
import { ISliceReducer } from "../ISliceReducer";
import { IDomainCaseReducer } from "./CaseReducers/IDomainCaseReducer";
import "reflect-metadata";

@injectable()
export class DomainSliceReducer implements ISliceReducer<DomainStateObjectType> {

  private _domainCaseReducers: IDomainCaseReducer[]

  public constructor(
    @multiInject(TYPES.IDomainCaseReducers) domainCaseReducers: IDomainCaseReducer[]
  ) {
    this._domainCaseReducers = domainCaseReducers;
  }

  getSlicerReducerMapObject(): ReducersMapObject<DomainStateObjectType, AnyAction> {
    return {
      domain: (state: DomainStateValueType, action: AnyAction) => {
        return this._domainCaseReducers.reduce<DomainStateValueType>((prev, cur) => {
          return { ...prev, ...cur.getReducer() }
        }, null);
      }
    }
  }
}
