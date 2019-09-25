import { Reducer, Action, AnyAction, ReducersMapObject } from "redux";
import { CaseReducerMapObjectType } from "../../CaseReducerMapObjectType";

export interface IAppStateCaseReducer<S = any, A extends Action<any> = AnyAction> {

  getReducer(): ReducersMapObject<S, A>; 
}
