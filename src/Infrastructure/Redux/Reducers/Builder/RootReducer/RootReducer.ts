import { IRootReducer } from "./IRootReducer";
import { Reducer, AnyAction } from "redux";
import { multiInject, injectable } from "inversify";
import { TYPES } from "../../../../../DI/DepTypes";
import { ISliceReducer } from "./SliceReducers/ISliceReducer";
import { StateType } from "../../../States/StateType";
import "reflect-metadata";

@injectable()
export class RootReducer implements IRootReducer {

  private _sliceReducers: ISliceReducer[]

  public constructor(
    @multiInject(TYPES.ISliceReducers) sliceReducers: ISliceReducer[]
  ) {
    this._sliceReducers = sliceReducers;
  }

  combine(): Reducer<StateType, AnyAction> {
    return (state: StateType, action: AnyAction) => {
      return this._sliceReducers.reduce<StateType>((prev, cur) => {
        return { ...prev, ...cur.getSlicerReducerMapObject() }
      }, null);
    }
  }

}
