import { ISliceReducer } from "../ISliceReducer";
import { ReducersMapObject, Action, AnyAction } from "redux";
import { multiInject, injectable } from "inversify";
import { IAppStateCaseReducer } from "./CaseReducers/IAppStateCaseReducer";
import { TYPES } from "../../../../../../../DI/DepTypes";
import { AppStateObjectType, AppStateValueType } from "../../../../../States/StateType";
import "reflect-metadata";

@injectable()
export class AppStateSliceReducer implements ISliceReducer<AppStateObjectType> {

  private _appStateCaseReducers: IAppStateCaseReducer[]

  public constructor(
    @multiInject(TYPES.IAppStateCaseReducers) appStateCaseReducers: IAppStateCaseReducer[]
  ) {
    this._appStateCaseReducers = appStateCaseReducers;
  }

  getSlicerReducerMapObject(): ReducersMapObject<AppStateObjectType, AnyAction> {
    return {
      app: (state: AppStateValueType, action: AnyAction) => {
        return this._appStateCaseReducers.reduce<AppStateValueType>((prev, cur) => {
          return { ...prev, ...cur.getReducer() }
        }, null);
      }
    }
  }
}
