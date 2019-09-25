import { AnyAction, ReducersMapObject } from "redux";
import { AppStateObjectType, DomainStateObjectType, StateType } from "../../../../States/StateType";

export interface ISliceReducer<S = any> {

  getSlicerReducerMapObject(): ReducersMapObject<S, AnyAction>;

}

