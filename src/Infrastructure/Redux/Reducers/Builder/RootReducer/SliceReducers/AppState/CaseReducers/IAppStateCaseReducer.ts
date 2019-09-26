import { Reducer, Action, AnyAction, ReducersMapObject } from "redux";

export interface IAppStateCaseReducer<S = any, A extends AnyAction = AnyAction> {

  getReducer(): ReducersMapObject<S, A>; 
}
